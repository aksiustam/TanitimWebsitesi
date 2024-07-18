"use client";

import { useState } from "react";

import Image from "next/image";
import { items } from "./item";
const PageClient = () => {
  const [index, setIndex] = useState(items[0]);
  const scrollToAnchor = (id) => {
    const anchorElement = document.getElementById(id);
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <div className="grid grid-cols-6 lg:grid-cols-12 lg:space-x-12">
        <div className="col-span-6 mb-8 lg:mb-0">
          <div className="flex flex-row items-center justify-center space-x-12">
            <div className="w-full h-full flex items-center justify-center mb-6">
              <Image
                src={"/mevlana.svg"}
                alt="Mevlana Resmi"
                width={1600}
                height={1600}
                className="w-full h-full lg:w-[70%] lg:h-[60%] object-contain"
                loading="eager"
              />
            </div>

            <div className="w-full h-full">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src={"/button.svg"}
                  alt="Button"
                  width={1200}
                  height={500}
                  className="w-52 h-12 object-contain"
                  loading="eager"
                />
              </div>
              <div className="w-full flex space-x-4 border-b mb-3 py-4">
                <div className="w-1/2 text-sm font-semibold pl-4 text-white">
                  <strong>Doğum :</strong> 30 Eylül 1207
                </div>
                <div className="w-1/2 text-sm font-semibold pr-4 text-white">
                  <strong>Ölüm :</strong> 17 Aralık 1273 (66 yaşında)
                </div>
              </div>

              <div className="text-sm font-semibold px-4 pb-2 text-white border-b">
                <strong>Defin Yeri :</strong> Mevlânâ Müzesi, Konya, Türkiye
              </div>
              <div className="w-full flex space-x-4 border-b mb-3 py-4">
                <div className="w-1/2 text-sm font-semibold pl-4  text-white">
                  <strong>Meslek :</strong> Şair, fâkih, âlim, ilahiyatçı,
                  mutasavvıf
                </div>
                <div className="w-1/2 text-sm font-semibold pr-4  text-white">
                  <strong>Ebedi Akımı :</strong> Sufilik, Mevlevîlik
                </div>
              </div>

              <div className="text-sm font-semibold px-4 py-4 text-white">
                <strong>Çalışmaları :</strong> Mesnevi (Mathnawi)
                <br />
                Divan-ı Kebir (Büyük Divan veya Divan-ı Şems-i Tabrizi)
                <br />
                Fihi Ma Fih (İçindeki Var Olan)
                <br />
                Mecalis-i Seba (Yedi Mecalis)
                <br />
                Mektubat (Mektuplar)
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 w-full flex items-center justify-center relative">
          <div className="grid grid-cols-1 lg:grid-rows-12 lg:grid-flow-col ">
            {items.map((item) => (
              <div
                className="w-72 h-12 relative cursor-pointer group mx-6 lg:mx-0"
                key={item.id}
                onClick={() => {
                  setIndex(item);
                  scrollToAnchor(1);
                }}
              >
                <Image
                  src="/button.webp"
                  alt="Button"
                  width={1200}
                  height={500}
                  className="w-72 h-12 object-contain transition duration-300 group-hover:brightness-75"
                  loading="eager"
                />
                <div className="absolute inset-0 flex items-center justify-start max-w-64 ">
                  <div className="text-black rounded-full pl-4 py-1 text-[12px] font-semibold capitalize">
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-full mt-12 text-white px-5 lg:px-0">
        <div className="text-sm font-semibold mb-6">
          <span className="text-lg font-bold border-b" id={"1"}>
            {index?.text}
          </span>
          <br />
          {index?.page}
          <br />
          <br />
          {index?.page2}
        </div>
      </div>
    </>
  );
};

export default PageClient;
