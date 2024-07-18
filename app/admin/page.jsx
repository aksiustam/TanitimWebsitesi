import AdminClient from "./AdminClient";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";

const page = async () => {
  const User = await getCurrentUser();
  const Auth = User && User.Role === "ADMIN" ? true : false;

  if (Auth) {
    redirect("/admin/anasayfa");
  } else {
    return <AdminClient />;
  }
};

export default page;
