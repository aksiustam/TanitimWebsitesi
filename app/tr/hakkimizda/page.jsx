import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import Header from "../components/Layout/Header";

import { FaPeopleGroup } from "react-icons/fa6";

const page = () => {
  return (
    <div className=" w-screen h-screen overflow-y-scroll">
      <div className="bg-[#964B00] text-slate-200 absolute top-1/4 right-0 py-2 pr-1 pl-3 rounded-l-xl z-10">
        <div className="flex flex-row space-x-2 items-center justify-center">
          <Link href={"/en"}>
            <Image
              src={"/flag-english.svg"}
              alt="English"
              width={500}
              height={500}
              className="w-6 h-6 md:w-8 md:h-8 object-contain"
              loading="eager"
            />
          </Link>
          <a href="https://www.youtube.com/irfanmedeniyeti">
            <FaYoutubeSquare color="white" className="w-5 h-5 md:w-8 md:h-7" />
          </a>
          <a href="https://www.instagram.com/irfanmedeniyeti/">
            <FaInstagramSquare
              color="white"
              className="w-5 h-5 md:w-8 md:h-7"
            />
          </a>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center mb-24">
        <div className="w-full flex flex-col px-8 md:px-40 py-12 text-white">
          <h1 className=" text-4xl font-extrabold text-shadow-lg mb-6 text-center">
            İrfan Medeniyeti Araştırma Merkezi (İRFA)
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-8 lg:mb-16">
            <div className="w-full h-full flex items-center justify-center mb-6 lg:mb-0">
              <Image
                src={"/aboutus2.jpg"}
                alt="About Us-2"
                width={1200}
                height={1200}
                className="rounded-2xl object-contain"
                loading="eager"
              />
            </div>
            <div className="h-full flex flex-col items-start justify-center">
              <h2 className="text-[15px] font-semibold xl:pr-20 mb-6 lg:mb-3">
                İrfan Medeniyeti Araştırma Merkezi (İRFA) bünyesindeki “Mevlevî
                Âyinleri Topluluğu” semâ’ âyini icra etmektedir.
              </h2>
              <p className="text-[15px] font-semibold xl:pr-20 mb-6 lg:mb-3">
                Semâ’; lügatte duymak, işitmek anlamına gelir. Mevlevî
                literatüründe semâ’ ritm ve mûsikî eşliğinde yapılan, sağdan
                sola, kalbin etrafında çark atıp dönerek icrâ edilen bir nev’î
                nâfile ibâdettir. Mevlevîliğin sembol zikri olan semâ’da maksat
                ve niyet rûhen yükselmek, Allah’a(cc) giden yolda mesâfe
                almaktır.
              </p>
              <p className="text-[15px] font-semibold xl:pr-20 mb-6 lg:mb-3">
                Semâ’; Hazret-i Mevlânâ zamanında belli bir nizâma bağlı
                kalmaksızın dînî ve tasavvûfî bir coşkunluk vesîlesiyle icrâ
                edilmiştir. Semâ’ı ibâdet hâline getiren Hazret-i Pîr’in, Şems-i
                Tebrizî ile buluştuktan sonra semâ&apos; etmeye başladığı
                nakledilir.
              </p>
              <p className="text-[15px] font-semibold xl:pr-20 mb-6 lg:mb-3">
                İrfan Medeniyeti Araştırma Merkezi (İRFA) içerisinde bulunan
                semahane, Türkiye’nin ve dünyanın çeşitli yerlerindeki
                Mevlevihanelerden esinlenerek inşa edilmiş neo-klasik mimari
                özelliğiyle ziyaretçilerin beğenisini toplamaktadır. İrfan
                Medeniyeti Araştırma Merkezi (İRFA) içerisindeki semahanede
                periyodik olarak Acemaşiran, Acembuselik, Hüzzam, Suzidilara,
                Hisarbuselik gibi çeşitli makamlarda bestelenmiş Mevlevî
                âyinleri icra edilmektedir.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-8 mb-4 lg:mb-8 mt-6 lg:mt-0">
            <div className="h-full flex flex-col items-center justify-center font-semibold xl:pl-20 pb-8 lg:pb-0">
              <p className="text-[15px] font-semibold xl:pr-12 mb-6 lg:mb-3">
                Konya Büyükşehir Belediyesi ile İnsan ve İrfan Vakfı
                işbirliğiyle hizmet veren İrfan Medeniyeti Araştırma Merkezi
                (İRFA), medeniyetimizden bizlere miras kalan güzelliklerin
                korunması ve aslına uygun şekilde ihya edilmesiyle cemiyete
                faydalı bireyler yetiştirmeyi hedefleyen bir kuruluştur.
              </p>
              <p className="text-[15px] font-semibold xl:pr-12 mb-6 lg:mb-3">
                İrfan Medeniyeti Araştırma Merkezi(İRFA) Geleneksel Türk İslam
                sanatına uygun şekilde bir külliye olarak inşa edilmiştir. İrfan
                Medeniyeti Araştırma Merkezi (İRFA) içerisinde Panoramik Konya
                Müzesi “KONYANÜMA”, Semâhâne, konferans salonu, atölye ve
                derslikler bulunmaktadır.
              </p>
              <p className="text-[15px] font-semibold xl:pr-12 mb-6 lg:mb-3">
                Haftanın her günü aktif olarak kullanılan İrfan Medeniyeti
                Araştırma Merkezi (İRFA) bünyesinde semâ’ talimi, tekke musikisi
                meşki, enstrüman imalatı vb. eğitimler verilerek, atölyeler
                tertip edildiği gibi panel ve seminerler düzenlenmektedir.
              </p>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={"/aboutus1.jpg"}
                alt="About Us-1"
                width={1200}
                height={1200}
                className="rounded-2xl object-contain"
                loading="eager"
              />
            </div>
          </div>
          <div>
            <h3 className="text-[15px] font-semibold mb-12 lg:mb-16 xl:pl-20 xl:pr-12 ">
              Mevlânâ Müzesi karşısında, Aslanlı Kışla Caddesi üzerinde bulunan
              İrfan Medeniyeti Araştırma Merkezi (İRFA); yerli ve yabancı
              misafirleri ağırlamaktadır.
            </h3>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="grid grid-cols-1 w-[500px] ">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex space-x-4">
                  <FaPeopleGroup size={42} color="white" />
                  <div className="text-white text-4xl">14000+</div>
                </div>

                <div className=" font-semibold text-nowrap">
                  Fazla Ziyaretçi!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default page;
