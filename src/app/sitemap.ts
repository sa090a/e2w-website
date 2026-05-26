import { MetadataRoute } from 'next';
import projects from '@/data/projects';
import insights from '@/data/insights';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.e2w.company';
  const now = new Date();

  const staticPages = ['', '/work/architecture', '/work/web', '/work/marketing', '/insights', '/contact'].map(p => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: p === '' ? 1 : 0.8,
  }));

  const projectPages = projects.map(p => ({
    url: `${base}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  const insightPages = insights.map(a => ({
    url: `${base}/insights/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...insightPages];
}
