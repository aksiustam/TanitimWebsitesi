"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";

import { FaRegTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import setVideo from "@/app/actions/video/setVideo";
import delVideo from "@/app/actions/video/delVideo";

const VideoClient = (props) => {
  const data = props?.videos;

  const router = useRouter();
  const [cimage, setCImage] = useState([]);

  const onDelete = async (data) => {
    Swal.fire({
      title: data.id + " Indexli Video Silinecektir! ",
      showDenyButton: true,
      confirmButtonText: "Sil",
      denyButtonText: "Hayır",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await delVideo(data);
        if (res === true) {
          Swal.fire({
            icon: "success",
            title: "Başarıyla Silindi",
            showConfirmButton: false,
            timer: 1500,
          });
          router.refresh();
        } else {
          Swal.fire({
            icon: "error",
            title: JSON.stringify(res.message),
          });
        }
      }
    });
  };
  const addGalery = async () => {
    if (cimage.length < 0) {
      await Swal.fire({
        icon: "error",
        title: "Bir Video Yükleyin",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const data = cimage.map((item) => {
        return { imageid: item.public_id, imageurl: item.secure_url };
      });

      const res = await setVideo(data);
      if (res === true) {
        await Swal.fire({
          icon: "success",
          title: "Başarıyla Eklendi",
          showConfirmButton: false,
          timer: 1500,
        });
        setCImage([]);
        location.reload();
      } else {
        Swal.fire({
          icon: "error",
          title: JSON.stringify(res.message),
        });
      }
    }
  };

  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data?.length / itemsPerPage);

  // Generate an array of page numbers
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  const generatePageGroups = () => {
    const pageGroups = [];
    for (let i = 0; i < totalPages; i += 5) {
      pageGroups.push(pageNumbers.slice(i, i + 5));
    }
    return pageGroups;
  };

  const pageGroups = generatePageGroups();
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const currentGroup = pageGroups[currentGroupIndex];

  const goToPreviousGroup = () => {
    setCurrentGroupIndex(Math.max(currentGroupIndex - 1, 0));
  };

  const goToNextGroup = () => {
    setCurrentGroupIndex(
      Math.min(currentGroupIndex + 1, pageGroups.length - 1)
    );
  };

  const calculateIndexRange = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  const { startIndex, endIndex } = calculateIndexRange();

  const pagiData = data.slice(startIndex, endIndex);

  return (
    <>
      <div className="flex flex-col w-full h-full px-12 py-12 bg-slate-100">
        <div className="w-full text-5xl text-black font-bold text-shadow-lg text-center mb-8">
          VİDEO
        </div>
        <div className="grid grid-cols-4 py-6 space-x-12 rounded-2xl bg-white mb-10">
          <div className="flex-1 flex items-center justify-center">
            <div className="w-40 h-12 px-2 cursor-pointer">
              <Link href={"/admin/anasayfa"}>
                <button
                  className="green-btn inline-flex space-x-2 items-center"
                  type="button"
                >
                  <span className="text-sm font-600 text-white tracking-wide leading-7">
                    Geri Dön
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <CldUploadWidget
              signatureEndpoint="/api/sign-cloudinary-params"
              onSuccess={(result) => {
                setCImage((prev) => {
                  const data = prev || [];
                  return [...data, { ...result?.info }];
                });
              }}
              uploadPreset="rumi_video"
            >
              {({ open }) => {
                function handleOnClick() {
                  setCImage([]);
                  open();
                }

                return (
                  <button
                    type="button"
                    className="blue-btn inline-flex space-x-2 items-center"
                    onClick={handleOnClick}
                  >
                    Videolar Yükle
                  </button>
                );
              }}
            </CldUploadWidget>
          </div>

          <div className="flex-1 flex items-center justify-center ">
            <div className="ml-12 text-red-600 font-semibold text-lg text-center">
              Videoları Yükledikten Sonra Lütfen Kaydete Basınız...
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-40 h-12 cursor-pointer">
              <button
                className="yellow-btn inline-flex space-x-2 items-center"
                type="button"
                onClick={addGalery}
              >
                <span className="text-sm font-600 tracking-wide leading-7">
                  Kaydet
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center overflow-x-auto">
          {/* Projects table */}
          <table className="w-full lg:w-[50%] items-center bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6  border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center "
                  }
                >
                  Index
                </th>
                <th
                  className={
                    "px-6  border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Videolar
                </th>

                <th
                  className={
                    "px-6  border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Sil
                </th>
              </tr>
            </thead>
            <tbody>
              {pagiData?.map((data) => {
                return (
                  <tr key={data?.id}>
                    <th className="px-6 whitespace-nowrap p-4 text-center  text-blue-600 ">
                      #{data?.id}
                    </th>
                    <td className="px-6 whitespace-nowrap p-4 text-left ">
                      <div className="w-40 h-40">
                        {data?.imageurl && (
                          <video
                            autoPlay
                            muted
                            loop
                            style={{
                              height: "100%",
                              width: "100%",
                              objectFit: "cover",
                            }}
                          >
                            <source src={data?.imageurl} type="video/mp4" />
                          </video>
                        )}
                      </div>
                    </td>

                    <td className="px-6 whitespace-nowrap p-4">
                      <button onClick={() => onDelete(data)}>
                        <FaRegTrashAlt size={26} color="red" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="w-full flex items-center justify-center">
            <ul className="flex items-center justify-center space-x-2">
              {pageNumbers?.length > 1 && (
                <>
                  <li className="bg-slate-200 flex align-middle p-1">
                    <a
                      className="text-lg font-bold"
                      href="#!"
                      onClick={goToPreviousGroup}
                      disabled={currentGroupIndex === 0}
                    >
                      &laquo;
                    </a>
                  </li>
                </>
              )}
              {currentGroup?.map((pageNumber) => (
                <li
                  key={pageNumber}
                  className={`bg-slate-300 py-1 px-2 rounded-3xl text-lg font-semibold ${
                    page === pageNumber ? "active" : ""
                  }`}
                >
                  <a
                    className="page-link"
                    href="#!"
                    onClick={() => setPage(pageNumber)}
                  >
                    {pageNumber}
                  </a>
                </li>
              ))}
              {pageNumbers?.length > 1 && (
                <>
                  <li className="bg-slate-200 flex align-middle p-1">
                    <a
                      className="text-lg font-bold"
                      href="#!"
                      onClick={goToNextGroup}
                      disabled={currentGroupIndex === pageGroups.length - 1}
                    >
                      &raquo;
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoClient;
