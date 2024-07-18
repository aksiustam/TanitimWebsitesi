import React from "react";
import GaleryClient from "./GaleryClient";
import getGalery from "@/app/actions/galeri/getGalery";

const page = async () => {
  const galery = await getGalery();
  return <GaleryClient galery={galery} />;
};

export default page;
