import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Ascensores SERMA | Mantenimiento y Guardia 24 hs",
  description: "Mantenimiento, reparación y modernización de ascensores, bombas de agua y portones automáticos en CABA y GBA.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}<Analytics /></body></html>;
}
