import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Cadena | ServiceNow SAM Pro Experts",
  description: "Boutique ServiceNow consulting firm specializing in SAM Pro implementations, Flexera migrations, audit defense, and AI software asset management for Fortune 500 enterprises.",
  keywords: "servicenow sam pro, software asset management consulting, servicenow partner, servicenow itam, software asset management services, servicenow implementation partner, autonomous it, sam on autopilot",
  authors: [{ name: "Cadena" }],
  creator: "Cadena",
  publisher: "Cadena",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cadena.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cadena | ServiceNow SAM Pro Experts",
    description: "Boutique ServiceNow consulting firm specializing in SAM Pro implementations, Flexera migrations, audit defense, and AI governance.",
    url: "https://cadena.co",
    siteName: "Cadena",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cadena - ServiceNow SAM Pro Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cadena | ServiceNow SAM Pro Experts",
    description: "Boutique ServiceNow SAM Pro consulting for Fortune 500 enterprises. Implementations, migrations, audit defense, AI governance.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: "google-site-verification-code",
    // yandex: "yandex-verification-code",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cadena",
  description: "Boutique ServiceNow consulting firm specializing in Software Asset Management (SAM) Pro implementations for Fortune 500 enterprises.",
  url: "https://cadena.co",
  logo: "https://cadena.co/images/logo.svg",
  sameAs: [
    "https://www.linkedin.com/company/cadena-co",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@cadena.co",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  areaServed: "Worldwide",
  serviceType: [
    "ServiceNow SAM Pro Implementation",
    "Software Asset Management Consulting",
    "Flexera Migration",
    "AI Software Governance",
    "License Compliance Audit Defense",
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software Asset Management Consulting",
  provider: {
    "@type": "Organization",
    name: "Cadena",
    url: "https://cadena.co",
  },
  areaServed: "Worldwide",
  description: "ServiceNow SAM Pro implementation, optimization, and AI software asset management for Fortune 500 enterprises.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexSans.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#004040" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
