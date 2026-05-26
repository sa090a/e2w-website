import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import NetworkCanvasWrapper from '@/components/NetworkCanvasWrapper';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.e2w.company'),
  title: {
    default: 'The E2W Company — Empowering Diversity, Driving Innovation',
    template: '%s — The E2W Company',
  },
  description: 'A multidisciplinary studio working across architecture, web, software, and marketing. Based in Boulder, Manchester, and Islamabad.',
  keywords: ['architecture', 'web development', 'digital marketing', 'Boulder Colorado', 'design studio'],
  authors: [{ name: 'The E2W Company' }],
  creator: 'The E2W Company',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.e2w.company',
    siteName: 'The E2W Company',
    title: 'The E2W Company — Empowering Diversity, Driving Innovation',
    description: 'A multidisciplinary studio working across architecture, web, software, and marketing.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The E2W Company',
    description: 'A multidisciplinary studio working across architecture, web, software, and marketing.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.setAttribute('data-theme','light');}else{document.documentElement.removeAttribute('data-theme');}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <NetworkCanvasWrapper />
          <div className="grid-lines" aria-hidden="true" />
          <div className="shell">
            <Nav />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
