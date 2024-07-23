"use client";

import img1 from "@/public/t1.png";
import img2 from "@/public/t2.png";
import img3 from "@/public/t3.png";
import img4 from "@/public/t4.png";
import img5 from "@/public/t5.png";
import img6 from "@/public/t6.png";
import { useState } from "react";

import gsap from "gsap";

import {
  FaPhoneSquareAlt,
  FaMapMarkerAlt,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import HeaderDock from "./HeaderDock";

const Header = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const handleUPGSAPOn = () => {
    // Animasyonu tanımla
    gsap.fromTo(
      "#box5",
      { opacity: 0, y: 0, display: "hidden" },
      { opacity: 1, y: 130, duration: 1, display: "block" }
    );
    gsap.fromTo(
      "#box6",
      { opacity: 0, y: 0, display: "hidden" },
      { opacity: 1, y: 210, duration: 1, display: "block" }
    );
    gsap.fromTo(
      "#box7",
      { opacity: 0, y: 0, display: "hidden" },
      { opacity: 1, y: 290, duration: 1, display: "block" }
    );
    gsap.fromTo(
      "#box8",
      { opacity: 0, y: 0, display: "hidden" },
      { opacity: 1, y: 370, duration: 1, display: "block" }
    );
    gsap.fromTo(
      "#box9",
      { opacity: 0, y: 0, display: "hidden" },
      { opacity: 1, y: 450, duration: 1, display: "block" }
    );
    gsap.fromTo(
      "#box10",
      { opacity: 0, y: 0, display: "hidden" },
      { opacity: 1, y: 530, duration: 1, display: "block" }
    );
  };

  const handleUPGSAPOff = () => {
    gsap.fromTo(
      "#box5",
      { opacity: 1, y: 130, display: "block" },
      { opacity: 0, y: 0, duration: 1, display: "hidden" }
    );
    gsap.fromTo(
      "#box6",
      { opacity: 1, y: 210, display: "block" },
      { opacity: 0, y: 0, duration: 1, display: "hidden" }
    );
    gsap.fromTo(
      "#box7",
      { opacity: 1, y: 290, display: "block" },
      { opacity: 0, y: 0, duration: 1, display: "hidden" }
    );
    gsap.fromTo(
      "#box8",
      { opacity: 1, y: 370, display: "block" },
      { opacity: 0, y: 0, duration: 1, display: "hidden" }
    );
    gsap.fromTo(
      "#box9",
      { opacity: 1, y: 450, display: "block" },
      { opacity: 0, y: 0, duration: 1, display: "hidden" }
    );
    gsap.fromTo(
      "#box10",
      { opacity: 1, y: 530, display: "block" },
      { opacity: 0, y: 0, duration: 1, display: "hidden" }
    );
  };
  const handleGSAPOn = () => {
    // Animasyonu tanımla
    gsap.fromTo(
      "#box1",
      { opacity: 0, y: 0, display: "hidden" },
      { opacity: 1, y: -50, duration: 1, display: "block" }
    );
    gsap.fromTo(
      "#box2",
      { opacity: 0, y: 0, display: "hidden" },
      { opacity: 1, y: -100, duration: 1, display: "block" }
    );
    gsap.fromTo(
      "#box3",
      { opacity: 0, y: 0, display: "hidden" },
      { opacity: 1, y: -150, duration: 1, display: "block" }
    );
    gsap.fromTo(
      "#box4",
      { opacity: 0, y: 0, display: "hidden" },
      { opacity: 1, y: -200, duration: 1, display: "block" }
    );
  };

  const handleGSAPOff = () => {
    // Animasyonu tanımla
    gsap.fromTo(
      "#box1",
      { opacity: 1, y: -50, display: "block" },
      { opacity: 0, y: 0, duration: 1, display: "hidden" }
    );
    gsap.fromTo(
      "#box2",
      { opacity: 1, y: -100, display: "block" },
      { opacity: 0, y: 0, duration: 1, display: "hidden" }
    );
    gsap.fromTo(
      "#box3",
      { opacity: 1, y: -150, display: "block" },
      { opacity: 0, y: 0, duration: 1, display: "hidden" }
    );
    gsap.fromTo(
      "#box4",
      { opacity: 1, y: -200, display: "block" },
      { opacity: 0, y: 0, duration: 1, display: "hidden" }
    );
  };

  const handlePhoneClick = () => {
    if (typeof window !== "undefined") {
      window.location.href = `tel:05324266713`;
    }
  };
  const handleHarita = () => {
    const latitude = 37.870577090969086;
    const longitude = 32.51128608465744;
    const geoUrl = `geo:${latitude},${longitude}`;
    if (typeof window !== "undefined") {
      window.location.href = geoUrl;
    }
  };
  return (
    <div>
      <div className="hidden lg:block">
        <HeaderDock />
      </div>
      <div className="block lg:hidden">
        <div
          className="absolute top-[17%] right-0 w-16 h-10 bg-red-600 rounded-l-2xl cursor-pointer z-30"
          onClick={() => {
            if (check2 === true) {
              handleUPGSAPOff();
              setCheck2(false);
            } else {
              handleUPGSAPOn();
              setCheck2(true);
              if (check1 === true) {
                handleGSAPOff();
                setCheck1(false);
              }
            }
          }}
        >
          <div className="w-full h-full flex items-center justify-center ">
            <HiDotsVertical size={26} color="white" />
          </div>
        </div>
        <div
          className="absolute top-[15%] right-0 hidden opacity-0 z-20"
          id="box5"
        >
          <div className="w-full h-full mr-2">
            <Link href={"/tr"}>
              <Image
                src={img1}
                alt="Menu-1"
                width={500}
                height={500}
                className="w-16 h-16 object-contain"
                loading="eager"
              />
            </Link>
          </div>
        </div>
        <div
          className="absolute top-[15%] right-0  hidden opacity-0 z-20"
          id="box6"
        >
          <div className="w-full h-full mr-2">
            <Link href={"/tr/galeri"}>
              <Image
                src={img2}
                alt="Menu-1"
                width={500}
                height={500}
                className="w-16 h-16 object-contain"
                loading="eager"
              />
            </Link>
          </div>
        </div>
        <div
          className="absolute top-[15%] right-0  hidden opacity-0 z-20"
          id="box7"
        >
          <div className="w-full h-full mr-2">
            <Link href={"/tr/hz-mevlana"}>
              <Image
                src={img3}
                alt="Menu-1"
                width={500}
                height={500}
                className="w-16 h-16 object-contain"
                loading="eager"
              />
            </Link>
          </div>
        </div>
        <div
          className="absolute top-[15%] right-0  hidden opacity-0 z-20"
          id="box8"
        >
          <div className="w-full h-full mr-2">
            <Link href={"/tr/semaseremoni"}>
              <Image
                src={img4}
                alt="Menu-1"
                width={500}
                height={500}
                className="w-16 h-16 object-contain"
                loading="eager"
              />
            </Link>
          </div>
        </div>
        <div
          className="absolute top-[15%] right-0  hidden opacity-0 z-20"
          id="box9"
        >
          <div className="w-full h-full mr-2">
            <Link href={"/tr/hakkimizda"}>
              <Image
                src={img5}
                alt="Menu-1"
                width={500}
                height={500}
                className="w-16 h-16 object-contain"
                loading="eager"
              />
            </Link>
          </div>
        </div>
        <div
          className="absolute top-[15%] right-0 hidden opacity-0 z-20"
          id="box10"
        >
          <div className="w-full h-full mr-2">
            <Link href={"/tr/iletisim"}>
              <Image
                src={img6}
                alt="Menu-1"
                width={500}
                height={500}
                className="w-16 h-16 object-contain"
                loading="eager"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div
          className="absolute top-[87%] left-0 cursor-pointer z-30"
          onClick={() => {
            if (check1 === true) {
              handleGSAPOff();
              setCheck1(false);
            } else {
              handleGSAPOn();
              setCheck1(true);
              if (check2 === true) {
                handleUPGSAPOff();
                setCheck2(false);
              }
            }
          }}
        >
          <div className="w-full h-full flex items-center justify-center pl-5 p-3 bg-red-600 rounded-r-xl">
            <Image
              src={"/contactus.png"}
              alt="Contact Us"
              width={1000}
              height={1000}
              className="w-11 h-11 object-contain"
              loading="eager"
            />
          </div>
        </div>

        <div
          className="absolute top-[85%] left-0 w-36 h-10 hidden opacity-0 bg-[#0a5c0a] rounded-r-full z-10"
          id="box1"
          onClick={() => handlePhoneClick()}
        >
          <div className="w-full h-full flex ">
            <div className="w-1/4 flex items-center justify-center">
              <FaPhoneSquareAlt size={22} className="text-slate-200" />
            </div>
            <div className="w-3/4 flex items-center justify-start ">
              <span className="text-slate-200 font-semibold text-sm">
                Rezervasyon
              </span>
            </div>
          </div>
        </div>
        <div
          className="absolute top-[85%] left-0 w-36 h-10 hidden opacity-0 bg-[#0a5c0a] rounded-r-full z-10"
          id="box2"
        >
          <a href="https://www.instagram.com/irfanmedeniyeti/">
            <div className="w-full h-full flex ">
              <div className="w-1/4 flex items-center justify-center">
                <FaInstagram size={22} className="text-slate-200" />
              </div>
              <div className="w-3/4 flex items-center justify-start ">
                <span className="text-slate-200 font-semibold text-sm">
                  Instagram
                </span>
              </div>
            </div>
          </a>
        </div>
        <div
          className="absolute top-[85%] left-0 w-36 h-10 hidden opacity-0 bg-[#0a5c0a] rounded-r-full z-10"
          id="box3"
        >
          <a href="https://www.youtube.com/irfanmedeniyeti">
            <div className="w-full h-full flex ">
              <div className="w-1/4 flex items-center justify-center">
                <FaYoutube size={22} className="text-slate-200" />
              </div>
              <div className="w-3/4 flex items-center justify-start ">
                <span className="text-slate-200 font-semibold text-sm">
                  Youtube
                </span>
              </div>
            </div>
          </a>
        </div>
        <div
          className="absolute top-[85%] left-0 w-36 h-10 hidden opacity-0 bg-[#0a5c0a] rounded-r-full z-10"
          id="box4"
          onClick={() => handleHarita()}
        >
          <div className="w-full h-full flex ">
            <div className="w-1/4 flex items-center justify-center">
              <FaMapMarkerAlt size={22} className="text-slate-200" />
            </div>
            <div className="w-3/4 flex items-center justify-start ">
              <span className="text-slate-200 font-semibold text-sm">
                Konum
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
