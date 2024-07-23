"use client";
import Image from "next/image";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const Masonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.default),
  { ssr: false }
);
const ResponsiveMasonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.ResponsiveMasonry),
  { ssr: false }
);
const GaleryPageClient = (props) => {
  const { galery, videos } = props;

  const [check, setCheck] = useState(true);
  return (
    <>
      <div className="w-full mt-12 mb-6 grid grid-cols-2">
        <h1 class="sr-only">IRFA GALERİ VE VİDEOLAR</h1>
        <h2
          className="text-white text-center text-2xl lg:text-4xl font-extrabold text-shadow-lg ml-8 underline cursor-pointer"
          onClick={() => setCheck(true)}
        >
          GALERİ
        </h2>
        <h2
          className="text-white text-center text-2xl lg:text-4xl font-extrabold text-shadow-lg ml-8 underline cursor-pointer"
          onClick={() => setCheck(false)}
        >
          VİDEO
        </h2>
      </div>
      <div className="w-full h-full px-12 ">
        {check === true ? (
          <>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry>
                {galery.map((item) => (
                  <Image
                    key={item.id}
                    src={item.imageurl}
                    alt={`Sema-${item.id}`}
                    width={1200}
                    height={1200}
                    className="p-3 object-contain"
                    loading="eager"
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </>
        ) : (
          <>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry>
                {videos.map((item) => (
                  <video
                    key={item.id}
                    autoPlay
                    muted
                    loop
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      padding: 12,
                    }}
                  >
                    <source src={item.imageurl} type="video/mp4" />
                  </video>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </>
        )}
      </div>
    </>
  );
};

export default GaleryPageClient;
