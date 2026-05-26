import Link from 'next/link';
import Artwork from '@/components/artwork';
import ScrollReveal from '@/components/ScrollReveal';
import insights from '@/data/insights';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Research, writing, and thinking from the studios of The E2W Company on architecture, web, software, and marketing.',
};

export default function InsightsPage() {
  const featured = insights.find(a => a.featured) ?? insights[0];
  const rest = insights.filter(a => a.slug !== featured.slug);

  return (
    <>
      <section style={{ paddingTop: '8rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div className="section-label"><span className="num" style={{ color: 'var(--azure)' }}>Insights</span><span className="line" /></div>
          <h1 className="section-title" style={{ marginBottom: '3rem' }}>Research &amp; <em>Writing.</em></h1>
        </div>
      </section>

      {/* Featured */}
      <section style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <ScrollReveal>
            <Link href={`/insights/${featured.slug}`} className="work-card in" style={{ display: 'block', borderRadius: 6 }}>
              <div className="work-card-art" style={{ aspectRatio: '16/7' }}>
                <div className="grad" style={{ background: featured.grad }} />
                <div className="art-svg"><Artwork name={featured.art} /></div>
                <span className="tag">{featured.category}</span>
                <span className="status" style={{ top: '1rem', right: '1rem', left: 'auto' }}>{featured.readTime}</span>
              </div>
              <div className="work-card-body" style={{ padding: '2rem', minHeight: 'auto' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--azure)', marginBottom: '0.75rem' }}>Featured</div>
                <div className="title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '0.75rem' }}>{featured.title}</div>
                <p style={{ fontSize: '1rem', color: 'var(--paper-dim)', lineHeight: 1.6, maxWidth: '60ch' }}>{featured.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--line)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--paper-mute)' }}>{featured.publishedLabel} · {featured.author}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--paper)' }}>Read →</span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid */}
      <section style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {rest.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 0.1}>
                <Link href={`/insights/${article.slug}`} className="work-card in" style={{ display: 'block' }}>
                  <div className="work-card-art" style={{ aspectRatio: '4/3' }}>
                    <div className="grad" style={{ background: article.grad }} />
                    <div className="art-svg"><Artwork name={article.art} /></div>
                    <span className="tag">{article.category}</span>
                    <span className="status" style={{ top: '1rem', right: '1rem', left: 'auto' }}>{article.readTime}</span>
                  </div>
                  <div className="work-card-body">
                    <div className="title" style={{ fontSize: '1.45rem' }}>{article.title}</div>
                    <p style={{ fontSize: '0.92rem', color: 'var(--paper-dim)', lineHeight: 1.55, marginTop: '0.5rem' }}>{article.excerpt}</p>
                    <div className="meta" style={{ marginTop: '1rem' }}>
                      <span>{article.publishedLabel}</span>
                      <span>{article.author}</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
