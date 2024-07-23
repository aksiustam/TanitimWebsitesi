"use client";
import { unstable_noStore as noStore } from "next/cache";
import img1 from "@/public/h1.png";
import img2 from "@/public/h2.png";
import img3 from "@/public/h3.png";
import img4 from "@/public/h4.png";
import img5 from "@/public/h5.png";
import img6 from "@/public/h6.png";
import dynamic from "next/dynamic";
import { Card } from "./Card";

const Dock = dynamic(() => import("./Dock"), {
  ssr: true,
});
const DockCard = dynamic(() => import("./DockCard"), {
  ssr: true,
});

const HeaderDock = () => {
  const items = [
    {
      id: 1,
      src: img1,
      href: "/en",
      name: "Sema",
    },
    {
      id: 2,
      src: img2,
      href: "/en/galery",
      name: "Galery",
    },
    {
      id: 3,
      src: img3,
      href: "/en/hz-mevlana",
      name: "Hz. Mevlana",
    },
    {
      id: 4,
      src: img4,
      href: "/en/semaceremony",
      name: "Sema Ceremony",
    },
    {
      id: 5,
      src: img5,
      href: "/en/aboutus",
      name: "About Us",
    },
    {
      id: 6,
      src: img6,
      href: "/en/contact",
      name: "Contact",
    },
  ];
  noStore();
  return (
    <Dock>
      {items.map((src) => (
        <DockCard key={src.id}>
          <Card src={src} />
        </DockCard>
      ))}
    </Dock>
  );
};

export default HeaderDock;
