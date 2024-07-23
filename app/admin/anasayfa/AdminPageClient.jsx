"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import BannerTR from "./BannerTR";
import BannerEN from "./BannerEN";
import BannerMEN from "./BannerMEN";
import BannerMTR from "./BannerMTR";

BannerMEN;
const AdminPageClient = (props) => {
  const { ayarlar } = props;

  const [checklang, setCheckLang] = useState(true);
  const [checkmlang, setCheckMLang] = useState(true);

  return (
    <div className="w-full h-screen overflow-y-scroll flex items-center justify-center bg-slate-50">
      <div className="w-full h-screen grid grid-cols-12">
        <div className="col-span-5">
          <div className="flex flex-col items-center justify-center p-4 mt-8 bg-white rounded-xl">
            <div className="text-red-600 underline mb-2">
              Resim Yüklendikten sonra Lütfen Kaydet e Basınız...
            </div>
            <div className={`py-1 px-3 text-xl rounded-full font-extrabold`}>
              Bilgisayar Ayarları
            </div>
            <div className="grid grid-cols-2 space-x-6 mb-2 mt-2">
              <div
                className={`text-xl font-bold cursor-pointer ${
                  checklang === true ? "underline" : ""
                }`}
                onClick={() => setCheckLang(true)}
              >
                Türkçe
              </div>
              <div
                className={`text-xl font-bold cursor-pointer ${
                  checklang === false ? "underline" : ""
                }`}
                onClick={() => setCheckLang(false)}
              >
                İngilizce
              </div>
            </div>

            {checklang === true ? (
              <BannerTR ayarlar={ayarlar} />
            ) : (
              <BannerEN ayarlar={ayarlar} />
            )}
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="text-xl font-bold mb-4 text-shadow-lg text-center px-4 mt-8">
              RumiCeremony ADMIN PANELİ
            </div>
            <Link href={"/admin/galery"} className="no-underline text-black">
              <Image
                src={"/galeryicon.png"}
                alt="Galery"
                width={1200}
                height={1200}
                className="w-44 h-44 object-contain"
                loading="eager"
              />
              <div className="w-full text-xl text-center font-extrabold mt-2">
                GALERİ
              </div>
            </Link>
            <Link href={"/admin/video"} className="no-underline text-black">
              <Image
                src={"/videosicon.png"}
                alt="Videos"
                width={1200}
                height={1200}
                className="w-44 h-44 object-contain"
                loading="eager"
              />
              <div className="w-full text-xl text-center font-extrabold mt-2">
                VİDEO
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-5">
          <div className="flex flex-col items-center justify-center p-4 mt-8 bg-white rounded-xl">
            <div className="text-red-600 underline mb-2">
              Resim Yüklendikten sonra Lütfen Kaydet e Basınız...
            </div>
            <div className={`py-1 px-3 text-xl rounded-full font-extrabold`}>
              Mobil Ayarları
            </div>
            <div className="grid grid-cols-2 space-x-6 mb-2 mt-2">
              <div
                className={`text-xl font-bold cursor-pointer ${
                  checkmlang === true ? "underline" : ""
                }`}
                onClick={() => setCheckMLang(true)}
              >
                Türkçe
              </div>
              <div
                className={`text-xl font-bold cursor-pointer ${
                  checkmlang === false ? "underline" : ""
                }`}
                onClick={() => setCheckMLang(false)}
              >
                İngilizce
              </div>
            </div>

            {checkmlang === true ? (
              <BannerMTR ayarlar={ayarlar} />
            ) : (
              <BannerMEN ayarlar={ayarlar} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPageClient;
