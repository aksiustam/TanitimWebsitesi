"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { CldUploadWidget } from "next-cloudinary";
import setBanner from "@/app/actions/video/setBanner";
import Link from "next/link";
import Image from "next/image";

const AdminPageClient = () => {
  const { handleSubmit } = useForm();
  const [video, setVideo] = useState(null);
  const [videom, setVideoM] = useState(null);

  const onSubmit = async () => {
    const formData = {
      imageid: video === null ? null : video.public_id,
      imageurl: video === null ? null : video.secure_url,
      mimageid: videom === null ? null : videom.public_id,
      mimageurl: videom === null ? null : videom.secure_url,
    };
    const res = await setBanner(formData);
    if (res === true) {
      await Swal.fire({
        icon: "success",
        title: "Başarıyla Güncellendi",
        showConfirmButton: false,
        timer: 1500,
      });
      location.reload();
    } else {
      Swal.fire({
        icon: "error",
        title: JSON.stringify(res),
      });
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-slate-50">
      <div className="w-96 h-96 flex items-center justify-center">
        <Link href={"/admin/galery"}>
          <Image
            src={"/galeryicon.png"}
            alt="Galery"
            width={1200}
            height={1200}
            className="w-60 h-60 object-contain"
            loading="eager"
          />
          <div className="w-full text-xl text-center font-extrabold mt-2">
            GALERİ
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl">
        <div className="text-xl font-bold mb-4 text-shadow-lg">
          RumiCeremony ADMIN PANELİ
        </div>

        <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-red-600 underline mb-4">
            Resim ve Video Yüklendikten sonra Lütfen Kaydet e Basınız...
          </div>
          <div className="gird grid-cols-2">
            <div className="w-full h-8 mb-12">
              <label
                className="input-label text-qgray text-sm block mb-2.5"
                htmlFor="email"
              >
                Anasayfa Videosu Yükle*
              </label>

              <CldUploadWidget
                signatureEndpoint="/api/sign-cloudinary-params"
                onSuccess={(result) => {
                  setVideo(result?.info);
                }}
                uploadPreset="rumi_video"
                options={{
                  maxFiles: 1,
                }}
              >
                {({ open }) => {
                  function handleOnClick() {
                    setVideo(null);
                    open();
                  }

                  return (
                    <button
                      type="button"
                      className="blue-btn h-6"
                      onClick={handleOnClick}
                    >
                      Anasayfa Videosu Yükle
                    </button>
                  );
                }}
              </CldUploadWidget>
            </div>
            <div className="w-full h-8 mb-12">
              <label
                className="input-label text-qgray text-sm block mb-2.5"
                htmlFor="email"
              >
                Anasayfa Mobil Videosu Yükle*
              </label>

              <CldUploadWidget
                signatureEndpoint="/api/sign-cloudinary-params"
                onSuccess={(result) => {
                  setVideoM(result?.info);
                }}
                uploadPreset="rumi_video"
                options={{
                  maxFiles: 1,
                }}
              >
                {({ open }) => {
                  function handleOnClick() {
                    setVideoM(null);
                    open();
                  }

                  return (
                    <button
                      type="button"
                      className="blue-btn h-6"
                      onClick={handleOnClick}
                    >
                      Anasayfa Mobil Videosu Yükle
                    </button>
                  );
                }}
              </CldUploadWidget>
            </div>
          </div>
          <div className="w-full h-8">
            <button type="submit" className="yellow-btn w-full h-8">
              Kaydet
            </button>
          </div>
        </form>
      </div>
      <div className="w-96 h-96 flex items-center justify-center">
        <Link href={"/admin/video"}>
          <Image
            src={"/videosicon.png"}
            alt="Videos"
            width={1200}
            height={1200}
            className="w-60 h-60 object-contain"
            loading="eager"
          />
          <div className="w-full text-xl text-center font-extrabold mt-2">
            VİDEO
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminPageClient;
