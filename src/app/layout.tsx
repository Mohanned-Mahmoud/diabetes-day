import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'توازنها صح | فعاليات اليوم العالمي للسكري والتمكين الأيضي',
  description:
    'بوابة توازنها المتكاملة للتوعية بمناسبة اليوم العالمي للسكري. استكشف المنصة التفاعلية، وتواصل مباشرة مع أخصائيي الصحة الأيضية، وتعرف على قصتنا وأهدافنا.',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://bmi-app-link.vercel.app" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://bmi-app-link.vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-slate-50/50 text-slate-800 antialiased selection:bg-primary/20 selection:text-navy">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

