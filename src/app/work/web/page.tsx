import Link from 'next/link';
import Artwork from '@/components/artwork';
import ScrollReveal from '@/components/ScrollReveal';
import projects from '@/data/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web & Software Development',
  description: 'Platforms, products, and design systems that scale. Built for performance and longevity.',
};

const capabilities = [
  'Next.js & React','TypeScript','Design Systems','API Design',
  'Headless Commerce','CMS Integration','Performance Optimisation','Accessibility',
  'Database Architecture','DevOps & CI/CD','Mobile-First Development','Technical Strategy',
];

export default function WebPage() {
  const pillarProjects = projects.filter(p => p.discipline === 'web');
  return (
    <>
      <section className="pillar-hero">
        <div className="grad-layer" style={{ background: 'linear-gradient(135deg, #001824 0%, #00465e 30%, #006b8c 65%, #5fc8d8 100%)' }} />
        <div className="art-layer"><Artwork name="curves" /></div>
        <div className="vignette" />
        <div className="pillar-hero-content">
          <div className="container">
            <div className="pillar-eyebrow">
              <Link href="/">Home</Link><span className="pipe" /><span>Work</span><span className="pipe" />Web & Software
            </div>
            <h1 className="pillar-title">Web &amp;<br/><em>Software</em></h1>
            <p className="pillar-tagline">Platforms and products built to last.</p>
            <div className="pillar-meta-strip">
              <div><div className="k">Projects</div><div className="v">{pillarProjects.length}</div></div>
              <div><div className="k">Stack</div><div className="v">Next.js · TypeScript</div></div>
              <div><div className="k">Studios</div><div className="v">Boulder · Islamabad</div></div>
              <div><div className="k">Coord</div><div className="v">53.4808° N</div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="pillar-intro">
        <div className="container">
          <div className="pillar-intro-grid">
            <ScrollReveal><span className="label">About This Discipline</span></ScrollReveal>
            <ScrollReveal delay={0.1}><p>We build digital products that are fast, accessible, and maintainable years after launch. Our approach is architecture-first: we make structural decisions early and resist the temptation to add complexity where simplicity will do. The result is software that behaves correctly under load, holds up through team changes, and requires less remedial work over time.</p></ScrollReveal>
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
              <Link href="/work/marketing" className="other-pillar-card"><div className="name">Marketing &amp; <em>Advertising</em></div><span className="arrow">→</span></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
