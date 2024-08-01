"use client";
import Link from "next/link";
import Header from "../Layout/Header";
import { FaYoutubeSquare, FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";
import { Rowdies } from "next/font/google";

const rowdies = Rowdies({ subsets: ["latin"], weight: "400" });

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
    focusOnSelect: false,
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
    focusOnSelect: false,
  };
  return (
    <>
      <section className="w-screen h-screen relative">
        <div className="w-screen h-screen  grid-cols-12 hidden lg:grid">
          <div className="col-span-2 ">
            <div className="w-full h-screen ">
              <div className="w-full h-[63%] grid grid-rows-12 pt-6 space-y-4">
                <div className="row-span-2">
                  <Image
                    src={"/logorumi.png"}
                    alt="Rumi Logo"
                    width={1200}
                    height={1200}
                    className="w-full h-20 object-contain "
                    loading="eager"
                  />
                </div>
                <div className="row-span-7">
                  <Image
                    src={"/mevlana2.png"}
                    alt="Mevlana"
                    width={1200}
                    height={1200}
                    className="w-full h-full object-contain"
                    loading="eager"
                  />
                </div>
                <div className="row-span-3">
                  <Image
                    src={"/everyday.png"}
                    alt="ButtonStil"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-contain"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-8">
            <div className="w-full h-screen px-2">
              <Slider {...sliderSettings} className="w-full h-screen">
                {ayarlar?.banner1?.check && (
                  <div className="w-full h-full flex flex-col items-start justify-start space-y-2">
                    <Image
                      src={ayarlar?.banner1?.image?.imageurl}
                      alt="Rumi Ceremony Banner1"
                      width={2000}
                      height={2000}
                      className="w-full h-[63.8%] object-contain"
                      loading="eager"
                    />
                    <div className="w-full flex items-center justify-center relative">
                      <div className="absolute w-full h-full z-10">
                        <div className="w-full h-full flex items-center justify-center">
                          <div
                            className={`${rowdies.className} text-white text-2xl lg:px-20 xl:px-40 text-center`}
                          >
                            {ayarlar?.banner1?.text}
                          </div>
                        </div>
                      </div>
                      <Image
                        src={"/frame3.png"}
                        alt="Frame"
                        width={1200}
                        height={1200}
                        className="w-full h-40 object-contain"
                        loading="eager"
                      />
                    </div>
                  </div>
                )}
                {ayarlar?.banner2?.check && (
                  <div className="w-full h-full flex flex-col items-start justify-start space-y-2">
                    <Image
                      src={ayarlar?.banner2?.image?.imageurl}
                      alt="Rumi Ceremony Banner2"
                      width={2000}
                      height={2000}
                      className="w-full h-[63.8%] object-contain"
                      loading="eager"
                    />
                    <div className="w-full flex items-center justify-center relative">
                      <div className="absolute w-full h-full z-10">
                        <div className="w-full h-full flex items-center justify-center">
                          <div
                            className={`${rowdies.className} text-white text-2xl lg:px-20 xl:px-40 text-center`}
                          >
                            {ayarlar?.banner2?.text}
                          </div>
                        </div>
                      </div>
                      <Image
                        src={"/frame3.png"}
                        alt="Frame"
                        width={1200}
                        height={1200}
                        className="w-full h-40 object-contain"
                        loading="eager"
                      />
                    </div>
                  </div>
                )}
                {ayarlar?.banner3?.check && (
                  <div className="w-full h-full flex flex-col items-start justify-start space-y-2">
                    <Image
                      src={ayarlar?.banner3?.image?.imageurl}
                      alt="Rumi Ceremony Banner3"
                      width={2000}
                      height={2000}
                      className="w-full h-[63.8%] object-contain"
                      loading="eager"
                    />
                    <div className="w-full flex items-center justify-center relative">
                      <div className="absolute w-full h-full z-10">
                        <div className="w-full h-full flex items-center justify-center">
                          <div
                            className={`${rowdies.className} text-white text-2xl lg:px-20 xl:px-40 text-center`}
                          >
                            {ayarlar?.banner3?.text}
                          </div>
                        </div>
                      </div>
                      <Image
                        src={"/frame3.png"}
                        alt="Frame"
                        width={1200}
                        height={1200}
                        className="w-full h-40 object-contain"
                        loading="eager"
                      />
                    </div>
                  </div>
                )}
                {ayarlar?.banner4?.check && (
                  <div className="w-full h-full flex flex-col items-start justify-start space-y-2">
                    <Image
                      src={ayarlar?.banner4?.image?.imageurl}
                      alt="Rumi Ceremony Banner4"
                      width={2000}
                      height={2000}
                      className="w-full h-[63.8%] object-contain"
                      loading="eager"
                    />
                    <div className="w-full flex items-center justify-center relative">
                      <div className="absolute w-full h-full z-10">
                        <div className="w-full h-full flex items-center justify-center">
                          <div
                            className={`${rowdies.className} text-white text-2xl lg:px-20 xl:px-40 text-center`}
                          >
                            {ayarlar?.banner4?.text}
                          </div>
                        </div>
                      </div>
                      <Image
                        src={"/frame3.png"}
                        alt="Frame"
                        width={1200}
                        height={1200}
                        className="w-full h-40 object-contain"
                        loading="eager"
                      />
                    </div>
                  </div>
                )}
                {ayarlar?.banner5?.check && (
                  <div className="w-full h-full flex flex-col items-start justify-start space-y-2">
                    <Image
                      src={ayarlar?.banner5?.image?.imageurl}
                      alt="Rumi Ceremony Banner5"
                      width={2000}
                      height={2000}
                      className="w-full h-[63.8%] object-contain"
                      loading="eager"
                    />
                    <div className="w-full flex items-center justify-center relative">
                      <div className="absolute w-full h-full z-10">
                        <div className="w-full h-full flex items-center justify-center">
                          <div
                            className={`${rowdies.className} text-white text-2xl lg:px-20 xl:px-40 text-center`}
                          >
                            {ayarlar?.banner5?.text}
                          </div>
                        </div>
                      </div>
                      <Image
                        src={"/frame3.png"}
                        alt="Frame"
                        width={1200}
                        height={1200}
                        className="w-full h-40 object-contain"
                        loading="eager"
                      />
                    </div>
                  </div>
                )}
                {ayarlar?.banner6?.check && (
                  <div className="w-full h-full flex flex-col items-start justify-start space-y-2">
                    <Image
                      src={ayarlar?.banner6?.image?.imageurl}
                      alt="Rumi Ceremony Banner6"
                      width={2000}
                      height={2000}
                      className="w-full h-[63.8%] object-contain"
                      loading="eager"
                    />
                    <div className="w-full flex items-center justify-center relative">
                      <div className="absolute w-full h-full z-10">
                        <div className="w-full h-full flex items-center justify-center">
                          <div
                            className={`${rowdies.className} text-white text-2xl lg:px-20 xl:px-40 text-center`}
                          >
                            {ayarlar?.banner6?.text}
                          </div>
                        </div>
                      </div>
                      <Image
                        src={"/frame3.png"}
                        alt="Frame"
                        width={1200}
                        height={1200}
                        className="w-full h-40 object-contain"
                        loading="eager"
                      />
                    </div>
                  </div>
                )}
                {ayarlar?.banner7?.check && (
                  <div className="w-full h-full flex flex-col items-start justify-start space-y-2">
                    <Image
                      src={ayarlar?.banner7?.image?.imageurl}
                      alt="Rumi Ceremony Banner7"
                      width={2000}
                      height={2000}
                      className="w-full h-[63.8%] object-contain"
                      loading="eager"
                    />
                    <div className="w-full flex items-center justify-center relative">
                      <div className="absolute w-full h-full z-10">
                        <div className="w-full h-full flex items-center justify-center">
                          <div
                            className={`${rowdies.className} text-white text-2xl lg:px-20 xl:px-40 text-center`}
                          >
                            {ayarlar?.banner7?.text}
                          </div>
                        </div>
                      </div>
                      <Image
                        src={"/frame3.png"}
                        alt="Frame"
                        width={1200}
                        height={1200}
                        className="w-full h-40 object-contain"
                        loading="eager"
                      />
                    </div>
                  </div>
                )}
                {ayarlar?.banner8?.check && (
                  <div className="w-full h-full flex flex-col items-start justify-start space-y-2">
                    <Image
                      src={ayarlar?.banner8?.image?.imageurl}
                      alt="Rumi Ceremony Banner8"
                      width={2000}
                      height={2000}
                      className="w-full h-[63.8%] object-contain"
                      loading="eager"
                    />
                    <div className="w-full flex items-center justify-center relative">
                      <div className="absolute w-full h-full z-10">
                        <div className="w-full h-full flex items-center justify-center">
                          <div
                            className={`${rowdies.className} text-white text-2xl lg:px-20 xl:px-40 text-center`}
                          >
                            {ayarlar?.banner8?.text}
                          </div>
                        </div>
                      </div>
                      <Image
                        src={"/frame3.png"}
                        alt="Frame"
                        width={1200}
                        height={1200}
                        className="w-full h-40 object-contain"
                        loading="eager"
                      />
                    </div>
                  </div>
                )}
              </Slider>
            </div>
          </div>
          <div className="col-span-2">
            <div className="w-full flex items-center justify-end mt-32">
              <div className="bg-[#964B00] w-[50%] text-slate-200  py-2 pr-1 pl-3 rounded-l-xl z-10">
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
            </div>
          </div>
        </div>
        <div className="w-screen h-screen relative block lg:hidden">
          <div className="absolute top-[1%] left-0 z-10">
            <div className="w-full h-full grid grid-rows-12 pt-3 space-y-4">
              <div className="row-span-2 pl-4 ">
                <Image
                  src={"/logorumi.png"}
                  alt="Rumi Logo"
                  width={1200}
                  height={1200}
                  className="w-20 h-full object-contain "
                  loading="eager"
                />
              </div>
              <div className="row-span-4 h-40"></div>

              <div className="row-span-6">
                <Image
                  src={"/everyday.png"}
                  alt="ButtonStil"
                  width={1000}
                  height={1000}
                  className="w-48 h-full object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[10%] right-0 z-20">
            <div className="w-full flex items-center justify-end mt-32">
              <div className="bg-[#964B00] w-full text-slate-200  py-2 pr-1 pl-3 rounded-l-xl z-10">
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
            </div>
          </div>
          <Slider {...msliderSettings} className="w-full h-full">
            {mayarlar?.banner1?.check && (
              <div className="w-full h-full relative">
                <Image
                  src={mayarlar?.banner1?.image?.imageurl}
                  alt="Rumi Ceremony Banner1"
                  width={2000}
                  height={2000}
                  className="-z-30 w-screen h-screen object-cover object-center"
                  loading="eager"
                />
                <div className="absolute bottom-[22%] w-full h-20 flex items-center justify-center z-30">
                  <div className="w-full h-full flex items-center justify-center mx-8">
                    <div className="text-white text-2xl lg:px-20 xl:px-40 text-center text-shadow-lg">
                      {mayarlar?.banner1?.text}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {mayarlar?.banner2?.check && (
              <div className="w-full h-full relative">
                <Image
                  src={mayarlar?.banner2?.image?.imageurl}
                  alt="Rumi Ceremony Banner2"
                  width={2000}
                  height={2000}
                  className="-z-30 w-screen h-screen object-cover object-center"
                  loading="eager"
                />
                <div className="absolute bottom-[22%] w-full h-20 flex items-center justify-center z-30">
                  <div className="w-full h-full flex items-center justify-center mx-8">
                    <div className="text-white text-2xl lg:px-20 xl:px-40 text-center text-shadow-lg">
                      {mayarlar?.banner2?.text}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {mayarlar?.banner3?.check && (
              <div className="w-full h-full relative">
                <Image
                  src={mayarlar?.banner3?.image?.imageurl}
                  alt="Rumi Ceremony Banner3"
                  width={2000}
                  height={2000}
                  className="-z-30 w-screen h-screen object-cover object-center"
                  loading="eager"
                />
                <div className="absolute bottom-[22%] w-full h-20 flex items-center justify-center z-30">
                  <div className="w-full h-full flex items-center justify-center mx-8">
                    <div className="text-white text-2xl lg:px-20 xl:px-40 text-center text-shadow-lg">
                      {mayarlar?.banner3?.text}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {mayarlar?.banner4?.check && (
              <div className="w-full h-full relative">
                <Image
                  src={mayarlar?.banner4?.image?.imageurl}
                  alt="Rumi Ceremony Banner4"
                  width={2000}
                  height={2000}
                  className="-z-30 w-screen h-screen object-cover object-center"
                  loading="eager"
                />
                <div className="absolute bottom-[22%] w-full h-20 flex items-center justify-center z-30">
                  <div className="w-full h-full flex items-center justify-center mx-8">
                    <div className="text-white text-2xl lg:px-20 xl:px-40 text-center text-shadow-lg">
                      {mayarlar?.banner4?.text}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {mayarlar?.banner5?.check && (
              <div className="w-full h-full relative">
                <Image
                  src={mayarlar?.banner5?.image?.imageurl}
                  alt="Rumi Ceremony Banner5"
                  width={2000}
                  height={2000}
                  className="-z-30 w-screen h-screen object-cover object-center"
                  loading="eager"
                />
                <div className="absolute bottom-[22%] w-full h-20 flex items-center justify-center z-30">
                  <div className="w-full h-full flex items-center justify-center mx-8">
                    <div className="text-white text-2xl lg:px-20 xl:px-40 text-center text-shadow-lg">
                      {mayarlar?.banner5?.text}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {mayarlar?.banner6?.check && (
              <div className="w-full h-full relative">
                <Image
                  src={mayarlar?.banner6?.image?.imageurl}
                  alt="Rumi Ceremony Banner6"
                  width={2000}
                  height={2000}
                  className="-z-30 w-screen h-screen object-cover object-center"
                  loading="eager"
                />
                <div className="absolute bottom-[22%] w-full h-20 flex items-center justify-center z-30">
                  <div className="w-full h-full flex items-center justify-center mx-8">
                    <div className="text-white text-2xl lg:px-20 xl:px-40 text-center text-shadow-lg">
                      {mayarlar?.banner6?.text}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {mayarlar?.banner7?.check && (
              <div className="w-full h-full relative">
                <Image
                  src={mayarlar?.banner7?.image?.imageurl}
                  alt="Rumi Ceremony Banner7"
                  width={2000}
                  height={2000}
                  className="-z-30 w-screen h-screen object-cover object-center"
                  loading="eager"
                />
                <div className="absolute bottom-[22%] w-full h-20 flex items-center justify-center z-30">
                  <div className="w-full h-full flex items-center justify-center mx-8">
                    <div className="text-white text-2xl lg:px-20 xl:px-40 text-center text-shadow-lg">
                      {mayarlar?.banner7?.text}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {mayarlar?.banner8?.check && (
              <div className="w-full h-full relative">
                <Image
                  src={mayarlar?.banner8?.image?.imageurl}
                  alt="Rumi Ceremony Banner8"
                  width={2000}
                  height={2000}
                  className="-z-30 w-screen h-screen object-cover object-center"
                  loading="eager"
                />
                <div className="absolute bottom-[22%] w-full h-20 flex items-center justify-center z-30">
                  <div className="w-full h-full flex items-center justify-center mx-8">
                    <div className="text-white text-2xl lg:px-20 xl:px-40 text-center text-shadow-lg">
                      {mayarlar?.banner8?.text}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Slider>
        </div>

        <Header />
      </section>
    </>
  );
};

export default HomePage;
