import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://protoux.com'

  const routes = [
    '',
    '/about',
    '/capabilities',
    '/insights',
    '/pricing',
    '/start',
    '/work',
    '/insights/wireframes',
    '/insights/design-systems-infrastructure',
    '/insights/ai-ux',
    '/work/operational-intelligence',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
