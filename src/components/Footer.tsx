import Link from 'next/link';
import LogoMark from './LogoMark';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <LogoMark size={28} />
              <div className="word">
                e2<em>w</em>.
              </div>
            </div>
            <p>
              A multidisciplinary studio working across architecture, web, software, and marketing.
              Empowering diversity, driving innovation.
            </p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/work/architecture">Architecture</Link></li>
              <li><Link href="/work/web">Web & Software</Link></li>
              <li><Link href="/work/marketing">Marketing</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li>
                <a href="mailto:hello@e2w.company">hello@e2w.company</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Locations</h4>
            <ul>
              <li>
                <span style={{ color: 'var(--paper-dim)', fontSize: '0.95rem' }}>
                  Boulder, Colorado
                </span>
              </li>
              <li>
                <span style={{ color: 'var(--paper-dim)', fontSize: '0.95rem' }}>
                  Manchester, UK
                </span>
              </li>
              <li>
                <span style={{ color: 'var(--paper-dim)', fontSize: '0.95rem' }}>
                  Islamabad, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2024 The E2W Company LLC · Colorado · EIN 37-2138394</span>
          <span>
            <a href="mailto:hello@e2w.company">hello@e2w.company</a>
          </span>
        </div>
      </div>

      <div className="footer-mark" aria-hidden="true">e2w.</div>
    </footer>
  );
}
