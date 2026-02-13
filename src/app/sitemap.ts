import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cadena.co';
  const currentDate = new Date().toISOString();

  // Core pages
  const corePages = [
    { url: baseUrl, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.9 },
  ];

  // Service pages
  const servicePages = [
    'sam-pro-implementation',
    'sam-rescue',
    'flexera-migration',
    'ai-software-asset-management',
    'audit-defense',
    'ai-license-optimization',
    'software-rationalization',
    'saas-license-management',
    'cloud-cost-management',
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Industry pages
  const industryPages = [
    'banking',
    'automotive',
    'high-tech',
    'healthcare',
    'telco',
    'insurance',
    'consumer-goods',
    'retail',
    'life-sciences',
    'defense',
  ].map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Resources
  const resourcePages = [
    { url: `${baseUrl}/resources/guides`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.7 },
  ];

  return [...corePages, ...servicePages, ...industryPages, ...resourcePages];
}
