'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

const SERVICES = [
  'Architecture', 'Interior Design', 'Web Development', 'Software / Platform',
  'Brand Strategy', 'Identity Design', 'Campaign Planning', 'Performance Marketing',
];
const BUDGETS = ['Under $10k', '$10k–$50k', '$50k–$150k', '$150k–$500k', '$500k+'];
const TIMELINES = ['ASAP', '1–3 months', '3–6 months', '6–12 months', 'Flexible'];

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [services, setServices] = useState<string[]>([]);
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  const toggleService = (s: string) =>
    setServices(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const payload = {
      name, email, company, services, budget, timeline, message,
      source: 'website', page_url: window.location.href, user_agent: navigator.userAgent,
    };
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      if (supabaseUrl && supabaseKey) {
        const { createClient } = await import('@supabase/supabase-js');
        const sb = createClient(supabaseUrl, supabaseKey);
        const { error } = await sb.from('contact_submissions').insert([payload]);
        if (error) throw error;
        setStatus('ok');
      } else {
        const subject = encodeURIComponent(`Project enquiry from ${name}${company ? ' (' + company + ')' : ''}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\nServices: ${services.join(', ')}\nBudget: ${budget}\nTimeline: ${timeline}\n\nBrief:\n${message}`);
        window.location.href = `mailto:projects@e2w.company?subject=${subject}&body=${body}`;
        setStatus('ok');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="container">
        <div className="contact-grid">

          {/* ── Left col: info ── */}
          <div>
            <div className="section-label">
              <span className="num" style={{ color: 'var(--azure)' }}>Contact</span>
              <span className="line" />
            </div>
            <h1 className="contact-title">Let&apos;s build<br /><em>something.</em></h1>
            <p style={{ color: 'var(--paper-dim)', fontSize: '1rem', lineHeight: 1.6, marginTop: '1.5rem', marginBottom: '2.5rem', maxWidth: '36ch' }}>
              We reply within one business day. No obligation, no sales calls — just a direct conversation about whether we&apos;re the right fit.
            </p>
            <div className="contact-meta">
              <div className="row"><span className="k">Email</span><span className="v"><a href="mailto:hello@e2w.company">hello@e2w.company</a></span></div>
              <div className="row"><span className="k">New Business</span><span className="v"><a href="mailto:projects@e2w.company">projects@e2w.company</a></span></div>
              <div className="row"><span className="k">US</span><span className="v"><a href="tel:+17193010359">+1 (719) 301-0359</a></span></div>
              <div className="row"><span className="k">PK</span><span className="v"><a href="tel:+923476133664">+92 347 6133664</a></span></div>
              <div className="row">
                <span className="k">HQ Address</span>
                <span className="v" style={{ lineHeight: 1.5 }}>
                  1942 Broadway St., STE 314C<br />Boulder, Colorado 80302
                </span>
              </div>
            </div>
          </div>

          {/* ── Right col: form ── */}
          <div>
            {status === 'ok' ? (
              <div className="form-status">
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', marginBottom: '0.75rem' }}>Thank you.</div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--paper-dim)' }}>
                  We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="form">

                {/* About you */}
                <div className="form-section">
                  <div className="form-section-label">01 — About You</div>
                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="name">Name *</label>
                      <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} required autoComplete="name" placeholder="Your name" />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Email *</label>
                      <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required autoComplete="email" placeholder="you@company.com" />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="company">Company</label>
                    <input id="company" type="text" value={company} onChange={e => setCompany(e.target.value)} autoComplete="organization" placeholder="Your company (optional)" />
                  </div>
                </div>

                {/* The project */}
                <div className="form-section">
                  <div className="form-section-label">02 — The Project</div>
                  <div className="field">
                    <label>Services (select all that apply)</label>
                    <div className="chip-row">
                      {SERVICES.map(s => (
                        <button key={s} type="button" className={`chip${services.includes(s) ? ' on' : ''}`} onClick={() => toggleService(s)}>{s}</button>
                      ))}
                    </div>
                  </div>
                  <div className="field">
                    <label>Budget range</label>
                    <div className="chip-row">
                      {BUDGETS.map(b => (
                        <button key={b} type="button" className={`chip${budget === b ? ' on' : ''}`} onClick={() => setBudget(budget === b ? '' : b)}>{b}</button>
                      ))}
                    </div>
                  </div>
                  <div className="field">
                    <label>Timeline</label>
                    <div className="chip-row">
                      {TIMELINES.map(t => (
                        <button key={t} type="button" className={`chip${timeline === t ? ' on' : ''}`} onClick={() => setTimeline(timeline === t ? '' : t)}>{t}</button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* The brief */}
                <div className="form-section">
                  <div className="form-section-label">03 — The Brief</div>
                  <div className="field">
                    <label htmlFor="message">Tell us about your project *</label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      required
                      rows={6}
                      placeholder="What are you building, what problem does it solve, and what does success look like?"
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <div className="form-status" style={{ borderColor: 'var(--rose)', color: 'var(--rose)', background: 'rgba(232,154,163,0.06)' }}>
                    Something went wrong. Please email us directly at projects@e2w.company
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                  style={{ alignSelf: 'flex-start', opacity: status === 'sending' ? 0.6 : 1 }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Enquiry'}{status !== 'sending' && <span className="arrow"> →</span>}
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
