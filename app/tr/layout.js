import { Inter } from "next/font/google";
import "../globals.css";
import bg from "../../public/bg.webp";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RumiCeremony",
  description: "RumiCeremony",
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
