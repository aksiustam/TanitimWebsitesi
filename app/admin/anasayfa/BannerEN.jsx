"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { CldUploadWidget } from "next-cloudinary";
import setBannerEn from "@/app/actions/video/setBannerEn";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
const BannerEN = (props) => {
  const bannerData = props.ayarlar?.banneren;

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);
  const [image7, setImage7] = useState(null);
  const [image8, setImage8] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      banner1Check: bannerData?.banner1?.check === true ? "true" : "false",
      banner2Check: bannerData?.banner2?.check === true ? "true" : "false",
      banner3Check: bannerData?.banner3?.check === true ? "true" : "false",
      banner4Check: bannerData?.banner4?.check === true ? "true" : "false",
      banner5Check: bannerData?.banner5?.check === true ? "true" : "false",
      banner6Check: bannerData?.banner6?.check === true ? "true" : "false",
      banner7Check: bannerData?.banner7?.check === true ? "true" : "false",
      banner8Check: bannerData?.banner8?.check === true ? "true" : "false",
      banner1Text: bannerData?.banner1?.text,
      banner2Text: bannerData?.banner2?.text,
      banner3Text: bannerData?.banner3?.text,
      banner4Text: bannerData?.banner4?.text,
      banner5Text: bannerData?.banner5?.text,
      banner6Text: bannerData?.banner6?.text,
      banner7Text: bannerData?.banner7?.text,
      banner8Text: bannerData?.banner8?.text,
    },
  });
  const onSubmit = async (data) => {
    let formData = {
      banner1: {
        image: null,
        check: data.banner1Check === "true" ? true : false,
        text: data.banner1Text,
      },
      banner2: {
        image: null,
        check: data.banner2Check === "true" ? true : false,
        text: data.banner2Text,
      },
      banner3: {
        image: null,
        check: data.banner3Check === "true" ? true : false,
        text: data.banner3Text,
      },
      banner4: {
        image: null,
        check: data.banner4Check === "true" ? true : false,
        text: data.banner4Text,
      },
      banner5: {
        image: null,
        check: data.banner5Check === "true" ? true : false,
        text: data.banner5Text,
      },
      banner6: {
        image: null,
        check: data.banner6Check === "true" ? true : false,
        text: data.banner6Text,
      },
      banner7: {
        image: null,
        check: data.banner7Check === "true" ? true : false,
        text: data.banner7Text,
      },
      banner8: {
        image: null,
        check: data.banner8Check === "true" ? true : false,
        text: data.banner8Text,
      },
    };
    if (image1 !== null) {
      formData.banner1.image = {
        imageid: image1.public_id,
        imageurl: image1.secure_url,
      };
    }
    if (image2 !== null) {
      formData.banner2.image = {
        imageid: image2.public_id,
        imageurl: image2.secure_url,
      };
    }
    if (image3 !== null) {
      formData.banner3.image = {
        imageid: image3.public_id,
        imageurl: image3.secure_url,
      };
    }
    if (image4 !== null) {
      formData.banner4.image = {
        imageid: image4.public_id,
        imageurl: image4.secure_url,
      };
    }
    if (image5 !== null) {
      formData.banner5.image = {
        imageid: image5.public_id,
        imageurl: image5.secure_url,
      };
    }
    if (image6 !== null) {
      formData.banner6.image = {
        imageid: image6.public_id,
        imageurl: image6.secure_url,
      };
    }
    if (image7 !== null) {
      formData.banner7.image = {
        imageid: image7.public_id,
        imageurl: image7.secure_url,
      };
    }
    if (image8 !== null) {
      formData.banner8.image = {
        imageid: image8.public_id,
        imageurl: image8.secure_url,
      };
    }

    const res = await setBannerEn(formData);
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
    <>
      <form
        className="w-full h-full flex flex-col items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-[85%] h-full ">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <div className="font-semibold text-lg text-blue-600 mb-2">
                  Banner 1.Slider Ayarları
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="flex-1 flex flex-col items-start justify-start bg-gray-200 p-2 rounded-xl">
                  <div className="w-full mb-4">
                    <div className="w-full px-2 h-8">
                      <CldUploadWidget
                        signatureEndpoint="/api/sign-cloudinary-params"
                        onSuccess={(result) => {
                          setImage1(result?.info);
                        }}
                        uploadPreset="rumi_banner"
                        options={{
                          maxFiles: 1,
                        }}
                      >
                        {({ open }) => {
                          function handleOnClick() {
                            setImage1(null);
                            open();
                          }

                          return (
                            <button
                              type="button"
                              className="blue-btn h-6"
                              onClick={handleOnClick}
                            >
                              Banner Resmi Yükle
                            </button>
                          );
                        }}
                      </CldUploadWidget>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 space-x-4">
                    <div className="w-full">
                      <label
                        className={`input-label capitalize block mb-2 !text-sm`}
                        htmlFor={"banner1Check"}
                      >
                        *Banner 1.Slider Göster
                      </label>
                      <select
                        id="banner1Check"
                        className="text-sm px-6 py-2 text-gray-900 w-full bg-white border border-black"
                        {...register("banner1Check")}
                      >
                        <option value={"true"}>Evet</option>
                        <option value={"false"}>Hayır</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <Image
                        src={bannerData?.banner1?.image?.imageurl}
                        alt="Banner-1"
                        width={1250}
                        height={1250}
                        className="object-cover max-h-28 "
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="input-field mb-2">
                      <label
                        className="input-label text-black text-sm block mb-2.5"
                        htmlFor="email"
                      >
                        Banner-1 Yazısı*
                      </label>
                      <div className="input-wrapper border border-[#E8E8E8] w-full  h-[35px] overflow-hidden relative ">
                        <input
                          className="input-field placeholder:text-base text-bese px-4 text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                          type="text"
                          {...register("banner1Text")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <div className="font-semibold text-lg text-blue-600 mb-2">
                  Banner 2.Slider Ayarları
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="flex-1 flex flex-col items-start justify-start bg-gray-200 p-2 rounded-xl">
                  <div className="w-full mb-4">
                    <div className="w-full px-2 h-8">
                      <CldUploadWidget
                        signatureEndpoint="/api/sign-cloudinary-params"
                        onSuccess={(result) => {
                          setImage2(result?.info);
                        }}
                        uploadPreset="rumi_banner"
                        options={{
                          maxFiles: 1,
                        }}
                      >
                        {({ open }) => {
                          function handleOnClick() {
                            setImage2(null);
                            open();
                          }

                          return (
                            <button
                              type="button"
                              className="blue-btn h-6"
                              onClick={handleOnClick}
                            >
                              Banner Resmi Yükle
                            </button>
                          );
                        }}
                      </CldUploadWidget>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 space-x-4">
                    <div className="w-full">
                      <label
                        className={`input-label capitalize block mb-2 !text-sm`}
                        htmlFor={"banner1Check"}
                      >
                        *Banner 2.Slider Göster
                      </label>
                      <select
                        id="banner2Check"
                        className="text-sm px-6 py-2 text-gray-900 w-full bg-white border border-black"
                        {...register("banner2Check")}
                      >
                        <option value={"true"}>Evet</option>
                        <option value={"false"}>Hayır</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <Image
                        src={bannerData?.banner2?.image?.imageurl}
                        alt="Banner-2"
                        width={1250}
                        height={1250}
                        className="object-cover max-h-28 "
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="input-field mb-2">
                      <label
                        className="input-label text-black text-sm block mb-2.5"
                        htmlFor="email"
                      >
                        Banner-2 Yazısı*
                      </label>
                      <div className="input-wrapper border border-[#E8E8E8] w-full  h-[35px] overflow-hidden relative ">
                        <input
                          className="input-field placeholder:text-base text-bese px-4 text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                          type="text"
                          {...register("banner2Text")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <div className="font-semibold text-lg text-blue-600 mb-2">
                  Banner 3.Slider Ayarları
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="flex-1 flex flex-col items-start justify-start bg-gray-200 p-2 rounded-xl">
                  <div className="w-full mb-4">
                    <div className="w-full px-2 h-8">
                      <CldUploadWidget
                        signatureEndpoint="/api/sign-cloudinary-params"
                        onSuccess={(result) => {
                          setImage3(result?.info);
                        }}
                        uploadPreset="rumi_banner"
                        options={{
                          maxFiles: 1,
                        }}
                      >
                        {({ open }) => {
                          function handleOnClick() {
                            setImage3(null);
                            open();
                          }

                          return (
                            <button
                              type="button"
                              className="blue-btn h-6"
                              onClick={handleOnClick}
                            >
                              Banner Resmi Yükle
                            </button>
                          );
                        }}
                      </CldUploadWidget>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 space-x-4">
                    <div className="w-full">
                      <label
                        className={`input-label capitalize block mb-2 !text-sm`}
                        htmlFor={"banner1Check"}
                      >
                        *Banner 3.Slider Göster
                      </label>
                      <select
                        id="banner3Check"
                        className="text-sm px-6 py-2 text-gray-900 w-full bg-white border border-black"
                        {...register("banner3Check")}
                      >
                        <option value={"true"}>Evet</option>
                        <option value={"false"}>Hayır</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <Image
                        src={bannerData?.banner3?.image?.imageurl}
                        alt="Banner-3"
                        width={1250}
                        height={1250}
                        className="object-cover max-h-28 "
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="input-field mb-2">
                      <label
                        className="input-label text-black text-sm block mb-2.5"
                        htmlFor="email"
                      >
                        Banner-3 Yazısı*
                      </label>
                      <div className="input-wrapper border border-[#E8E8E8] w-full  h-[35px] overflow-hidden relative ">
                        <input
                          className="input-field placeholder:text-base text-bese px-4 text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                          type="text"
                          {...register("banner3Text")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <div className="font-semibold text-lg text-blue-600 mb-2">
                  Banner 4.Slider Ayarları
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="flex-1 flex flex-col items-start justify-start bg-gray-200 p-2 rounded-xl">
                  <div className="w-full mb-4">
                    <div className="w-full px-2 h-8">
                      <CldUploadWidget
                        signatureEndpoint="/api/sign-cloudinary-params"
                        onSuccess={(result) => {
                          setImage4(result?.info);
                        }}
                        uploadPreset="rumi_banner"
                        options={{
                          maxFiles: 1,
                        }}
                      >
                        {({ open }) => {
                          function handleOnClick() {
                            setImage4(null);
                            open();
                          }

                          return (
                            <button
                              type="button"
                              className="blue-btn h-6"
                              onClick={handleOnClick}
                            >
                              Banner Resmi Yükle
                            </button>
                          );
                        }}
                      </CldUploadWidget>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 space-x-4">
                    <div className="w-full">
                      <label
                        className={`input-label capitalize block mb-2 !text-sm`}
                        htmlFor={"banner1Check"}
                      >
                        *Banner 4.Slider Göster
                      </label>
                      <select
                        id="banner4Check"
                        className="text-sm px-6 py-2 text-gray-900 w-full bg-white border border-black"
                        {...register("banner4Check")}
                      >
                        <option value={"true"}>Evet</option>
                        <option value={"false"}>Hayır</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <Image
                        src={bannerData?.banner4?.image?.imageurl}
                        alt="Banner-4"
                        width={1250}
                        height={1250}
                        className="object-cover max-h-28 "
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="input-field mb-2">
                      <label
                        className="input-label text-black text-sm block mb-2.5"
                        htmlFor="email"
                      >
                        Banner-4 Yazısı*
                      </label>
                      <div className="input-wrapper border border-[#E8E8E8] w-full  h-[35px] overflow-hidden relative ">
                        <input
                          className="input-field placeholder:text-base text-bese px-4 text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                          type="text"
                          {...register("banner4Text")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <div className="font-semibold text-lg text-blue-600 mb-2">
                  Banner 5.Slider Ayarları
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="flex-1 flex flex-col items-start justify-start bg-gray-200 p-2 rounded-xl">
                  <div className="w-full mb-4">
                    <div className="w-full px-2 h-8">
                      <CldUploadWidget
                        signatureEndpoint="/api/sign-cloudinary-params"
                        onSuccess={(result) => {
                          setImage5(result?.info);
                        }}
                        uploadPreset="rumi_banner"
                        options={{
                          maxFiles: 1,
                        }}
                      >
                        {({ open }) => {
                          function handleOnClick() {
                            setImage5(null);
                            open();
                          }

                          return (
                            <button
                              type="button"
                              className="blue-btn h-6"
                              onClick={handleOnClick}
                            >
                              Banner Resmi Yükle
                            </button>
                          );
                        }}
                      </CldUploadWidget>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 space-x-4">
                    <div className="w-full">
                      <label
                        className={`input-label capitalize block mb-2 !text-sm`}
                        htmlFor={"banner1Check"}
                      >
                        *Banner 5.Slider Göster
                      </label>
                      <select
                        id="banner5Check"
                        className="text-sm px-6 py-2 text-gray-900 w-full bg-white border border-black"
                        {...register("banner5Check")}
                      >
                        <option value={"true"}>Evet</option>
                        <option value={"false"}>Hayır</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <Image
                        src={bannerData?.banner5?.image?.imageurl}
                        alt="Banner-5"
                        width={1250}
                        height={1250}
                        className="object-cover max-h-28 "
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="input-field mb-2">
                      <label
                        className="input-label text-black text-sm block mb-2.5"
                        htmlFor="email"
                      >
                        Banner-5 Yazısı*
                      </label>
                      <div className="input-wrapper border border-[#E8E8E8] w-full  h-[35px] overflow-hidden relative ">
                        <input
                          className="input-field placeholder:text-base text-bese px-4 text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                          type="text"
                          {...register("banner5Text")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                <div className="font-semibold text-lg text-blue-600 mb-2">
                  Banner 6.Slider Ayarları
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="flex-1 flex flex-col items-start justify-start bg-gray-200 p-2 rounded-xl">
                  <div className="w-full mb-4">
                    <div className="w-full px-2 h-8">
                      <CldUploadWidget
                        signatureEndpoint="/api/sign-cloudinary-params"
                        onSuccess={(result) => {
                          setImage6(result?.info);
                        }}
                        uploadPreset="rumi_banner"
                        options={{
                          maxFiles: 1,
                        }}
                      >
                        {({ open }) => {
                          function handleOnClick() {
                            setImage6(null);
                            open();
                          }

                          return (
                            <button
                              type="button"
                              className="blue-btn h-6"
                              onClick={handleOnClick}
                            >
                              Banner Resmi Yükle
                            </button>
                          );
                        }}
                      </CldUploadWidget>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 space-x-4">
                    <div className="w-full">
                      <label
                        className={`input-label capitalize block mb-2 !text-sm`}
                        htmlFor={"banner1Check"}
                      >
                        *Banner 6.Slider Göster
                      </label>
                      <select
                        id="banner6Check"
                        className="text-sm px-6 py-2 text-gray-900 w-full bg-white border border-black"
                        {...register("banner6Check")}
                      >
                        <option value={"true"}>Evet</option>
                        <option value={"false"}>Hayır</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <Image
                        src={bannerData?.banner6?.image?.imageurl}
                        alt="Banner-6"
                        width={1250}
                        height={1250}
                        className="object-cover max-h-28 "
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="input-field mb-2">
                      <label
                        className="input-label text-black text-sm block mb-2.5"
                        htmlFor="email"
                      >
                        Banner-6 Yazısı*
                      </label>
                      <div className="input-wrapper border border-[#E8E8E8] w-full  h-[35px] overflow-hidden relative ">
                        <input
                          className="input-field placeholder:text-base text-bese px-4 text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                          type="text"
                          {...register("banner6Text")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                <div className="font-semibold text-lg text-blue-600 mb-2">
                  Banner 7.Slider Ayarları
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="flex-1 flex flex-col items-start justify-start bg-gray-200 p-2 rounded-xl">
                  <div className="w-full mb-4">
                    <div className="w-full px-2 h-8">
                      <CldUploadWidget
                        signatureEndpoint="/api/sign-cloudinary-params"
                        onSuccess={(result) => {
                          setImage7(result?.info);
                        }}
                        uploadPreset="rumi_banner"
                        options={{
                          maxFiles: 1,
                        }}
                      >
                        {({ open }) => {
                          function handleOnClick() {
                            setImage7(null);
                            open();
                          }

                          return (
                            <button
                              type="button"
                              className="blue-btn h-6"
                              onClick={handleOnClick}
                            >
                              Banner Resmi Yükle
                            </button>
                          );
                        }}
                      </CldUploadWidget>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 space-x-4">
                    <div className="w-full">
                      <label
                        className={`input-label capitalize block mb-2 !text-sm`}
                        htmlFor={"banner1Check"}
                      >
                        *Banner 7.Slider Göster
                      </label>
                      <select
                        id="banner7Check"
                        className="text-sm px-6 py-2 text-gray-900 w-full bg-white border border-black"
                        {...register("banner7Check")}
                      >
                        <option value={"true"}>Evet</option>
                        <option value={"false"}>Hayır</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <Image
                        src={bannerData?.banner7?.image?.imageurl}
                        alt="Banner-7"
                        width={1250}
                        height={1250}
                        className="object-cover max-h-28 "
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="input-field mb-2">
                      <label
                        className="input-label text-black text-sm block mb-2.5"
                        htmlFor="email"
                      >
                        Banner-7 Yazısı*
                      </label>
                      <div className="input-wrapper border border-[#E8E8E8] w-full  h-[35px] overflow-hidden relative ">
                        <input
                          className="input-field placeholder:text-base text-bese px-4 text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                          type="text"
                          {...register("banner7Text")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                <div className="font-semibold text-lg text-blue-600 mb-2">
                  Banner 8.Slider Ayarları
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="flex-1 flex flex-col items-start justify-start bg-gray-200 p-2 rounded-xl">
                  <div className="w-full mb-4">
                    <div className="w-full px-2 h-8">
                      <CldUploadWidget
                        signatureEndpoint="/api/sign-cloudinary-params"
                        onSuccess={(result) => {
                          setImage8(result?.info);
                        }}
                        uploadPreset="rumi_banner"
                        options={{
                          maxFiles: 1,
                        }}
                      >
                        {({ open }) => {
                          function handleOnClick() {
                            setImage8(null);
                            open();
                          }

                          return (
                            <button
                              type="button"
                              className="blue-btn h-6"
                              onClick={handleOnClick}
                            >
                              Banner Resmi Yükle
                            </button>
                          );
                        }}
                      </CldUploadWidget>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 space-x-4">
                    <div className="w-full">
                      <label
                        className={`input-label capitalize block mb-2 !text-sm`}
                        htmlFor={"banner1Check"}
                      >
                        *Banner 8.Slider Göster
                      </label>
                      <select
                        id="banner8Check"
                        className="text-sm px-6 py-2 text-gray-900 w-full bg-white border border-black"
                        {...register("banner8Check")}
                      >
                        <option value={"true"}>Evet</option>
                        <option value={"false"}>Hayır</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <Image
                        src={bannerData?.banner8?.image?.imageurl}
                        alt="Banner-8"
                        width={1250}
                        height={1250}
                        className="object-cover max-h-28 "
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="input-field mb-2">
                      <label
                        className="input-label text-black text-sm block mb-2.5"
                        htmlFor="email"
                      >
                        Banner-8 Yazısı*
                      </label>
                      <div className="input-wrapper border border-[#E8E8E8] w-full  h-[35px] overflow-hidden relative ">
                        <input
                          className="input-field placeholder:text-base text-bese px-4 text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                          type="text"
                          {...register("banner8Text")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="w-full mt-6 h-8">
          <button type="submit" className="yellow-btn w-full h-8 !font-bold">
            Kaydet
          </button>
        </div>
      </form>
    </>
  );
};

export default BannerEN;
