'use client';

import { useState } from 'react';

const SERVICES = [
  {
    num: '01',
    name: 'Web & Software',
    nameEm: 'Development',
    slug: 'web',
    body: 'We build digital products that feel inevitable. Design systems, marketing sites, web apps, internal tools, custom CMSs, and the occasional ambitious experiment. Every shipping decision passes through one filter: would we be proud of this in five years.',
    capabilities: [
      'Marketing & e-commerce sites', 'Custom web applications',
      'Design systems & component libraries', 'API design & backend services',
      'Headless CMS implementations', 'Performance & SEO engineering',
      'WordPress & Shopify (when right)', 'Maintenance & retainers',
    ],
  },
  {
    num: '02',
    name: 'Digital Marketing',
    nameEm: '& Advertising',
    slug: 'marketing',
    body: 'Strategy first, channels second. We build the brand foundation, the messaging architecture, and the campaigns that ride them. Data informs but does not dictate — taste still matters, and we still believe in the idea.',
    capabilities: [
      'Brand strategy & positioning', 'Performance marketing (Meta · Google)',
      'SEO & content systems', 'Paid social & creative production',
      'Email & lifecycle marketing', 'Analytics & attribution',
      'Conversion-rate optimisation', 'Quarterly growth planning',
    ],
  },
  {
    num: '03',
    name: 'Architecture',
    nameEm: '& Design',
    slug: 'architecture',
    body: 'Spaces that respect the people who use them and the places they sit in. We work on residential, hospitality, and commercial briefs, and increasingly on the line between physical and digital — retail, exhibitions, brand environments.',
    capabilities: [
      'Residential & commercial design', 'Interior architecture',
      'Space planning & 3D visualisation', 'Brand environments & retail',
      'Construction documentation', 'Sustainable material strategy',
      'FF&E specification', 'Project management',
    ],
  },
];

export default function ServicesAccordion() {
  const [open, setOpen] = useState(0); // first open by default

  return (
    <section className="section services">
      <div className="container">
        <div className="section-label">
          <span className="num">03</span>
          <span className="line" />
          Practice
        </div>
        <div className="services-head">
          <h2 className="section-title">
            Three disciplines.<br />One <em>way of working.</em>
          </h2>
          <p>
            We picked these three because they reinforce each other. A brand needs a website. A website needs an audience. An audience needs a place. The intersections are where the interesting work happens.
          </p>
        </div>

        <div className="service-list">
          {SERVICES.map((s, i) => (
            <div
              key={s.num}
              className={'service-row' + (open === i ? ' open' : '')}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <div className="service-num">{s.num}</div>
              <div className="service-name">{s.name} <em>{s.nameEm}</em></div>
              <div className="arrow-cell" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
              <div className="service-detail">
                <div className="detail-grid">
                  <p>{s.body}</p>
                  <ul className="capability-list">
                    {s.capabilities.map(c => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
