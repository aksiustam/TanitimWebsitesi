"use server";
import prisma from "@/lib/prismadb";

export default async function setBanner(data) {
  try {
    const set = await prisma.ayarlar.findFirst();

    let formData = {
      imageid: set?.banner?.imageid,
      imageurl: set?.banner?.imageurl,
      mimageid: set?.banner?.mimageid,
      mimageurl: set?.banner?.mimageurl,
    };
    if (data.imageid !== null && data.imageurl !== null) {
      formData.imageid = data.imageid;
      formData.imageurl = data.imageurl;
    }
    if (data.mimageid !== null && data.mimageurl !== null) {
      formData.mimageid = data.mimageid;
      formData.mimageurl = data.mimageurl;
    }
    await prisma.ayarlar.update({
      where: { id: 1 },
      data: {
        banner: formData,
      },
    });

    return true;
  } catch (error) {
    throw new Error(error);
  }
}
