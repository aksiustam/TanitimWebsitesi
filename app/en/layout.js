import "../globals.css";
import bg from "../../public/bg.webp";
import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({ subsets: ["latin"] });

export const metadata = {
  title: "Rumi Ceremony",
  description: "Mevlevi Sema Ceremony Daily at 21:00 at IRFA",
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://rumiceremony.com/en"),
  keywords: [
    "Irfan Civilization Research Center",
    "IRFA",
    "Mevlevi Ceremonial Group",
    "Mevlevi Sema Performance",
    "Mevlevi Sema Ceremony",
    "Sema Ceremony",
    "Sema Performance",
    "Mevlevi Rituals",
    "Mevlana",
    "Sufi Music",
    "Mevlevi Tradition",
    "Whirling Dervishes",
    "Rumi",
    "Rumi Ceremony",
    "Mevlana Ceremonies",
    "Cultural Events",
    "Spiritual Experience",
    "Religious Ceremonies",
    "Culture and Art",
    "Daily Events",
    "Sema Program",
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
    canonical: new URL("https://rumiceremony.com/en"),
  },
  openGraph: {
    title: "Rumi Ceremony",
    description: "Mevlevi Sema Ceremony Daily at 21:00 at IRFA",
    url: "https://rumiceremony.com/en",
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
    <html lang="en">
      <body
        className={notoSerif.className}
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
