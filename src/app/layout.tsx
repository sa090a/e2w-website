import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Instrument_Serif, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import NetworkCanvasWrapper from '@/components/NetworkCanvasWrapper';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const plusJakarta = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <head>
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
