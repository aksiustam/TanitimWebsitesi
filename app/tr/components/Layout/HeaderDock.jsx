"use client";
import { unstable_noStore as noStore } from "next/cache";
import img1 from "@/public/t1.png";
import img2 from "@/public/t2.png";
import img3 from "@/public/t3.png";
import img4 from "@/public/t4.png";
import img5 from "@/public/t5.png";
import img6 from "@/public/t6.png";
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
      href: "/tr",
      name: "Sema",
    },
    {
      id: 2,
      src: img2,
      href: "/tr/galeri",
      name: "Galery",
    },
    {
      id: 3,
      src: img3,
      href: "/tr/hz-mevlana",
      name: "Hz. Mevlana",
    },
    {
      id: 4,
      src: img4,
      href: "/tr/semaseremoni",
      name: "Sema Ceremony",
    },
    {
      id: 5,
      src: img5,
      href: "/tr/hakkimizda",
      name: "About Us",
    },
    {
      id: 6,
      src: img6,
      href: "/tr/iletisim",
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
