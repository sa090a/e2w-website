export type ArtworkName = 'mountains' | 'arches' | 'curves' | 'grid' | 'organic' | 'orbits';

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  discipline: 'architecture' | 'web' | 'marketing';
  disciplineLabel: string;
  year: string;
  location: string;
  client: string;
  status: string;
  size: string;
  role: string;
  grad: string;
  accent: string;
  art: ArtworkName;
  brief: string;
  approach: string;
  outcome: string;
  metric: string;
  next: string;
}

export type InsightSectionKind = 'p' | 'h2' | 'h3' | 'pullquote' | 'footnote';

export interface InsightSection {
  kind: InsightSectionKind;
  text: string;
}

export interface Insight {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  readTime: string;
  publishedAt: string;
  publishedLabel: string;
  author: string;
  authorTitle: string;
  grad: string;
  art: ArtworkName;
  featured: boolean;
  excerpt: string;
  sections: InsightSection[];
}
