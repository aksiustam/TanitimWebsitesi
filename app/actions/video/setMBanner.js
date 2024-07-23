"use server";
import prisma from "@/lib/prismadb";

export default async function setMBanner(data) {
  try {
    const ayar = await prisma.ayarlar.findFirst();
    const ayarlar = ayar?.mbanner;

    const { v2: cloudinary } = await import("cloudinary");

    cloudinary.config({
      cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    let image1 = ayarlar?.banner1?.image || null;
    if (data.banner1.image === null) {
      data.banner1.image = image1;
    } else {
      if (image1 !== null) {
        await cloudinary.uploader.destroy(image1.imageid);
      }
    }
    let image2 = ayarlar?.banner2?.image || null;
    if (data.banner2.image === null) {
      data.banner2.image = image2;
    } else {
      if (image2 !== null) {
        await cloudinary.uploader.destroy(image2.imageid);
      }
    }
    let image3 = ayarlar?.banner3?.image || null;
    if (data.banner3.image === null) {
      data.banner3.image = image3;
    } else {
      if (image3 !== null) {
        await cloudinary.uploader.destroy(image3.imageid);
      }
    }
    let image4 = ayarlar?.banner4?.image || null;
    if (data.banner4.image === null) {
      data.banner4.image = image4;
    } else {
      if (image4 !== null) {
        await cloudinary.uploader.destroy(image4.imageid);
      }
    }
    let image5 = ayarlar?.banner5?.image || null;
    if (data.banner5.image === null) {
      data.banner5.image = image5;
    } else {
      if (image5 !== null) {
        await cloudinary.uploader.destroy(image5.imageid);
      }
    }
    let image6 = ayarlar?.banner6?.image || null;
    if (data.banner6.image === null) {
      data.banner6.image = image6;
    } else {
      if (image6 !== null) {
        await cloudinary.uploader.destroy(image6.imageid);
      }
    }
    let image7 = ayarlar?.banner7?.image || null;
    if (data.banner7.image === null) {
      data.banner7.image = image7;
    } else {
      if (image7 !== null) {
        await cloudinary.uploader.destroy(image7.imageid);
      }
    }
    let image8 = ayarlar?.banner8?.image || null;
    if (data.banner8.image === null) {
      data.banner8.image = image8;
    } else {
      if (image8 !== null) {
        await cloudinary.uploader.destroy(image8.imageid);
      }
    }

    await prisma.ayarlar.update({
      where: { id: 1 },
      data: {
        mbanner: data,
      },
    });

    return true;
  } catch (error) {
    throw new Error(error);
  }
}
