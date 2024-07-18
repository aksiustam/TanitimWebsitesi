"use client";
import Link from "next/link";
import Header from "../Layout/Header";
import { FaYoutubeSquare, FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";

const HomePage = (props) => {
  const { settings } = props;

  return (
    <>
      <section className="w-screen h-screen relative">
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
              <FaYoutubeSquare
                color="white"
                className="w-5 h-5 md:w-8 md:h-7"
              />
            </a>
            <a href="https://www.instagram.com/irfanmedeniyeti/">
              <FaInstagramSquare
                color="white"
                className="w-5 h-5 md:w-8 md:h-7"
              />
            </a>
          </div>
        </div>
        <div className=" absolute top-1/2">
          <div className="flex flex-col items-start justify-center">
            <div className="text-slate-200 bg-[#964B00] text-sm md:text-2xl font-bold text-nowrap mb-1 py-2 pl-1 pr-4 rounded-r-xl">
              Her Gün Saat 21:00&apos;da
            </div>
            <div className="text-slate-200 bg-[#0a5c0a] text-sm md:text-2xl font-bold text-nowrap py-2 pl-1 pr-4 rounded-r-xl">
              Mevlevi Sema Gösterisi
            </div>
          </div>
        </div>
        <div className="w-full h-full hidden md:block">
          <video
            autoPlay
            muted
            loop
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          >
            <source src={settings?.banner?.imageurl} type="video/mp4" />
          </video>
        </div>
        <div className="w-full h-full block md:hidden">
          <video
            autoPlay
            muted
            loop
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          >
            <source src={settings?.banner?.mimageurl} type="video/mp4" />
          </video>
        </div>

        <Header />
      </section>
    </>
  );
};

export default HomePage;
