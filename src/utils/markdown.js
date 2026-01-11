export function parseFrontmatter(markdown) {
    const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/;
    const match = markdown.match(frontmatterRegex);

    if (!match) {
        return {
            metadata: {},
            content: markdown
        };
    }

    const frontmatterBlock = match[1];
    const content = markdown.replace(frontmatterRegex, '').trim();

    const metadata = {};
    frontmatterBlock.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length) {
            let value = valueParts.join(':').trim();
            // Remove quotes if present
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            }
            metadata[key.trim()] = value;
        }
    });

    return { metadata, content };
}
