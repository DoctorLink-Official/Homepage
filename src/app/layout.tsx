import type { Metadata } from "next";
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
  keywords: "닥터링크, DoctorLink, 의료, 병원, 의사, 환자, 의료진, 헬스케어, 의료 플랫폼",
  authors: [{ name: "DoctorLink Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
