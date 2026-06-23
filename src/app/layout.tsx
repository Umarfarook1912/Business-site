import type { Metadata } from "next";
import { GOOGLE_FONTS, PUBLIC_ASSETS, SITE } from "@/lib/constants";
import { Header } from "@/components/common/Header";
import { GlobalBackground } from "@/components/common/GlobalBackground";
import { ConsultationProvider } from "@/components/common/ConsultationProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.metadataBase),
  title: SITE.title,
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
    images: [{ url: PUBLIC_ASSETS.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [PUBLIC_ASSETS.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <head>
        <link rel="preconnect" href={GOOGLE_FONTS.preconnect} />
        <link
          rel="preconnect"
          href={GOOGLE_FONTS.preconnectStatic}
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={GOOGLE_FONTS.stylesheet} />
      </head>
      <body className="min-h-full flex flex-col bg-brand-bg-primary text-brand-text-primary antialiased relative overflow-x-hidden">
        <ConsultationProvider>
          <GlobalBackground />
          <Header />
          <div className="flex-1 flex flex-col relative z-10">{children}</div>
        </ConsultationProvider>
      </body>
    </html>
  );
}
