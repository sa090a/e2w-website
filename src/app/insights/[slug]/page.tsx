import Link from 'next/link';
import { notFound } from 'next/navigation';
import Artwork from '@/components/artwork';
import ScrollReveal from '@/components/ScrollReveal';
import insights from '@/data/insights';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return insights.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find(a => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.tagline,
    openGraph: { title: article.title, description: article.tagline, type: 'article', publishedTime: article.publishedAt, authors: [article.author] },
    twitter: { card: 'summary_large_image', title: article.title, description: article.tagline },
  };
}

function parseInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[\^\d+\])/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*')) return <em key={i}>{part.slice(1, -1)}</em>;
    if (part.startsWith('`') && part.endsWith('`')) return <code key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9em', background: 'rgba(107,158,255,0.12)', padding: '0.1em 0.35em', borderRadius: 3 }}>{part.slice(1, -1)}</code>;
    // Footnote citation marker [^n] -> a superscript link to the Sources list.
    const fn = /^\[\^(\d+)\]$/.exec(part);
    if (fn) {
      const n = fn[1];
      return (
        <sup key={i} style={{ fontSize: '0.7em', lineHeight: 0 }}>
          <a id={`ref-${n}`} href={`#fn-${n}`} style={{ color: 'var(--azure)', textDecoration: 'none' }}>{n}</a>
        </sup>
      );
    }
    return part;
  });
}

// Render a footnote's text, turning the trailing source URL into a link.
function renderFootnote(text: string): React.ReactNode {
  const m = /^(.*?)(https?:\/\/\S+)\s*$/.exec(text);
  if (!m) return text;
  const [, label, url] = m;
  return (
    <>
      {label}
      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--azure)', wordBreak: 'break-word' }}>
        {url.replace(/^https?:\/\//, '')}
      </a>
    </>
  );
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insights.find(a => a.slug === slug);
  if (!article) notFound();

  const nextArticle = insights.find(a => a.slug !== article.slug) ?? insights[0];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.tagline,
    datePublished: article.publishedAt,
    author: { '@type': 'Person', name: article.author },
    publisher: { '@type': 'Organization', name: 'The E2W Company', url: 'https://www.e2w.company' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="pillar-hero" style={{ minHeight: '60vh' }}>
        <div className="grad-layer" style={{ background: article.grad }} />
        <div className="art-layer"><Artwork name={article.art} /></div>
        <div className="vignette" />
        <div className="pillar-hero-content">
          <div className="container">
            <div className="pillar-eyebrow">
              <Link href="/insights">Insights</Link>
              <span className="pipe" />
              {article.category}
            </div>
            <h1 className="pillar-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}>{article.title}</h1>
            <p className="pillar-tagline">{article.tagline}</p>
            <div className="pillar-meta-strip">
              <div><div className="k">Author</div><div className="v">{article.author}</div></div>
              <div><div className="k">Role</div><div className="v">{article.authorTitle}</div></div>
              <div><div className="k">Published</div><div className="v">{article.publishedLabel}</div></div>
              <div><div className="k">Read Time</div><div className="v">{article.readTime}</div></div>
            </div>
          </div>
        </div>
      </section>

      <article style={{ padding: '6rem 0 4rem' }}>
        <div className="container">
          <div style={{ maxWidth: '70ch', margin: '0 auto' }}>
            {article.sections.map((s, i) => {
              // Footnotes are reference apparatus — they render in the Sources
              // list below, not inline in the article body.
              if (s.kind === 'footnote') return null;
              if (s.kind === 'h2') return (
                <ScrollReveal key={i}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--paper)', margin: '3.5rem 0 1.25rem' }}>{s.text}</h2>
                </ScrollReveal>
              );
              if (s.kind === 'h3') return (
                <ScrollReveal key={i}>
                  <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--azure)', margin: '2.5rem 0 0.75rem' }}>{s.text}</h3>
                </ScrollReveal>
              );
              if (s.kind === 'pullquote') return (
                <ScrollReveal key={i}>
                  <blockquote style={{ margin: '3rem 0', padding: '1.5rem 0 1.5rem 2rem', borderLeft: '3px solid var(--azure)', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', lineHeight: 1.35, color: 'var(--paper)', letterSpacing: '-0.005em' }}>
                    {s.text}
                  </blockquote>
                </ScrollReveal>
              );
              return (
                <ScrollReveal key={i}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)', lineHeight: 1.7, color: 'var(--paper-dim)', marginBottom: '1.5rem' }}>
                    {parseInline(s.text)}
                  </p>
                </ScrollReveal>
              );
            })}

            {article.sections.some(s => s.kind === 'footnote') && (
              <ScrollReveal>
                <section style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--line)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--paper-mute)', marginBottom: '1.5rem' }}>Sources</div>
                  <ol style={{ margin: 0, paddingLeft: '1.5rem', display: 'grid', gap: '0.75rem' }}>
                    {article.sections.filter(s => s.kind === 'footnote').map((s, i) => (
                      <li key={i} id={`fn-${i + 1}`} style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', lineHeight: 1.55, color: 'var(--paper-mute)' }}>
                        {renderFootnote(s.text)}
                      </li>
                    ))}
                  </ol>
                </section>
              </ScrollReveal>
            )}
          </div>
        </div>
      </article>

      <section style={{ padding: '2rem 0 4rem', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div style={{ maxWidth: '70ch', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--paper-mute)' }}>Share this article</span>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {['Copy Link','LinkedIn','X / Twitter'].map(v => (
                <span key={v} className="chip">{v}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 0 6rem' }}>
        <div className="container">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--paper-mute)', marginBottom: '2rem' }}>Read Next</div>
          <ScrollReveal>
            <Link href={`/insights/${nextArticle.slug}`} className="next-card">
              <div className="grad-layer" style={{ background: nextArticle.grad }} />
              <div className="art-layer"><Artwork name={nextArticle.art} /></div>
              <div className="vignette" />
              <div className="body">
                <div className="label">{nextArticle.category}</div>
                <div className="name">{nextArticle.title}</div>
                <div className="arrow">Read Article <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
