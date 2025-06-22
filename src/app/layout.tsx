import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
    url: 'https://doctorlink-official.github.io/Homepage',
    title: '닥터링크 | DoctorLink - 의료진과 환자를 연결하는 플랫폼',
    description: '닥터링크는 의료진과 환자를 효과적으로 연결하는 혁신적인 의료 플랫폼입니다. 전문적이고 신뢰할 수 있는 의료 서비스를 제공합니다.',
    siteName: 'DoctorLink',
  },
  twitter: {
    card: 'summary_large_image',
    title: '닥터링크 | DoctorLink - 의료진과 환자를 연결하는 플랫폼',
    description: '닥터링크는 의료진과 환자를 효과적으로 연결하는 혁신적인 의료 플랫폼입니다.',
  },
  verification: {
    google: '',  // 추후 Google Search Console 인증 시 사용
    other: {
      'naver-site-verification': '',  // 추후 네이버 웹마스터 인증 시 사용
    }
  }
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
    "url": "https://doctorlink-official.github.io/Homepage",
    "logo": "https://doctorlink-official.github.io/Homepage/assets/logo.png",
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
