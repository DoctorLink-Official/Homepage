import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 환경에 따른 base URL 설정
const getBaseUrl = () => {
  const basePath = process.env.BASE_PATH || '';
  if (process.env.NODE_ENV === 'production') {
    return `https://doctorlink.co.kr${basePath}`;
  }
  return `http://localhost:3000${basePath}`;
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "닥터링크 | DoctorLink - 의료진과 환자를 연결하는 플랫폼",
  description: "닥터링크는 의료진과 환자를 효과적으로 연결하는 혁신적인 의료 플랫폼입니다. 전문적이고 신뢰할 수 있는 의료 서비스를 제공합니다.",
  keywords: "닥터링크, DoctorLink, 의료, 병원, 의사, 환자, 의료진, 헬스케어, 의료 플랫폼, 건강검진, 검진예약, 의료마케팅",
  authors: [{ name: "DoctorLink Team" }],
  creator: "DoctorLink",
  publisher: "DoctorLink Corp",
  applicationName: "DoctorLink Homepage",
  category: "Healthcare",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: baseUrl,
    title: '닥터링크 | DoctorLink - 의료진과 환자를 연결하는 플랫폼',
    description: '닥터링크는 의료진과 환자를 효과적으로 연결하는 혁신적인 의료 플랫폼입니다. 전문적이고 신뢰할 수 있는 의료 서비스를 제공합니다.',
    siteName: 'DoctorLink',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: '닥터링크 - 의료진과 환자를 연결하는 플랫폼',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '닥터링크 | DoctorLink - 의료진과 환자를 연결하는 플랫폼',
    description: '닥터링크는 의료진과 환자를 효과적으로 연결하는 혁신적인 의료 플랫폼입니다.',
    images: ['/images/twitter-image.png'],
  },
  verification: {
    google: '',  // 추후 Google Search Console 인증 시 사용
    other: {
      'naver-site-verification': '',  // 추후 네이버 웹마스터 인증 시 사용
    }
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#2563eb',
      },
    ],
  },
  manifest: '/site.webmanifest'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "닥터링크 (DoctorLink)",
    "description": "의료진과 환자를 효과적으로 연결하는 혁신적인 의료 플랫폼",
    "url": baseUrl,
    "logo": `${baseUrl}/assets/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "1644-0000",
      "contactType": "customer service",
      "email": "doctorlink.info@gmail.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KR",
      "addressRegion": "서울특별시",
      "addressLocality": "서초구",
      "streetAddress": "효령로 431 2층"
    },
    "sameAs": []
  };

  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
