import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cadena | Put Your SAM on Autopilot",
  description: "Cadena is your AI-first ServiceNow SAM partner. We implement intelligent automation to give you complete visibility, automated compliance, and continuous optimization.",
  keywords: "ServiceNow SAM, Software Asset Management, ServiceNow Partner, SAM Implementation, License Compliance, AI SAM, Flexera Migration",
  openGraph: {
    title: "Cadena | Put Your SAM on Autopilot",
    description: "AI-first ServiceNow SAM implementation that automates software asset management",
    url: "https://cadena.co",
    siteName: "Cadena",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cadena | Put Your SAM on Autopilot",
    description: "AI-first ServiceNow SAM implementation that automates software asset management",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
