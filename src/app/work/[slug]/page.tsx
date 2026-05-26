import Link from 'next/link';
import { notFound } from 'next/navigation';
import Artwork from '@/components/artwork';
import ScrollReveal from '@/components/ScrollReveal';
import projects from '@/data/projects';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    openGraph: { title: project.title, description: project.tagline },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();

  const nextProject = projects.find(p => p.slug === project.next) ?? projects[0];

  return (
    <>
      <section className="project-hero">
        <div className="grad-layer" style={{ background: project.grad }} />
        <div className="art-layer"><Artwork name={project.art} /></div>
        <div className="vignette" />
        <div className="project-hero-content">
          <div className="container">
            <div className="project-eyebrow">
              <Link href="/">Home</Link>
              <span className="pipe" />
              <Link href={`/work/${project.discipline}`}>{project.disciplineLabel}</Link>
              <span className="pipe" />
              {project.title}
            </div>
            <h1 className="project-title">{project.title}</h1>
            <p className="project-tagline">{project.tagline}</p>
            <div className="project-meta-strip">
              <div><div className="k">Client</div><div className="v">{project.client}</div></div>
              <div><div className="k">Location</div><div className="v">{project.location}</div></div>
              <div><div className="k">Status</div><div className="v">{project.status}</div></div>
              <div><div className="k">Role</div><div className="v">{project.role}</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-body">
        <div className="container">
          {[
            { label: 'The Brief', text: project.brief },
            { label: 'The Approach', text: project.approach },
            { label: 'The Outcome', text: project.outcome },
          ].map(({ label, text }, i) => (
            <ScrollReveal key={label} delay={i * 0.1}>
              <div className="project-body-block">
                <div className="label">{label}</div>
                <p>{text}</p>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.1}>
            <div className="project-metric">
              <div className="label">Key Result</div>
              <div className="value"><em>{project.metric}</em></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="project-next">
        <div className="container">
          <div className="section-label" style={{ marginBottom: '2rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--paper-mute)' }}>Next Project</span>
          </div>
          <Link href={`/work/${nextProject.slug}`} className="next-card">
            <div className="grad-layer" style={{ background: nextProject.grad }} />
            <div className="art-layer"><Artwork name={nextProject.art} /></div>
            <div className="vignette" />
            <div className="body">
              <div className="label">{nextProject.disciplineLabel}</div>
              <div className="name">{nextProject.title}</div>
              <div className="arrow">Continue <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
