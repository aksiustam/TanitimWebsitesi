"use client";
import Link from "next/link";
import Header from "../Layout/Header";
import { FaYoutubeSquare, FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const HomePage = (props) => {
  const { settings } = props;
  const ayarlar = settings?.banner;
  const mayarlar = settings?.mbanner;

  const checkTrue = () => {
    const bannerChecks = [
      ayarlar?.banner1?.check,
      ayarlar?.banner2?.check,
      ayarlar?.banner3?.check,
      ayarlar?.banner4?.check,
      ayarlar?.banner5?.check,
      ayarlar?.banner6?.check,
      ayarlar?.banner7?.check,
      ayarlar?.banner8?.check,
    ];
    const trueCount = bannerChecks.filter(Boolean).length;
    return !(trueCount === 1);
  };
  let sliderSettings = {
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: checkTrue(),
    pauseOnHover: false,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  const checkMTrue = () => {
    const bannerChecks = [
      ayarlar?.banner1?.check,
      ayarlar?.banner2?.check,
      ayarlar?.banner3?.check,
      ayarlar?.banner4?.check,
      ayarlar?.banner5?.check,
      ayarlar?.banner6?.check,
      ayarlar?.banner7?.check,
      ayarlar?.banner8?.check,
    ];
    const trueCount = bannerChecks.filter(Boolean).length;
    return !(trueCount === 1);
  };
  let msliderSettings = {
    autoplay: true,
    arrows: false,
    dots: false,
    infinite: checkMTrue(),
    pauseOnHover: false,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <>
      <section className="w-screen h-screen relative">
        <div className="absolute top-8 left-0 py-2 pr-1 pl-3 z-50">
          <Image
            src={"/logorumi.png"}
            alt="Rumi Logo"
            width={1200}
            height={1200}
            className="w-28 h-20 object-contain"
          />
        </div>
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
        <div className=" absolute top-1/2 z-10">
          <div className="flex flex-col items-start justify-center">
            <h2 className="text-slate-200 bg-[#964B00] text-sm md:text-2xl font-bold text-nowrap mb-1 py-2 pl-1 pr-4 rounded-r-xl">
              Her Gün Saat 21:00&apos;da
            </h2>
            <h1 className="text-slate-200 bg-[#0a5c0a] text-sm md:text-2xl font-bold text-nowrap py-2 pl-1 pr-4 rounded-r-xl">
              Mevlevi Sema Gösterisi
            </h1>
          </div>
        </div>
        <div className="w-full h-full relative hidden lg:block">
          <Slider {...sliderSettings} className="w-full h-full ">
            {ayarlar?.banner1?.check && (
              <Image
                src={ayarlar?.banner1?.image?.imageurl}
                alt="Rumi Ceremony Banner1"
                width={2000}
                height={1000}
                className="-z-30 w-screen h-screen object-cover object-center"
              />
            )}
            {ayarlar?.banner2?.check && (
              <Image
                src={ayarlar?.banner2?.image?.imageurl}
                alt="Rumi Ceremony Banner2"
                width={2000}
                height={1000}
                className="-z-30 w-screen h-screen object-cover object-center"
              />
            )}
            {ayarlar?.banner3?.check && (
              <Image
                src={ayarlar?.banner3?.image?.imageurl}
                alt="Rumi Ceremony Banner3"
                width={2000}
                height={2000}
                className="-z-30 w-screen h-screen object-cover object-center"
              />
            )}
            {ayarlar?.banner4?.check && (
              <Image
                src={ayarlar?.banner4?.image?.imageurl}
                alt="Rumi Ceremony Banner4"
                width={2000}
                height={2000}
                className="-z-30 w-screen h-screen object-cover object-center"
              />
            )}
            {ayarlar?.banner5?.check && (
              <Image
                src={ayarlar?.banner5?.image?.imageurl}
                alt="Rumi Ceremony Banner5"
                width={2000}
                height={2000}
                className="-z-30 w-screen h-screen object-cover object-center"
              />
            )}
            {ayarlar?.banner6?.check && (
              <Image
                src={ayarlar?.banner6?.image?.imageurl}
                alt="Rumi Ceremony Banner6"
                width={2000}
                height={2000}
                className="-z-30 w-screen h-screen object-cover object-center"
              />
            )}
            {ayarlar?.banner7?.check && (
              <Image
                src={ayarlar?.banner7?.image?.imageurl}
                alt="Rumi Ceremony Banner7"
                width={2000}
                height={2000}
                className="-z-30 w-screen h-screen object-cover object-center"
              />
            )}
            {ayarlar?.banner8?.check && (
              <Image
                src={ayarlar?.banner8?.image?.imageurl}
                alt="Rumi Ceremony Banner8"
                width={2000}
                height={2000}
                className="-z-30 w-screen h-screen object-cover object-center"
              />
            )}
          </Slider>
        </div>
        <div className="w-full h-full relative block lg:hidden">
          <Slider {...msliderSettings} className="w-full h-full ">
            {mayarlar?.banner1?.check && (
              <Image
                src={mayarlar?.banner1?.image?.imageurl}
                alt="Rumi Ceremony Banner1"
                width={2000}
                height={1000}
                className="-z-30 w-screen h-screen object-cover object-center"
              />
            )}
            {mayarlar?.banner2?.check && (
              <Image
                src={mayarlar?.banner2?.image?.imageurl}
                alt="Rumi Ceremony Banner2"
                width={2000}
                height={1000}
                className="-z-30 w-screen h-screen object-cover object-center"
              />
            )}
            {mayarlar?.banner3?.check && (
              <Image
                src={mayarlar?.banner3?.image?.imageurl}
                alt="Rumi Ceremony Banner3"
                width={2000}
                height={2000}
                className="-z-30 w-screen h-screen object-cover object-center"
              />
            )}
            {mayarlar?.banner4?.check && (
              <Image
                src={mayarlar?.banner4?.image?.imageurl}
                alt="Rumi Ceremony Banner4"
                width={2000}
                height={2000}
                className="-z-30 w-screen h-screen object-cover object-center"
              />
            )}
            {mayarlar?.banner5?.check && (
              <Image
                src={mayarlar?.banner5?.image?.imageurl}
                alt="Rumi Ceremony Banner5"
                width={2000}
                height={2000}
                className="-z-30 w-screen h-screen object-cover object-center"
              />
            )}
            {mayarlar?.banner6?.check && (
              <Image
                src={mayarlar?.banner6?.image?.imageurl}
                alt="Rumi Ceremony Banner6"
                width={2000}
                height={2000}
                className="-z-30 w-screen h-screen object-cover object-center"
              />
            )}
            {mayarlar?.banner7?.check && (
              <Image
                src={mayarlar?.banner7?.image?.imageurl}
                alt="Rumi Ceremony Banner7"
                width={2000}
                height={2000}
                className="-z-30 w-screen h-screen object-cover object-center"
              />
            )}
            {mayarlar?.banner8?.check && (
              <Image
                src={mayarlar?.banner8?.image?.imageurl}
                alt="Rumi Ceremony Banner8"
                width={2000}
                height={2000}
                className="-z-30 w-screen h-screen object-cover object-center"
              />
            )}
          </Slider>
        </div>
        <Header />
      </section>
    </>
  );
};

export default HomePage;
