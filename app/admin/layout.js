import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin - Rumi",
  description: "Rumi Admin",
  robots: {
    index: false,
    nocache: true,
    follow: false,
  },
};

export const dynamic = "force-dynamic";
export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
