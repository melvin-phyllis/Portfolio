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
  title: "Portfolio Full-Stack JS | Melvin.dev",
  description:
    "Je suis Akou Melvin, developpeur Full-Stack JS base en Cote d'Ivoire. Je concois des apps modernes avec Next.js, React, Firebase et MongoDB.",
  alternates: {
    canonical: "https://melvin.dev",
  },
  openGraph: {
    title: "Portfolio Full-Stack JS | Melvin.dev",
    description:
      "Projets Next.js, React, Firebase, MongoDB et Tailwind. Decouvrez mon parcours et mes realisations.",
    url: "https://melvin.dev",
    siteName: "Melvin.dev",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/download-hero-nav.png",
        width: 1200,
        height: 630,
        alt: "Akou Melvin - Portfolio Full-Stack JS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Full-Stack JS | Melvin.dev",
    description:
      "Projets Next.js, React, Firebase, MongoDB et Tailwind. Decouvrez mon parcours et mes realisations.",
    images: ["/download-hero-nav.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
