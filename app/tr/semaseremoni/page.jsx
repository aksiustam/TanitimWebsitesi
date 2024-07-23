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
          <Link href={"/en"}>
            <Image
              src={"/flag-english.svg"}
              alt="English"
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
          <h1 className=" text-4xl font-extrabold text-shadow-lg mb-6 ">
            MEVLEVİ SEMA TÖRENİ
          </h1>
          <div className="w-full h-full">
            <h2 className="text-lg font-semibold mb-6">
              Mevlevî Semâ Töreni, Allah’a ulaşma yolunun derecelerini sembolize
              eden, içinde dini öğe ve temalar barındıran ve bu haliyle
              ayrıntılı kural ve niteliklere sahip tasavvufî bir törendir.
              Mevlevîliğe özel bu seremoni, Mevlâna Celaleddin-i Rumî (Ö. 17
              Aralık 1273) zamanında belli bir kurala bağlı kalmaksızın
              yapılırken, Sultan Veled ve Ulu Arif Çelebi zamanından başlayarak
              disiplinli bir şekilde icra edilmiştir. Bu kurallar, Pir Adil
              Çelebi zamanına kadar geliştirilmiş ve son şeklini alarak günümüze
              kadar gelmiştir.
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
                <h3 className="font-semibold mb-6">
                  Tören, birbiriyle bütünlük içinde farklı tasavvufî anlamlar
                  içeren naat, ney taksimi, peşrev, Devr-i Veledî ve dört selâm
                  bölümlerinden oluşmaktadır. Semâ Töreni, Mevlevîlik kültürünün
                  doğru olarak aktarılabileceği mekanlarda gelenekten gelen
                  Mevlevî müziği ile icra edilir. Itri’nin rast makamında
                  bestelediği 17. yüzyılın sonundan itibaren çalınmakta olan
                  naat-ı şerif ile törene başlanır. Pir Adil Çelebi gibi
                  bestekârlar tarafından bestelenmiş ilahiler, müzik eğitimi
                  almış koro tarafından okunur. Ney, kudüm ve ud gibi
                  enstrümanlar, koroya eşlik eder. Mevlâna’nın Farsça yazılmış
                  eserleri, tören süresince mutrib heyeti (ses ve saz topluluğu)
                  tarafından icra edilen bestelerin temel kaynağıdır.
                </h3>
                <h3 className=" font-semibold mb-6">
                  Törene, Hz. Muhammed’i öven naat-ı şerifin okunmasıyla
                  başlanır. Naat-ı şerifin okunmasından sonra ney taksimine
                  geçilir. Ney taksiminin bitiminde semâzenler, semâzenbaşının
                  işaret ettiği yere geçip semâya başlarlar. Bundan sonra
                  başlayan Devr-i Veledî, ölümden sonra dirilmeyi betimler.
                  Hırkası kabri, sikkesi mezar taşı olan semâzen otururken ölmüş
                  sayılır. Devr-i Veledî’den sonra başlayan ayinde semâzenler
                  usulünce hırkalarını çıkarır, dünyevi işlerinden soyunurlar.
                </h3>
              </div>
            </div>

            <h4 className="font-semibold mb-6">
              Semâ törenlerinde selam bölümü dört kısımdan oluşmaktadır: 1.
              Selâm, insanın kulluğunu idrak etmesini; 2. Selâm, Allah’ın
              kudreti karşısında hayranlık duyulmasını; 3. Selâm, kudret
              karşısında duyulan hayranlığın aşka dönüşmesini; 4. Selâm, insanın
              kulluğa dönüşünü anlatır. Tören, okunan Kur’an-ı Kerim ve dualarla
              bitirilir.
            </h4>
            <div className="mb-6 flex flex-col-reverse lg:grid lg:grid-cols-2 lg:space-x-8 px-12">
              <div className="flex flex-col items-center justify-center">
                <p className="font-semibold mb-6">
                  Gökler âleminin bir sembolü olarak Mevlevî Semâ’sında
                  semâzenler dönerken, semâzenbaşı aralarında gezinir ve
                  semâzenlerin birbirlerine olan mesafesinin korunmasını sağlar.
                  Post-nişîn olarak adlandırılan ve töreni yöneten kişi ise
                  kırmızı postun ucunda ayakta durarak dualar okur. Semâ yapılan
                  yer yuvarlak olmasından dolayı dünyaya, Post-nişîn güneşe,
                  semâzenbaşı aya ve semâzenler de gezegenlere benzetilerek,
                  semânın güneş sistemini sembolize ettiği varsayılır.
                </p>
                <p className="font-semibold mb-6">
                  İcra edilmesi özen ve dikkat gerektiren bu tören, başından
                  sonuna kadar birçok aşamada mistik anlamda semboller taşır.
                  Semâ esnasında dönmek tüm mekân ve yönlerde Allah’ı seyretmeyi
                  temsil eder. Ayak vurmak, nefsin sınırsız ve doyumsuz
                  isteklerini ayaklar altına alıp ezmek ve onunla mücadele edip
                  nefsi mağlup etmektir. Kollarını yana açmak, “en mükemmel”e
                  yönelik bir acziyettir. Semâda sağ elin yukarı, sol elin ise
                  aşağı doğru kollar açık bir hale gelmesi, sağ elle Tanrı’dan
                  feyiz alıp O’ndan başkasına yüz çevirmek ve sol elle bu feyzin
                  dağıtılması anlamına gelmektedir.
                </p>
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

            <p className="font-semibold mb-8">
              Töreni icra eden semâzenler, manevî ve bedenî uzun bir eğitim
              süreci sonrasında ayin için hazır hale gelirler. Semâ yapılan
              alandaki tüm hal ve tavırlar edep ve erkâna riayet edilerek
              gerçekleştirilir. Semâ yapacak kişinin, Mevlâna’nın yazılı
              eserlerini okuyup anlayabilecek kapasiteye ve müzik, kaligrafi
              gibi sanatlarla meşgul olabilecek yeteneğe sahip olması beklenir.
              Semâzen için gerekli bu eğitim süreci onu, seyr-ü sülûk’a yani
              bilgiyi edindikten sonra değişimi ve gelişimi öngören insan-ı
              kâmil yoluna ulaştırır. Maneviyat yolu; bağlılık, muhabbet,
              hizmet, Allah’ın hatırlanması ve inziva gibi pek çok aşamayı
              içermektedir.
            </p>
            <p className="font-semibold mb-6">
              Koreografisi ve karmaşık müzik yapısıyla hem sanatsal hem de ilahi
              aşkı anlatan Mevlevî Semâ Törenleri, yaz ayları boyunca özellikle
              Konya ve İstanbul’da haftada en az iki kez gerçekleştirilmektedir.
              Ayrıca Kültür ve Turizm Bakanlığı bünyesinde oluşturulan Konya
              Türk Tasavvuf Müziği ve İstanbul Tarihi Türk Müziği Toplulukları,
              Mevlevî ayinlerinin yer aldığı etkinliklerde performanslarını
              sergilemektedir. Mevlâna’nın ölüm yıldönümü olan ve kulun Rabbine
              kavuşma gecesi olarak kabul edilen Şeb-i Arus’da (17 Aralık)
              gerçekleştirilen Mevlevî Semâ Törenleri’ne yurtiçi ve yurtdışından
              büyük bir izleyici kitlesi katılmaktadır.
            </p>
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
                <p className="font-semibold mb-6">
                  13’üncü yüzyılda ortaya çıkmış, zaman içinde gelişip
                  şekillenerek Türk tarihinin ve kültürünün önemli bir parçası
                  haline gelmiş olan Mevlevîliğe bağlı kültürün ve özellikle
                  Semâ töreninin korunarak yaşatılmasının yolu, bu geleneğin
                  teknik ve içsel mükemmelliğini ve özgünlüğünü bozmadan gelecek
                  nesillere aktarılması ve tanıtılmasıdır. Mevlevî Semâ
                  Törenleri’nin özünü kaybetmeden gerçekleştirilmesini sağlamak
                  amacıyla Kültür ve Turizm Bakanlığı’nın yanı sıra pek çok
                  sivil toplum kuruluşunun yer aldığı koruma eylem planı
                  oluşturulmuştur.
                </p>
                <p className="font-semibold">
                  UNESCO Yıldönümü Kutlamaları Listesi kapsamında 2007 yılı
                  Mevlâna’nın doğumunun 800’üncü yılı sebebiyle UNESCO
                  tarafından “Mevlâna Celaleddin-i Rumî’nin 800. Doğum
                  Yıldönümü” olarak ilân edilmiş olup, Türkiye’de ve dünyada yıl
                  boyunca Mevlâna ve Mevlevîlikle ilgili pek çok etkinlik
                  düzenlenmiş ve Mevlevî Semâ Töreni icra edilmiştir.
                </p>
              </div>
            </div>

            <p className="font-semibold mb-6">
              Mevlevî Semâ Töreni’nin özünü kaybetmeden gerçekleştirilmesini
              sağlamak amacıyla Kültür ve Turizm Bakanlığı tarafından 2008
              yılında Mevlevîlik-Semâ Törenleri Hakkında Genelge yayımlanmıştır.
              Bu Genelge’ye göre; Semâ Töreni, mutlaka bu kültürün doğru olarak
              aktarılabileceği, tanıtılabileceği mekânlarda ve gerekli şartların
              sağlandığı ortamlarda, gelenekten gelen ve Semâ’nın ayrılmaz bir
              parçası olan Mevlevî Müziği eserleri eşliğinde yapılmalıdır.
              Programlara katılan semâzen ve müzisyenler gereken teknik ve
              müzikal yeterliliğe sahip olmalı, program esnasında bir kültürel
              tanıtımın yanı sıra “aşkın ve tasavvufi özelliklere sahip bir
              uygulama” yaptıklarının bilinci içinde ciddiyetle hareket
              etmelidirler.
            </p>
            <p className="font-semibold mb-6">
              2010 yılında İstanbul Avrupa Kültür Başkenti programlarında
              yapılan pek çok sanatsal etkinlikler arasında Mevlevî Semâ
              Törenleri büyük ilgi görmüştür. Bu kapsamda törenlerin mistik
              havasına ve özüne uygun olarak Galata ve Yenikapı Mevlevîhaneleri
              restore edilmiş ve semâzenlerin eğitim aldığı kültür merkezleri
              haline getirilmişlerdir.
            </p>
            <p className="font-semibold mb-6">
              Semâ törenlerinde semâzenlerin giydiği kostüm büyük önem
              taşımaktadır. Mevlevî dervişlerinin giydikleri ve sikke adı
              verilen keçe başlıklarının üretilmesi zorlu ve bir o kadar emek
              isteyen bir yaratıcılık sürecidir. Günümüzde Mehmet Girgiç, sikke
              adı verilen bu başlıkları imal eden ender el sanatı
              ustalarındandır. Bugün Mevlâna Müzesi’nde yer alan sikkeler onun
              imalatıdır. Girgiç, çalışmalarından dolayı 2010 yılında Kültür ve
              Turizm Bakanlığı tarafından “Yaşayan İnsan Hazinesi” olarak ilan
              edilmiştir.
            </p>
            <h5 className="font-semibold mb-6">
              UNESCO İnsanlığın Sözlü ve Somut Olmayan Kültürel Mirası
              Başyapıtları Programı çerçevesinde 2005 yılında Başyapıt olarak
              ilan edilen “Mevlevî Semâ Töreni”, 2008 yılında UNESCO İnsanlığın
              Somut Olmayan Kültürel Mirasının Temsili Listesi’ne ülkemiz adına
              kaydettirilerek tüm dünyaya tanıtılmıştır.
            </h5>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default page;
