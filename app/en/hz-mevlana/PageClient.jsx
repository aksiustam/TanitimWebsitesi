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
              <div className="flex space-x-4 border-b mb-3 py-4">
                <div className="text-sm font-semibold pl-4 text-white">
                  <strong>Born :</strong> 30 September 1207
                </div>
                <div className="text-sm font-semibold pr-4 text-white">
                  <strong>Died :</strong> 17 December 1273 (aged 66)
                </div>
              </div>

              <div className="text-sm font-semibold px-4 pb-2 text-white border-b">
                <strong>Resting place :</strong> Tomb of Mevlana Rumi, Mevlana
                Museum, Konya, Turkey
              </div>
              <div className="flex space-x-4 border-b mb-3 py-4">
                <div className="text-sm font-semibold pl-4  text-white">
                  <strong>Religion :</strong> Islam
                </div>
                <div className="text-sm font-semibold pr-4  text-white">
                  <strong>Known for :</strong> Mathnawi, Rumi Music
                </div>
              </div>

              <div className="text-sm font-semibold px-4 py-4 text-white">
                <strong>Notable works :</strong> Mesnevi (Mathnawi)
                <br />
                Divan-ı Kebir (The Great Divan or Divan-e Shams-e Tabrizi)
                <br />
                Fihi Ma Fih (In It What&apos;s in It)
                <br />
                Mecalis-i Seba (Seven Sessions)
                <br />
                Mektubat (The Letters)
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
