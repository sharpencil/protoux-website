import { siteConfig } from '../../config/site'

export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": siteConfig.name,
        "description": siteConfig.description,
        "url": siteConfig.url,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Austin",
            "addressRegion": "TX",
            "addressCountry": "US"
        },
        "priceRange": siteConfig.priceRange,
        "founder": {
            "@type": "Person",
            "name": siteConfig.founder
        },
        // Using sameAs to link to social profiles if they existed
        "sameAs": [
            siteConfig.links.twitter,
            siteConfig.links.github
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
