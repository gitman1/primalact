import type { Metadata } from "next";
import { Yanone_Kaffeesatz, Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const yanone = Yanone_Kaffeesatz({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-yanone",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-open",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-dirty",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Primalact | Lactate din Satu Mare",
    template: "%s | Primalact",
  },
  description:
    "Primalact și La Ferma — lactate proaspete produse din lapte de la fermieri români din Satu Mare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${yanone.variable} ${openSans.variable} ${playfair.variable} font-yanone antialiased`}
      >
        <Header />
        <main className="pt-100">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
