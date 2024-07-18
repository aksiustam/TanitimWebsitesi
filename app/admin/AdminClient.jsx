"use client";

import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const AdminClient = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const onChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const sumbit = async () => {
    try {
      const { ok, error } = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (ok) {
        router.push("/admin/anasayfa");
        router.refresh();
      }

      if (error) {
        alert("Hata Oluştu " + error);
      }
    } catch (error) {
      alert("Hata Oluştu " + error);
    }
  };
  return (
    <>
      <div className="w-full py-10">
        <div className="container-x mx-auto">
          <div className="flex items-center justify-center relative">
            <div className="lg:w-[572px] w-full h-[783px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
              <div className="w-full">
                <div className="title-area flex flex-col justify-center items-center relative  mb-7">
                  <h1 className="text-[34px] font-bold leading-[74px] text-qblack text-center">
                    RumiCeremony ADMIN GİRİŞ
                  </h1>
                  <div className="shape -mt-6">
                    <svg
                      width="172"
                      height="29"
                      viewBox="0 0 172 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.08742C17.6667 19.0972 30.5 31.1305 62.5 27.2693C110.617 21.4634 150 -10.09 171 5.08727"
                        stroke="#FFBB38"
                      />
                    </svg>
                  </div>
                </div>
                <div className="input-area">
                  <div className="input-field mb-5">
                    <label
                      className="input-label text-qgray text-sm block mb-2.5"
                      htmlFor="email"
                    >
                      Kullanıcı Adı*
                    </label>
                    <div className="input-wrapper border border-[#E8E8E8] w-full  h-[58px] overflow-hidden relative ">
                      <input
                        className="input-field placeholder:text-base text-bese px-4 text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                        type="text"
                        name="email"
                        id="email"
                        label="email"
                        required
                        onChange={onChange}
                      />
                    </div>
                  </div>

                  <div className="input-item mb-5">
                    <label
                      className="input-label text-qgray text-sm block mb-2.5"
                      htmlFor="password"
                    >
                      Şifre*
                    </label>
                    <div className="input-wrapper border border-[#E8E8E8] w-full  h-[58px] overflow-hidden relative ">
                      <input
                        className="input-field placeholder:text-base text-bese px-4 text-dark-gray w-full h-full bg-[#FAFAFA] focus:ring-0 focus:outline-none"
                        type="password"
                        name="password"
                        id="password"
                        label="password"
                        required
                        onChange={onChange}
                      />
                    </div>
                  </div>

                  <div className="signin-area mb-3.5">
                    <div className="flex justify-center">
                      <button
                        onClick={sumbit}
                        className="black-btn mb-6 text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
                      >
                        <span>Giriş Yap</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminClient;
