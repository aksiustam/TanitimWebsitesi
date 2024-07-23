import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import Header from "../components/Layout/Header";
import { FaPeopleGroup } from "react-icons/fa6";

const page = () => {
  return (
    <div className=" w-screen h-screen overflow-y-scroll">
      <div className="bg-[#964B00] text-slate-200 absolute top-1/4 right-0 py-2 pr-1 pl-3 rounded-l-xl z-10">
        <div className="flex flex-row space-x-2 items-center justify-center">
          <Link href={"/tr"}>
            <Image
              src={"/flag-turkey.svg"}
              alt="Turkey"
              width={500}
              height={500}
              className="w-6 h-6 md:w-8 md:h-8 object-contain"
              loading="eager"
            />
          </Link>
          <a href="https://www.youtube.com/irfanmedeniyeti">
            <FaYoutubeSquare color="white" className="w-5 h-5 md:w-8 md:h-7" />
          </a>
          <a href="https://www.instagram.com/irfanmedeniyeti/">
            <FaInstagramSquare
              color="white"
              className="w-5 h-5 md:w-8 md:h-7"
            />
          </a>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center mb-24">
        <div className="w-full flex flex-col px-8 md:px-40 py-12 text-white">
          <h1 className=" text-4xl font-extrabold text-shadow-lg mb-6 text-center">
            Irfan Civilization Research Center (IRFA)
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-8 lg:mb-16">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={"/aboutus2.jpg"}
                alt="About Us-2"
                width={1200}
                height={1200}
                className="rounded-2xl object-contain"
                loading="eager"
              />
            </div>
            <div className="h-full flex flex-col items-start justify-center">
              <h2 className="font-semibold xl:pr-20 mb-6 lg:mb-3">
                The &quot;Mevlevi Sema Ceremony&quot; within the Irfan
                Civilization Research Center (IRFA) performs the sema ceremony.
              </h2>
              <p className="font-semibold xl:pr-20 mb-6 lg:mb-3">
                Sema, in its literal sense, means hearing or listening. In
                Mevlevi literature, sema is a type of voluntary worship
                performed to the accompaniment of rhythm and music, involving a
                circular movement around the heart from right to left. The
                purpose and intention of sema, the symbolic remembrance practice
                of the Mevlevi order, is to ascend spiritually and to progress
                on the path towards Allah cc (God).
              </p>
              <p className="font-semibold xl:pr-20 mb-6 lg:mb-3">
                During the time of Hazreti Mevlana, sema was performed as an
                expression of religious and mystical fervor without adhering to
                a specific order. It is said that Hazreti Pir, who transformed
                sema into a form of worship, began to practice sema after
                meeting Shams-i Tabrizi.
              </p>
            </div>
          </div>
          <div className="xl:pl-20 mb-6 lg:mb-6">
            <p className="font-semibold xl:pr-20 mb-6 lg:mb-3">
              The semahane within the Irfan Civilization Research Center (IRFA),
              inspired by Mevlevihanes from various parts of Turkey and the
              world, impresses visitors with its neo-classical architectural
              style. In the semahane at IRFA, Mevlevi ceremonies composed in
              various maqams such as Acemaşiran, Acembuselik, Hüzzam,
              Suzidilara, and Hisarbuselik are periodically performed.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-8 mb-16 lg:mb-20 mt-6 lg:mt-0">
            <div className="h-full flex flex-col items-center justify-center font-semibold xl:pl-20 pb-8 lg:pb-0">
              <p className="font-semibold xl:pr-12 mb-6 lg:mb-3">
                The Irfan Civilization Research Center (IRFA), operating in
                collaboration with the Konya Metropolitan Municipality and the
                Human and Irfan Foundation, is an institution aimed at
                preserving the beauties inherited from our civilization and
                revitalizing them in their original form. It strives to
                cultivate individuals who are beneficial to society.
              </p>
              <p className="font-semibold xl:pr-12 mb-6 lg:mb-3">
                The Irfan Civilization Research Center (IRFA) is constructed as
                a complex in accordance with traditional Turkish Islamic art.
                Within IRFA, there are the Panoramic Konya Museum
                &quot;KONYANÜMA&quot;, a semahane, a conference hall, workshops,
                and classrooms.
              </p>
              <p className="font-semibold xl:pr-12 mb-6 lg:mb-3">
                The Irfan Civilization Research Center (IRFA) is active every
                day of the week, offering training such as sema practice, tekke
                music lessons, and instrument making. In addition to organizing
                workshops, IRFA also hosts symposiums and seminars.
              </p>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={"/aboutus1.jpg"}
                alt="About Us-1"
                width={1200}
                height={1200}
                className="rounded-2xl object-contain"
                loading="eager"
              />
            </div>
            <div className="lg:col-span-2 mt-8 xl:px-12">
              <h3 className="font-semibold xl:pr-12 mb-6 lg:mb-3">
                Located on Aslanlı Kışla Street, across from the Mevlana Museum,
                the Irfan Civilization Research Center (IRFA) hosts both local
                and international visitors.
              </h3>
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <div className="grid grid-cols-1 w-[500px] ">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex space-x-4">
                  <FaPeopleGroup size={42} color="white" />
                  <div className="text-white text-4xl">14000+</div>
                </div>

                <div className=" font-semibold text-nowrap">
                  More Than People Visited
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default page;
