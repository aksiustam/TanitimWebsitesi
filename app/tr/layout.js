import { Inter } from "next/font/google";
import "../globals.css";
import bg from "../../public/bg.webp";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rumi Ceremony",
  description: "Mevlevi Sema Gösterisi Her Gün Saat 21:00'da IRFA da",
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://rumiceremony.com/tr"),
  keywords: [
    "İrfan Medeniyeti Araştırma Merkezi",
    "İRFA",
    "Mevlevi Âyinleri Topluluğu",
    "Mevlevi Sema Gösterisi",
    "Sema Âyini",
    "Semâ Âyini",
    "Semâ Gösterisi",
    "Mevlevi Törenleri",
    "Mevlana",
    "Tasavvuf",
    "Tasavvuf Müziği",
    "Mevlevilik",
    "Semazen",
    "Rumi",
    "Rumi Ceremony",
    "Mevlana Törenleri",
    "Kültürel Etkinlikler",
    "Dini Törenler",
    "Kültür ve Sanat",
    "Günlük Etkinlikler",
    "Sema Gösterisi Saatleri",
    "Semâ Programı",
    "Manevi Deneyim",
  ],
  generator: "AYDTANITIM",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: "Aydtanitim.com",
  publisher: "IRFA",
  verification: {
    google: "123123123",
  },
  alternates: {
    canonical: new URL("https://rumiceremony.com/tr"),
  },
  openGraph: {
    title: "Rumi Ceremony",
    description: "Mevlevi Sema Gösterisi Her Gün Saat 21:00'da IRFA da",
    url: "https://rumiceremony.com/tr",
    siteName: "Rumi Ceremony",
    images: [
      {
        url: "https://res.cloudinary.com/dslul2smn/image/upload/v1721395970/rumi/banner/zddc4c4ayp5ooup4munl.png",
        width: 536,
        height: 550,
        alt: "Rumi Ceremony",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
};

export const dynamic = "force-dynamic";
export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={inter.className}
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {children}
      </body>
    </html>
  );
}
