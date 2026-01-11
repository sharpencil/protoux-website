import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const DIST_DIR = path.join(PROJECT_ROOT, 'dist');
const INSIGHTS_DIR = path.join(PROJECT_ROOT, 'src/content/insights');

// Base routes to prerender
const routes = [
    '/',
    '/services',
    '/work',
    '/work/tforce-logistics',
    '/pricing',
    '/about',
    '/insights',
    '/start',
    '/thanks'
];

// Add dynamic insight routes
// Note: We need to match the logic in Insights.jsx for slug generation
// Typically just the filename without extension
if (fs.existsSync(INSIGHTS_DIR)) {
    const files = fs.readdirSync(INSIGHTS_DIR);
    files.forEach(file => {
        if (file.endsWith('.md')) {
            const slug = file.replace('.md', '');
            routes.push(`/insights/${slug}`);
        }
    });
}

const PORT = 4173; // Default Vite preview port
const BASE_URL = `http://localhost:${PORT}`;

async function prerender() {
    console.log('📦 Starting Prerender Process...');
    console.log(`🎯 Found ${routes.length} routes to render.`);

    // 1. Start the static server (vite preview)
    console.log('🚀 Starting preview server...');
    const server = spawn('npm', ['run', 'preview'], {
        cwd: PROJECT_ROOT,
        stdio: 'pipe', // Pipe stdio so we can listen for "Local:" or "Network:"
        shell: true
    });

    // Wait for server to be ready
    await new Promise((resolve, reject) => {
        let output = '';
        // Set a timeout in case server hangs
        const timeout = setTimeout(() => {
            console.error('SERVER STDOUT:', output);
            reject(new Error('Timeout waiting for preview server'));
        }, 10000);

        server.stdout.on('data', (data) => {
            const str = data.toString();
            output += str;
            if (str.includes('Local:') || str.includes('Network:') || str.includes('4173')) {
                clearTimeout(timeout);
                // Give it a tiny extra buffer
                setTimeout(resolve, 1000);
            }
        });

        server.stderr.on('data', (data) => {
            console.error(`Preview Server Error: ${data}`);
        });
    });

    console.log('✅ Preview server is up.');

    // 2. Launch Puppeteer
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'] // Safer for CI/Docker environments
    });

    try {
        for (const route of routes) {
            console.log(`📷 Rendering: ${route}`);
            const page = await browser.newPage();

            // Navigate
            await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle0' });

            // Wait a bit for any heavy hydration or animations if strictly needed
            // (networkidle0 is usually good, but let's be safe for meta tags)
            // We specifically check for the SEO tag injection which is our goal
            await page.waitForSelector('meta[name="description"]', { timeout: 5000 }).catch(() => {
                console.warn(`⚠️  Warning: Meta description not found for ${route} (possibly ok if page intentionally lacks it)`);
            });

            // Get HTML
            const html = await page.content();

            // Define output path
            // If route is /, write to index.html
            // If route is /about, write to about/index.html
            const relativePath = route === '/' ? 'index.html' : `${route.substring(1)}/index.html`;
            const outputPath = path.join(DIST_DIR, relativePath);
            const outputDir = path.dirname(outputPath);

            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir, { recursive: true });
            }

            fs.writeFileSync(outputPath, html);
            console.log(`   ✨ Saved to dist/${relativePath}`);

            await page.close();
        }
    } catch (err) {
        console.error('❌ Prerender Error:', err);
        process.exit(1);
    } finally {
        await browser.close();
        server.kill(); // Kill the preview server
        console.log('🏁 Prerender complete.');
        process.exit(0);
    }
}

prerender();
