"use server";
import prisma from "@/lib/prismadb";

export default async function getVideo() {
  try {
    const videos = await prisma.Videos.findMany();

    return videos;
  } catch (error) {
    throw new Error(error);
  }
}
