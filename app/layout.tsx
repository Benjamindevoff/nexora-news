import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexoranews.xyz"),
  title: {
    default: "Nexora News | Technology, Politics & World Affairs",
    template: "%s | Nexora News",
  },
  description: "Independent reporting and analysis on artificial intelligence, cybersecurity, programming, politics and world affairs.",
  other: {
    "codex-preview": "development",
    "theme-color": "#740f1c",
  },
  openGraph: {
    title: "Nexora News",
    description: "Facts first. Context always.",
    type: "website",
    siteName: "Nexora News",
  },
  twitter: { card: "summary_large_image", title: "Nexora News", description: "Facts first. Context always." },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "Nexora News",
    url: "https://nexoranews.xyz",
    ethicsPolicy: "https://nexoranews.xyz/ethics",
    correctionsPolicy: "https://nexoranews.xyz/corrections-policy",
    publishingPrinciples: "https://nexoranews.xyz/editorial-policy",
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nexora News",
    url: "https://nexoranews.xyz",
    potentialAction: { "@type": "SearchAction", target: "https://nexoranews.xyz/latest?q={search_term_string}", "query-input": "required name=search_term_string" },
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        {children}
      </body>
    </html>
  );
}
