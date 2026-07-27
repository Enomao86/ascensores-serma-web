import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";


const siteUrl = "https://ascensoresserma.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Ascensores SERMA | Mantenimiento de ascensores en CABA y GBA",
    template: "%s | Ascensores SERMA",
  },

  description:
    "Más de 30 años brindando mantenimiento, reparación y modernización de ascensores en CABA y Gran Buenos Aires. Guardia técnica las 24 horas.",

  keywords: [
    "ascensores",
    "mantenimiento de ascensores",
    "reparación de ascensores",
    "modernización de ascensores",
    "empresa de ascensores",
    "ascensores CABA",
    "ascensores Gran Buenos Aires",
    "guardia de ascensores 24 horas",
    "mantenimiento de bombas de agua",
    "automatización de portones",
  ],

  authors: [
    {
      name: "Ascensores SERMA",
      url: siteUrl,
    },
  ],

  creator: "Ascensores SERMA",
  publisher: "Ascensores SERMA",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Ascensores SERMA",
    title: "Ascensores SERMA | Seguridad y experiencia",
    description:
      "Mantenimiento, reparación y modernización de ascensores en CABA y Gran Buenos Aires. Más de 30 años de experiencia y guardia técnica 24 horas.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ascensores SERMA",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ascensores SERMA | Seguridad y experiencia",
    description:
      "Mantenimiento, reparación y modernización de ascensores en CABA y Gran Buenos Aires.",
    images: ["/opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Servicios de ascensores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}