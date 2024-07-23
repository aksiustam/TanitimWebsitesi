import React from "react";
import AdminPageClient from "./AdminPageClient";
import getSettings from "@/app/actions/getSettings";
const page = async () => {
  const ayarlar = await getSettings();
  return (
    <div>
      <AdminPageClient ayarlar={ayarlar} />
    </div>
  );
};

export default page;
