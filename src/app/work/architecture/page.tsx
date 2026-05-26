import Link from 'next/link';
import Artwork from '@/components/artwork';
import ScrollReveal from '@/components/ScrollReveal';
import projects from '@/data/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Architecture & Design',
  description: 'Spaces that perform as well as they appear. From private residences to civic buildings and cultural institutions.',
};

const capabilities = [
  'Residential Design','Cultural Buildings','Urban Planning','Interior Architecture',
  'Landscape Architecture','Adaptive Reuse','Heritage Conservation','Site Analysis',
  'Structural Coordination','Environmental Performance','Construction Documentation','Post-Occupancy',
];

export default function ArchitecturePage() {
  const pillarProjects = projects.filter(p => p.discipline === 'architecture');

  return (
    <>
      <section className="pillar-hero">
        <div className="grad-layer" style={{ background: 'linear-gradient(135deg, #1a1410 0%, #5a3a28 35%, #c9785a 70%, #f0c987 100%)' }} />
        <div className="art-layer"><Artwork name="mountains" /></div>
        <div className="vignette" />
        <div className="pillar-hero-content">
          <div className="container">
            <div className="pillar-eyebrow">
              <Link href="/">Home</Link>
              <span className="pipe" />
              <span>Work</span>
              <span className="pipe" />
              Architecture
            </div>
            <h1 className="pillar-title">Architecture<br/><em>&amp; Design</em></h1>
            <p className="pillar-tagline">Spaces that perform as well as they appear.</p>
            <div className="pillar-meta-strip">
              <div><div className="k">Projects</div><div className="v">{pillarProjects.length}</div></div>
              <div><div className="k">Focus</div><div className="v">Built &amp; In Progress</div></div>
              <div><div className="k">Studios</div><div className="v">Boulder · Manchester</div></div>
              <div><div className="k">Coord</div><div className="v">40.0150° N</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="pillar-intro">
        <div className="container">
          <div className="pillar-intro-grid">
            <ScrollReveal><span className="label">About This Discipline</span></ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p>We design buildings and spaces that belong to their context. Not in a nostalgic sense, but in the sense that they are made of the right materials, positioned correctly on their sites, and organised around how the people who use them actually behave. Architecture is the longest-lived product a studio can make. We take that seriously.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 4rem' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-label" style={{ marginBottom: '2rem' }}>
              <span className="num" style={{ color: 'var(--azure)' }}>Capabilities</span>
              <span className="line" style={{ flex: 1, maxWidth: 60 }} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ul className="capability-list">
              {capabilities.map(c => <li key={c}>{c}</li>)}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="pillar-projects">
        <div className="container">
          <div className="pillar-projects-head">
            <span>Projects</span>
            <span className="line" />
            <span style={{ color: 'var(--azure)' }}>{pillarProjects.length}</span>
          </div>
          <div className="pillar-projects-grid">
            {pillarProjects.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 0.1}>
                <Link href={`/work/${p.slug}`} className="work-card in">
                  <div className="work-card-art">
                    <div className="grad" style={{ background: p.grad }} />
                    <div className="art-svg"><Artwork name={p.art} /></div>
                    <span className="tag">{p.disciplineLabel}</span>
                    <span className="status"><span className="dot" style={{ background: p.status === 'Built' || p.status === 'Live' || p.status === 'Launched' ? 'var(--azure)' : 'var(--amber)' }} />{p.status}</span>
                  </div>
                  <div className="work-card-body">
                    <div className="title">{p.title}</div>
                    <div className="meta"><span>{p.year}</span><span>{p.location}</span></div>
                    <div className="arrow" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
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
              <Link href="/work/web" className="other-pillar-card">
                <div className="name">Web &amp; <em>Software</em></div>
                <span className="arrow">→</span>
              </Link>
              <Link href="/work/marketing" className="other-pillar-card">
                <div className="name">Marketing &amp; <em>Advertising</em></div>
                <span className="arrow">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
