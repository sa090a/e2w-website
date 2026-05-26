import Link from 'next/link';
import Artwork from '@/components/artwork';
import ScrollReveal from '@/components/ScrollReveal';
import projects from '@/data/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing & Advertising',
  description: 'Brand strategy, identity, and campaigns that move markets and build lasting recognition.',
};

const capabilities = [
  'Brand Strategy','Identity Design','Campaign Planning','Paid Media',
  'Content Strategy','Copywriting','Launch Planning','Market Research',
  'Performance Marketing','Out-of-Home','Social Creative','B2B Marketing',
];

export default function MarketingPage() {
  const pillarProjects = projects.filter(p => p.discipline === 'marketing');
  return (
    <>
      <section className="pillar-hero">
        <div className="grad-layer" style={{ background: 'linear-gradient(135deg, #07082a 0%, #1f2070 30%, #4040a0 65%, #8080d0 100%)' }} />
        <div className="art-layer"><Artwork name="orbits" /></div>
        <div className="vignette" />
        <div className="pillar-hero-content">
          <div className="container">
            <div className="pillar-eyebrow">
              <Link href="/">Home</Link><span className="pipe" /><span>Work</span><span className="pipe" />Marketing
            </div>
            <h1 className="pillar-title">Marketing &amp;<br/><em>Advertising</em></h1>
            <p className="pillar-tagline">Brands that feel inevitable. Campaigns that earn attention.</p>
            <div className="pillar-meta-strip">
              <div><div className="k">Projects</div><div className="v">{pillarProjects.length}</div></div>
              <div><div className="k">Focus</div><div className="v">B2B & Consumer</div></div>
              <div><div className="k">Studios</div><div className="v">All Three</div></div>
              <div><div className="k">Coord</div><div className="v">33.7200° N</div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="pillar-intro">
        <div className="container">
          <div className="pillar-intro-grid">
            <ScrollReveal><span className="label">About This Discipline</span></ScrollReveal>
            <ScrollReveal delay={0.1}><p>We build brands that feel correct — not just polished. The work starts with a single defensible idea about what the brand is for, and every subsequent decision flows from it. When strategy and creative share a room from the start, the result is a brand system that holds together under real conditions: the website, the pitch deck, the out-of-home board, the cold email.</p></ScrollReveal>
          </div>
        </div>
      </section>
      <section style={{ padding: '0 0 4rem' }}>
        <div className="container">
          <ScrollReveal><div className="section-label" style={{ marginBottom: '2rem' }}><span className="num" style={{ color: 'var(--azure)' }}>Capabilities</span><span className="line" style={{ flex: 1, maxWidth: 60 }} /></div></ScrollReveal>
          <ScrollReveal delay={0.1}><ul className="capability-list">{capabilities.map(c => <li key={c}>{c}</li>)}</ul></ScrollReveal>
        </div>
      </section>
      <section className="pillar-projects">
        <div className="container">
          <div className="pillar-projects-head"><span>Projects</span><span className="line" /><span style={{ color: 'var(--azure)' }}>{pillarProjects.length}</span></div>
          <div className="pillar-projects-grid">
            {pillarProjects.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 0.1}>
                <Link href={`/work/${p.slug}`} className="work-card in">
                  <div className="work-card-art">
                    <div className="grad" style={{ background: p.grad }} />
                    <div className="art-svg"><Artwork name={p.art} /></div>
                    <span className="tag">{p.disciplineLabel}</span>
                    <span className="status"><span className="dot" style={{ background: 'var(--azure)' }} />{p.status}</span>
                  </div>
                  <div className="work-card-body">
                    <div className="title">{p.title}</div>
                    <div className="meta"><span>{p.year}</span><span>{p.location}</span></div>
                    <div className="arrow" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="other-pillars">
        <div className="container">
          <ScrollReveal>
            <h2>Explore our other <em>disciplines.</em></h2>
            <div className="other-pillars-grid">
              <Link href="/work/architecture" className="other-pillar-card"><div className="name">Architecture &amp; <em>Design</em></div><span className="arrow">→</span></Link>
              <Link href="/work/web" className="other-pillar-card"><div className="name">Web &amp; <em>Software</em></div><span className="arrow">→</span></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
