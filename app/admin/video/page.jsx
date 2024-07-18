import React from "react";
import VideoClient from "./VideoClient";
import getVideo from "@/app/actions/video/getVideo";

const page = async () => {
  const videos = await getVideo();
  return <VideoClient videos={videos} />;
};

export default page;
