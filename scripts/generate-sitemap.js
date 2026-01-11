import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');
const INSIGHTS_DIR = path.join(PROJECT_ROOT, 'src/content/insights');

const SITE_URL = 'https://protoux.com';

// Base static routes with priorities
// Priority 1.0: Home
// Priority 0.9: Main Landing Pages (Work, Services)
// Priority 0.8: Secondary Pages (About, Pricing, Insights)
// Priority 0.7: Case Studies / Articles
// Priority 0.5: Utility Pages (Start, Thanks)
const staticRoutes = [
    { loc: '/', changefreq: 'weekly', priority: '1.0' },
    { loc: '/services', changefreq: 'weekly', priority: '0.9' },
    { loc: '/work', changefreq: 'weekly', priority: '0.9' },
    { loc: '/work/tforce-logistics', changefreq: 'monthly', priority: '0.9' },
    { loc: '/pricing', changefreq: 'monthly', priority: '0.8' },
    { loc: '/about', changefreq: 'monthly', priority: '0.8' },
    { loc: '/insights', changefreq: 'weekly', priority: '0.8' },
    { loc: '/start', changefreq: 'monthly', priority: '0.5' },
    { loc: '/thanks', changefreq: 'monthly', priority: '0.5' }
];

function generateSitemap() {
    console.log('🗺️  Generating sitemap...');

    const urls = [...staticRoutes];

    // Add dynamic insight routes
    if (fs.existsSync(INSIGHTS_DIR)) {
        const files = fs.readdirSync(INSIGHTS_DIR);
        files.forEach(file => {
            if (file.endsWith('.md')) {
                const slug = file.replace('.md', '');
                urls.push({
                    loc: `/insights/${slug}`,
                    changefreq: 'monthly',
                    priority: '0.7'
                });
            }
        });
    }

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${SITE_URL}${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    if (!fs.existsSync(PUBLIC_DIR)) {
        fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    }

    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapContent);
    console.log(`✅ Sitemap generated at public/sitemap.xml with ${urls.length} URLs.`);
}

generateSitemap();
