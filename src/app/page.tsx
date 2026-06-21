import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Artwork from '@/components/artwork';
import LocationsMap from '@/components/LocationsMap';
import ServicesAccordion from '@/components/ServicesAccordion';
import projects from '@/data/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The E2W Company — Empowering Diversity, Driving Innovation',
  description: 'A multidisciplinary studio working across architecture, web, software, and marketing. Based in Boulder, Manchester, and Islamabad.',
};

const pillars = [
  {
    num: '01', slug: 'architecture',
    title: 'Architecture', titleEm: '& Design',
    tagline: 'Spaces that perform as well as they appear. From private residences to civic buildings.',
    art: 'mountains' as const,
    grad: 'linear-gradient(135deg, #1a1410 0%, #5a3a28 35%, #c9785a 70%, #f0c987 100%)',
    coord: '40.0150° N',
  },
  {
    num: '02', slug: 'web',
    title: 'Web &', titleEm: 'Software',
    tagline: 'Platforms, products, and design systems that scale. Built for performance and longevity.',
    art: 'curves' as const,
    grad: 'linear-gradient(135deg, #001824 0%, #00465e 30%, #006b8c 65%, #5fc8d8 100%)',
    coord: '53.4808° N',
  },
  {
    num: '03', slug: 'marketing',
    title: 'Marketing &', titleEm: 'Advertising',
    tagline: 'Brand strategy, identity, and campaigns that move markets and build lasting recognition.',
    art: 'orbits' as const,
    grad: 'linear-gradient(135deg, #07082a 0%, #1f2070 30%, #4040a0 65%, #8080d0 100%)',
    coord: '33.7200° N',
  },
];

const approachSteps = [
  {
    step: '01', title: 'Listen,', em: 'carefully.',
    body: 'Every engagement begins with a discovery sprint. We learn the business, the constraints, the politics, the personalities. Then we challenge the brief.',
  },
  {
    step: '02', title: 'Frame the', em: 'question.',
    body: 'Most projects fail because the wrong question got answered well. We spend disproportionate time framing — strategy, scope, success criteria — before any pixels move.',
  },
  {
    step: '03', title: 'Make,', em: 'iterate.',
    body: 'Short cycles, transparent progress, real conversation. You see work weekly, not at three big reveals. Course corrections happen cheaply, before they cost you anything.',
  },
  {
    step: '04', title: 'Ship,', em: 'support.',
    body: 'Launch is the start, not the end. We stay involved — measuring, refining, building the next thing. Most clients become long-term partners. That is the goal.',
  },
];

export default function HomePage() {
  const counts = ['architecture', 'web', 'marketing'].map(d => projects.filter(p => p.discipline === d).length);

  return (
    <>
      {/* 01 HERO */}
      <section className="hero">
        <div className="container" style={{ width: '100%' }}>
          <div className="hero-grid">
            <div>
              <div className="hero-eyebrow">
                <span className="line" />
                <span className="num">E2W</span>
                Boulder · Manchester · Islamabad
              </div>
              <h1 className="hero-title">
                <span className="line"><span>Empowering</span></span>
                <span className="line"><span><em>diversity,</em></span></span>
                <span className="line"><span>driving innovation.</span></span>
              </h1>
              <div className="hero-meta">
                <div className="stripe">
                  <span><strong>Architecture</strong></span>
                  <span><strong>Web & Software</strong></span>
                  <span><strong>Marketing</strong></span>
                  <span><strong>Est. 2024</strong></span>
                </div>
              </div>
            </div>
            <div className="hero-side">
              <p>A Colorado studio engineering the built environment, digital products, and market-facing narratives for clients who want work that lasts.</p>
              <div className="hero-actions">
                <Link href="/work/architecture" className="btn btn-primary">View Our Work <span className="arrow">→</span></Link>
                <Link href="/contact" className="btn btn-ghost">Start a Project</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" aria-hidden="true">
          <div className="bar" />
          <span>Scroll</span>
        </div>
      </section>

      {/* 02 MANIFESTO */}
      <section className="section manifesto">
        <div className="container">
          <ScrollReveal>
            <div className="section-label"><span className="num">01</span><span className="line" />Manifesto</div>
          </ScrollReveal>
          <div className="manifesto-grid">
            <ScrollReveal delay={0.1}>
              <p className="manifesto-text">
                We believe the best work happens when <strong>design, engineering, and strategy</strong> share the same room from the start — not handed off sequentially. <em>Multidisciplinary</em> is how we are organised.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <p style={{ color: 'var(--paper-dim)', lineHeight: 1.65, fontSize: '1rem', marginBottom: '1.5rem' }}>
                  Founded in 2024, The E2W Company is a Colorado LLC operating across three studios on two continents. We work with founders, institutions, and scale-ups who need work that looks right on day one and performs better on year three.
                </p>
                <div className="manifesto-stats">
                  {[['3','Disciplines'],['6','Projects'],['3','Continents'],["'24",'Founded']].map(([v,l]) => (
                    <div key={l} className="stat">
                      <div className="v">{v}<em>.</em></div>
                      <div className="l">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 02 PILLAR GATEWAYS */}
      <section className="section work">
        <div className="container">
          <ScrollReveal>
            <div className="section-label"><span className="num">02</span><span className="line" />What We Do</div>
            <div className="work-head">
              <h2 className="section-title">Three <em>pillars,</em><br/>one studio.</h2>
              <p>Every project belongs to one of three disciplines. Distinct in practice, unified in culture.</p>
            </div>
          </ScrollReveal>
          <div className="pillar-gateway-grid">
            {pillars.map((p, i) => (
              <Link key={p.slug} href={`/work/${p.slug}`} className="pillar-gateway reveal in" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="pg-art">
                  <div className="pg-grad" style={{ background: p.grad }} />
                  <div className="pg-svg"><Artwork name={p.art} /></div>
                  <div className="pg-vignette" />
                </div>
                <div className="pg-body">
                  <div className="pg-num">{p.num} / {p.coord}</div>
                  <h3 className="pg-title">{p.title} <em>{p.titleEm}</em></h3>
                  <p className="pg-tagline">{p.tagline}</p>
                  <div className="pg-foot">
                    <span className="pg-meta">{counts[i]} project{counts[i] !== 1 ? 's' : ''}</span>
                    <span className="pg-arrow">Explore
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 03 SERVICES ACCORDION */}
      <ServicesAccordion />

      {/* 04 APPROACH */}
      <section className="section approach">
        <div className="container">
          <ScrollReveal>
            <div className="section-label"><span className="num">04</span><span className="line" />How We Work</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', marginBottom: '3rem' }}>
              How we <em>actually</em> work.
            </h2>
          </ScrollReveal>
          <div className="approach-grid">
            {approachSteps.map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.08}>
                <div className="approach-card">
                  <div className="step">STEP {s.step}</div>
                  <h3>{s.title} <em>{s.em}</em></h3>
                  <p>{s.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 LOCATIONS */}
      <section className="section locations">
        <div className="container">
          <ScrollReveal>
            <div className="section-label"><span className="num">05</span><span className="line" />Where We Are</div>
            <h2 className="section-title">Three studios.<br/>Three <em>time zones.</em></h2>
          </ScrollReveal>
          <LocationsMap />
        </div>
      </section>

      {/* MARQUEE */}
      <section className="section values">
        <div className="marquee-wrap">
          <div className="value-marquee" aria-hidden="true">
            {['Empowering','Diversity','Driving','Innovation','Architecture','Web','Marketing','Empowering','Diversity','Driving','Innovation','Architecture','Web','Marketing'].map((v, i) => (
              <span key={i} className="value-item">
                {i % 3 === 0 ? <em>{v}</em> : v}
                <span className="dot" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 06 CONTACT CTA */}
      <section className="section contact">
        <div className="container">
          <div className="contact-grid">
            <ScrollReveal>
              <div className="section-label"><span className="num">06</span><span className="line" />Get In Touch</div>
              <h2 className="contact-title">Let&apos;s build<br/><em>something.</em></h2>
              <div className="contact-meta">
                {[
                  ['General','hello@e2w.company','mailto:hello@e2w.company'],
                  ['New Business','projects@e2w.company','mailto:projects@e2w.company'],
                  ['US Phone','+1 (720) 768-1606','tel:+17207681606'],
                ].map(([k,v,href]) => (
                  <div key={k} className="row">
                    <span className="k">{k}</span>
                    <span className="v"><a href={href}>{v}</a></span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 2.2vw, 1.75rem)', lineHeight: 1.35, color: 'var(--paper-dim)', marginBottom: '2.5rem' }}>
                We reply within one business day. Tell us what you&apos;re building and we&apos;ll tell you if we&apos;re the right fit.
              </p>
              <Link href="/contact" className="btn btn-primary">Start a Project <span className="arrow">→</span></Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
