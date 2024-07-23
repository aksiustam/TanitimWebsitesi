import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import Header from "../components/Layout/Header";

const page = () => {
  return (
    <div className=" w-screen h-screen overflow-y-scroll pb-20">
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
      <div className="flex-1">
        <div className="w-full flex flex-col items-center justify-center py-6 px-6 lg:px-32 lg:py-12  text-white">
          <h1 className=" text-4xl font-extrabold text-shadow-lg mb-6">
            MEVLEVI SEMA CEREMONY
          </h1>
          <div className="w-full h-full">
            <h2 className="text-lg font-semibold mb-6">
              The Mevlevi Sema Ceremony is a Sufi ceremony that symbolizes
              stages on the path to accessing God and contains religious
              elements and themes with detailed rules and characteristics. While
              this ceremony unique to the Mevlevi sect had no specific rules in
              Mevlâna Celaleddin-i Rumî’s day (deceased December 17, 1273), it
              began to be performed in a disciplined way from the time of Sultan
              Veled and Ulu Arif Çelebi. These rules were developed until the
              time of Pir Adil Çelebi, when they assumed the final form we have
              today.
            </h2>
            <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 lg:space-x-8 px-12">
              <div className="flex-1 mb-6 lg:mb-0">
                <Image
                  src={"/semaceremony.jpg"}
                  alt="SemaCeremony"
                  width={1500}
                  height={1500}
                  className="w-full h-full rounded-3xl object-contain"
                  loading="eager"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className=" font-semibold mb-6">
                  The ceremony consists of the noble eulogy to the Prophet
                  Mohammed, flute solo, prelude, the Circling of Veled and four
                  segments (selam), which form an integral whole and contain
                  different Sufi meanings. The Sema Ceremony is performed with
                  traditional Mevlevi music in spaces where Mevlevi culture can
                  be properly transmitted. The ceremony begins with the Noble
                  Eulogy (naat-ı şerif), which is the score composed by Itri and
                  has been played since the late 17th century. Hymns written by
                  composers such as Pir Adil Çelebi are sung by a trained
                  chorus, which is accompanied by instruments such as the ney
                  (flute), kettledrum and oud. The works of Rumi written in
                  Persian are the basic source of the compositions performed by
                  the musicians and singers during the ceremony.
                </h3>
                <h3 className=" font-semibold mb-6">
                  The ceremony begins with the recitation of the Noble Eulogy
                  (naat-ı şerif), which praises the Prophet Mohammed. This is
                  followed by the ney solo. When the ney solo ends, the whirling
                  dervishes go to the places indicated by the head dervish and
                  begin the sema. The Circling of Veled, which begins after
                  this, depicts the resurrection from the dead. The whirling
                  dervish’s cloak resembles the grave, his hat the gravestone,
                  and he is considered dead when sitting. In the service that
                  begins after the Circling of Veled, the whirling dervishes
                  slowly remove their cloaks, thus freeing themselves from
                  worldly affairs.
                </h3>
              </div>
            </div>

            <h3 className="font-semibold mb-6">
              While the whirling dervishes are spinning in the Mevlevi Sema as a
              symbol of the heavenly realm, the chief dervish moves among them,
              making sure they maintain proper distance between them. The person
              who directs the ceremony is called the Post-nişîn, and he stands
              at the end of a red fleece reciting prayers. It is assumed that
              the sema represents the solar system because the place where it is
              performed is round, and the Post-nişîn is compared to the sun, the
              chief dervish to the moon and the dervishes to the planets.The
              selam portion of the sema ceremony consists of four segments: The
              first selam describes how humans accept their status as created
              beings, the second selam the rapture felt when confronted with
              God’s omnipotent power, the third selam the transformation of
              rapture at God’s power into love, and the fourth selam how humans
              return to serve. The ceremony ends with the reading of the Qur’an
              and prayers. This ceremony requires skill and concentration to
              perform and includes mystical symbols at several stages from the
              beginning to the end. Whirling during the sema represents
              witnessing God in all places and aspects. The stamping of the feet
              symbolizes crushing the boundless insatiable desires of the ego
              underfoot, striving against and defeating the ego. Holding one’s
              arms out to the side is the need for ultimate perfection. During
              the sema, the arms are open with the right hand held up and the
              left hand down, which symbolizes blessing from God received with
              the right hand while turning away from everyone else and
              distributing these blessings with the left hand.
            </h3>
            <div className="mb-6 flex flex-col-reverse lg:grid lg:grid-cols-2 lg:space-x-8 px-12">
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-semibold mb-6">
                  The whirling dervishes who perform the ceremony must undergo
                  rigorous spiritual and physical training before they are ready
                  for the service. All of the postures and demeanors in the area
                  where the sema are performed conform to rule of decency.
                  Individuals who perform the sema are expected to be capable of
                  reading and understanding the written works of Rumi and to
                  have the skill required to engage in arts such as music and
                  calligraphy. The course of training required for the whirling
                  dervish will put him on a spiritual journey, in other words it
                  will put him on the path of the Perfect Man, which envisions
                  transformation and development after the acquisition of
                  knowledge. The spiritual journey includes many different
                  stages, such as loyalty, love, service, the remembrance of God
                  and solitude.
                </h3>
                <h4 className="font-semibold mb-6">
                  The Mevlevi Sema Ceremonies that describe divine love in
                  artistic terms with choreography and complex musical structure
                  are performed at least twice a week throughout the summer,
                  particularly in Istanbul and Konya. The Konya Turkish Sufi
                  Music and Istanbul Historical Turkish Music Groups established
                  under the auspices of the Ministry of Culture and Tourism also
                  perform at events that include Mevlevi services. Huge
                  audiences from home and abroad attend the Mevlevi Sema
                  Ceremonies held on the Night of Reunion (December 17), which
                  is the anniversary of Rumi’s death and is recognized as the
                  night on which the servant met his Lord.
                </h4>
              </div>
              <div className="flex-1 mb-6 lg:mb-0">
                <Image
                  src={"/semaceremony2.jpg"}
                  alt="Sema Ceremony 2"
                  width={1500}
                  height={1500}
                  className="w-full h-full rounded-3xl object-contain"
                  loading="eager"
                />
              </div>
            </div>

            <h4 className="font-semibold mb-8">
              Mevlevi culture emerged in the 13th century, was developed and
              changed over time and became an important part of Turkish history
              and culture. The way to preserve and keep it alive, especially the
              Sema ceremony, is to teach it to future generations without
              marring the technical and internal perfection and originality of
              the tradition. In order to ensure that the Mevlevi Sema Ceremonies
              are performed without compromising their essence, a protective
              action plan has been drawn up that includes not only the Ministry
              of Culture and Tourism but many civil society organizations as
              well.
            </h4>
            <h5 className="font-semibold mb-6">
              As part of the UNESCO Anniversary Celebrations List, UNESCO
              proclaimed 2007 to be the “800th Anniversary of the Birth of
              Mawlana Jalal-ud-Din Balkhi-Rumi.”. A number of events related to
              Mevlana and Mevlevi culture were organized both in Turkey and
              abroad, and the Mevlevi Sema Ceremony was performed.
            </h5>
            <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 lg:space-x-8  lg:pb-0 px-12 ">
              <div className="flex-1 mb-6 lg:mb-0">
                <Image
                  src={"/semaceremony3.jpg"}
                  alt="SemaCeremony"
                  width={1500}
                  height={1500}
                  className="w-full h-full rounded-3xl object-contain"
                  loading="eager"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-semibold">
                  To ensure that the Mevlevi Sema Ceremony is performed without
                  compromising its essential character, the Ministry of Culture
                  and Tourism issued in 2008 the Circular Regarding Mevlevi
                  Culture-Sema Ceremonies. According to this Circular, the Sema
                  Ceremony must be performed with traditional works from Mevlevi
                  Music, which are an inseparable part of the Sema, in spaces
                  where this culture can be accurately transmitted and
                  introduced and in environments that meet the necessary
                  requirements. The dervishes and musicians who participate in
                  the programs must possess the necessary technical and musical
                  competence. They must conduct themselves solemnly, aware that
                  they are not only representing a culture during the program
                  but performing “a transcendent practice with Sufi
                  characteristics.” Among the many artistic events held as part
                  of the Istanbul 2010 European Capital of Culture program, the
                  Mevlevi Sema Ceremonies attracted significant interest. The
                  Galata and Yenikapı Mevlevi lodges have been restored in
                  keeping with the mystical atmosphere and essence of the
                  ceremonies, and converted into cultural centers where whirling
                  dervishes are trained.
                </p>
              </div>
            </div>

            <p className="font-semibold mb-6">
              The costume worn by the dervishes during the sema ceremonies is
              extremely important. Making the felt hats called sikke worn by the
              Mevlevi dervishes is not only difficult, but it is also a
              laborintensive process of creation. Today, Mehmet GİRGİÇ is one of
              the rare craftsmen who make these sikke hats. The sikke hats
              currently in the Mevlana Museum were made by him. Girgiç was
              proclaimed a “Living Human Treasure” by the Ministry of Culture
              and Tourism in 2010 for his works.
            </p>
            <p className="font-semibold mb-6">
              The Mevlevi Sema Ceremony, which was proclaimed a Masterpiece in
              2005 within the framework of the UNESCO Masterpieces of the Oral
              and Intangible Cultural Heritage of Humanity Program, was
              registered on UNESCO’s Representative List of the Intangible
              Cultural Heritage of Humanity in 2008 on behalf of our country and
              thereby introduced to the world.{" "}
            </p>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default page;
