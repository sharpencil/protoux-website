
import { siteConfig } from '../config/site'
import JsonLd from './analytics/JsonLd'

export default function SEO({
    title,
    description,
    image,
    ogType = 'website',
    canonical
}) {
    const siteTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
    const metaDescription = description || siteConfig.description
    const metaImage = image || siteConfig.ogImage
    const siteUrl = canonical || siteConfig.url

    return (
        <>
            {/* Basic Metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={metaDescription} key="description" />
            <link rel="canonical" href={siteUrl} key="canonical" />
            <meta name="keywords" content={siteConfig.keywords.join(', ')} key="keywords" />
            <meta name="debug-seo" content="active-native" key="debug-seo" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} key="og:type" />
            <meta property="og:title" content={siteTitle} key="og:title" />
            <meta property="og:description" content={metaDescription} key="og:description" />
            <meta property="og:url" content={siteUrl} key="og:url" />
            <meta property="og:image" content={metaImage} key="og:image" />
            <meta property="og:site_name" content={siteConfig.name} key="og:site_name" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
            <meta name="twitter:title" content={siteTitle} key="twitter:title" />
            <meta name="twitter:description" content={metaDescription} key="twitter:description" />
            <meta name="twitter:image" content={metaImage} key="twitter:image" />

            <JsonLd />
        </>
    )
}
