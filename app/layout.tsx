import type { Metadata } from 'next';

import { Gabarito } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import dynamic from 'next/dynamic';
import './globals.css';

const GoogleAnalytics = dynamic(() => import('@/components/google-analytics'), {
  ssr: false,
});

const DynamicNavbar = dynamic(() => import('@/components/navbar'), {
  ssr: false,
});

const DynamicFooter = dynamic(() => import('@/components/footer'), {
  ssr: false,
});

const DynamicToaster = dynamic(() => import('@/components/ui/toaster'), {
  ssr: false,
});

const CookieBanner = dynamic(() => import('@/components/cookie-banner'), {
  ssr: false,
});

const gabarito = Gabarito({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TaaYoo Styles',
  description:
    'Effortlessly create and beautify your code snippets with TaaYoo Styles, making them eye-catching code showcases.',
  openGraph: {
    title: 'TaaYoo Styles',
    description:
      'Effortlessly create and beautify your code snippets with TaaYoo Styles, making them eye-catching code showcases.',
    url: 'https://taayoo-styles.vercel.app',
    siteName: 'TaaYoo Styles',
    locale: 'en_US',
    type: 'website',
    images: ['/opengraph-image.png', '/twitter-image.png'],
  },
  metadataBase: new URL('https://taayoo-styles.vercel.app'),
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics
        GA_MEASUREMENT_ID={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <body className={gabarito.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DynamicNavbar />
          <main>{children}</main>
          <DynamicFooter />
          <DynamicToaster />
        </ThemeProvider>
        <CookieBanner />
      </body>
    </html>
  );
}
