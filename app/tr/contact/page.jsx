import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import Header from "../components/Layout/Header";
import { SiGooglemaps } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";

import { MdEmail } from "react-icons/md";

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
      <div className="flex-1">
        <div className="w-full flex flex-col px-12 py-12 text-white">
          <div className=" text-4xl font-extrabold text-shadow-lg ml-8 mb-6">
            İletişim
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-4">
            <div className="w-full ml-8 ">
              <div className="flex items-center justify-start gap-3 mb-3">
                <div className="w-12 h-12 bg-slate-50/50 rounded-full p-2 flex items-center justify-center">
                  <SiGooglemaps size={28} color="white" />
                </div>
                <div className="font-semibold text-sm">
                  Adres : Aslanlı Kışla Cd. No: 6/1 Karatay/KONYA
                </div>
              </div>
              <div className="flex items-center justify-start gap-3 mb-5">
                <div className="w-12 h-12 bg-slate-50/50 rounded-full p-2 flex items-center justify-center">
                  <FaPhone size={24} color="white" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-2">
                    Telefon : +90 532 426 67 13
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-start gap-3 mb-5">
                <div className="w-12 h-12 bg-slate-50/50 rounded-full p-2 flex items-center justify-center">
                  <MdEmail size={24} color="white" />
                </div>
                <div className="font-semibold text-sm ">
                  E-Mail : c.gocer@sufiturizm.com.tr
                </div>
              </div>
            </div>
            <div className="w-full h-80 lg:h-96 mt-4 lg:-mt-16 lg:-ml-4 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1324.2366079286662!2d32.51146009895827!3d37.87004199662347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08516e66dc6f9%3A0x106df0cf0ce9f3b9!2zxLByZmFuIE1lZGVuaXlldGkgQXJhxZ90xLFybWEgdmUgS8O8bHTDvHIgTWVya2V6aQ!5e0!3m2!1str!2str!4v1721136591819!5m2!1str!2str"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default page;
