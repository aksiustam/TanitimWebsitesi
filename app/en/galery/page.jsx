import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import Header from "../components/Layout/Header";

import GaleryPageClient from "./GaleryPageClient";
import getGalery from "@/app/actions/galeri/getGalery";
import getVideo from "../../actions/video/getVideo";

const page = async () => {
  const galery = await getGalery();
  const videos = await getVideo();
  return (
    <div className=" w-screen h-screen overflow-y-scroll">
      <div className="bg-[#964B00] text-slate-200 absolute top-1/4 right-0 py-2 pr-1 pl-3 rounded-l-xl z-10">
        <div className="flex flex-row space-x-2 items-center justify-center">
          <Link href={"/tr"}>
            <Image
              src={"/flag-turkey.svg"}
              alt="Turkey"
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

      <div className="w-full h-full mb-24">
        <GaleryPageClient galery={galery} videos={videos} />
      </div>
      <Header />
    </div>
  );
};

export default page;
