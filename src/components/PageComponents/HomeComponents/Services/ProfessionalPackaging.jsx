import { useEffect } from "react";
import { database, getDatas } from "../../../../config/config";
import { ref, set } from "firebase/database";
import { useState } from "react";
import slugify from "react-slugify";

const ProfessionalPackaging = () => {
  const [data, setData] = useState(null);
  async function fetchDatas() {
    try {
      const datas = await getDatas("ProfessionalPackaging");
      setData(datas);
    } catch (error) {
      console.error("Mesajları alma hatası:", error);
    }
  }
  console.log(data);
  console.log(slugify("something I want to test"));

  const setDatas = async () => {
    const messageRef = ref(database, "ProfessionalPackaging");
    set(messageRef, [
      {
        name: "Patpat",
        description:
          "Taşıma esnasında eşyaların zarar görmemesi için 1. kalite patpat ile eşyanızı paketliyoruz.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/paketleme/paket-1.png",
      },
      {
        name: "Streç",
        description:
          "Eşyaların ambalajı daha iyi tutması ve kirlenmemesi için streç ile eşyaları sarıyoruz.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/paketleme/paket-2.png",
      },
      {
        name: "Bant",
        description:
          "Patpat ile kaplanan eşyaların taşınma esnasında açılmaması için bant ile destekliyoruz.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/paketleme/paket-3.png",
      },
      {
        name: "Yatak Kılıfı",
        description:
          "Evinizdeki yatağın taşıma esnasında kirlenmemesi için özel üretim kılıf ile taşıyoruz.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/paketleme/paket-4.png",
      },
    ]);
    set(ref(database, "ProfessionalService"), [
      {
        name: "Evden Eve Nakliyat",
        slug: "evden-eve-nakliyat",
        description:
          "Yılların vermiş olduğu tecrübemiz ile evinizi profesyonelce sigortalı olarak taşıyoruz.",
        imageUrl:
          "https://www.a1nakliyat.com/wp-content/uploads/2022/02/evden-eve-nakliyat-1024x682.jpg",
        longDescrition: ` <p>
              Atasayar Nakliyat ekibi olarak, müşterilerimizle birlikte
              taşımacılık işlemi için kararlaştırdığımız randevu gününde
              eksperlerimiz evinize gelerek yada Whatsapp ile yolladığınız
              resimleri inceleyerek gerekli olan incelemelerini yapar. Ekspertiz
              hizmetinin amacı taşıma fiyatını netleştirmek, sahip olduğunuz
              eşyaların nasıl bir araç ile taşınabileceğini tespit etmek, kaç
              kişilik kadronun taşınma işlemi için yeterli olacağını saptamak ve
              evden eve taşınma işlemi için ne kadarlık bir sigortaya ihtiyaç
              duyulduğunu tespit etmektir.
            </p>
            <p>
              Eğer karşılıklı anlaşma sağlanması durumunda taşınma işlemi için
              bir sözleşme hazırlanarak imzalanır. Evden eve nakliyat hizmeti
              için bundan sonraki aşamalarda ise taşınmaya karar verilen gün
              eğer eşyalarınızın sayısı fazla ise bir gün önceden değilse
              taşınmanın olacağı gün ambalajlama ve paketleme elemanlarımız
              gelerek eşyalarınızın paketleme ve ambalajlama işlemlerini
              yaparlar.
            </p>
            <p>
              Ambalaj malzemesi olarak “Beyaz eşya, mobilya, koltuk takımları,
              vb.” Avrupa’dan ithal pet graft kağıtları, kırılacak eşyalarınız
              ise beyaz kağıtlara sarılıp özel karton kutulara yerleştirilir.
              Evden eve nakliyat hizmetinde aile bireylerinden bir kişinin
              olması yeterlidir. Taşınma işlemi esnasında eşyalarınızın zarar
              görmemesi için gerekli prosedürler uygulanarak, paketleme ve
              ambalajlama işleminde büyük önem gözetmektedir.
            </p>
            <p>
              Evden Eve Nakliyat hizmetleri, Saray Nakliyat firmasının
              müşterilerine sunduğu yüksek kalitede evden eve nakliyat ve
              asansörlü taşımacılık ile ekonomik fiyatlandırma sayesinde,
              Ülkemiz’de bulunan kisi ve kurumlara taşınma konusunda ciddi
              kolaylık ve kalite sağlamaktadır.
            </p>
            <p>
              Aynı zamanda müşterimiz taşınma işleminin bittiğini tam olarak
              belirttiği takdirde elemanlarımız işlemlerini bitirmiş oluyorlar.
              Yapılması gereken ve yapabilecekleri her türlü işlemi
              gerçekleştiren personelimiz uzman olarak eğitim almış kişilerden
              oluşmaktadır. Eşyalarınızın taşınması sırasında doğabilecek
              hasarlarda, eğer firmamız sorumluluğunda olmuş ise, sorumluluk
              firmamıza aittir.
            </p>
            <p>
              Atasayar Nakliyat ekibi olarak karşılaşabileceğimiz tüm
              olumsuzlukları düşünerek eşyalarınız için sigorta işlemi de
              yapmaktayız. Müşterilerimizle görüşme esnasından, taşımacılık
              işlemleri tamamen bitene kadar yapılabilecek ne kadar işlem varsa
              gerçekleştirmekteyiz.
            </p>
            <p>
              Detaylı bilgi almak isterseniz bizimle iletişim kurabilirsiniz.
            </p>`,
      },
      {
        name: "Ofis Taşıma",
        slug: "ofis-tasima",
        description:
          "Ofis ve büro taşımacılığında tüm eşyalarınızı özenle paketleyip sorunsuz hizmet sunuyoruz.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/hizmetler/ofis-tasima-1.png",
      },
      {
        name: "Asansörlü Nakliyat",
        slug: "asansorlu-nakliyat",
        description:
          "Katınız kaçınca kat olursa olsun, son teknoloji modüler asansörümüz ile asansörlü evinizi taşıyoruz.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/hizmetler/asansorlu-nakliyat-1.png",
      },
      {
        name: "Parça Eşya Taşıma",
        slug: "parca-esya-tasima",
        description:
          "Taşınacak bir kaç parça eşyanız mı var? En uygun fiyatlara, zamanında teslimat garantisi ile hizmet alın.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/hizmetler/parca-esya-1.png",
      },
      {
        name: "Eşya Depolama",
        slug: "esya-depolama",
        description:
          "Eşyalarınızı güvende tutacak yer mi arıyorsunuz? Sigortalı 7/24 kameralı depolarımız hizmetinize hazır.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/hizmetler/esya-depolama.png",
      },
      {
        name: "Şehir İçi Nakliye",
        slug: "sehir-ici-nakliye",
        description:
          "Taşıma türü ne olursa olsun, şehir içi taşımacılık isteğinize profesyonelce nakliye hizmeti veriyoruz.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/hizmetler/sehir-ici-nakliye-1.png",
      },
      {
        name: "Şehirler Arası Nakliye",
        slug: "sehirler-arasi-nakliye",
        description:
          "Şehirler arası nakliyede garantili, zamanında teslimat ve uygun fiyat ile hizmet sunuyoruz.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/hizmetler/sehirler-arasi-nakliye-1.png",
      },
      {
        name: "Ücretsiz Ekspertiz",
        slug: "ucretsiz-ekspertiz",
        description:
          "Taşınacak eşyalarınızı yerinde inceleyip, en iyi hizmeti vermek için ücretsiz ekspertiz hizmetimiz ile kapınızdayız.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/hizmetler/ucretsiz-ekspertiz-1.png",
      },
    ]);
    set(ref(database, "ContactUs"), [
      {
        name: "Whatsapp Destek",
        shortname: "Telefon",
        description:
          "WhatsApp üzerinden firmamıza eşya resmi göndererek anında fiyat alabilirsiniz.",
        buttonName: "0532 376 49 84",
        buttonLink: "tel:05323764984",
        imageUrl:
          "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1490000/whatsapp-aa-1490025.jpg",
      },
      {
        name: "Ofis Adresimiz",
        shortname: "Adres",
        description:
          "Ofisimizi ziyaret ederek yüz yüze görüşme sağlayabilirsiniz.",
        buttonName: "Harita Konumu",
        buttonLink: "https://maps.app.goo.gl/qzRaqu5vRnCradFU7",
        imageUrl:
          "https://www.a1nakliyat.com/wp-content/uploads/2022/02/evden-eve-nakliyat-1024x682.jpg",
      },
      {
        name: "Teklif Formu",
        shortname: "E-Posta",
        description:
          "Teklif formunu doldurarak firmamızdan hızlıca fiyat alabilirsiniz.",
        buttonName: "Teklif Formu",
        buttonLink: "iletisim",
        imageUrl:
          "https://images.hindustantimes.com/tech/rf/image_size_960x540/HT/p2/2017/02/28/Pictures/_8fcc5b2c-fd95-11e6-a3af-7fa15638f741.jpg",
      },
    ]);
    set(ref(database, "UserReviews"), [
      {
        name: "Yunus Güneş",
        description:
          "Merhabalar, Söz verdikleri tarihte taşıdılar. Taşınma sırasında sürekli iletişim halindeydik. Eşyalarım aynı gün içinde taşınacağı bölgeye ulaştı. Yine taşınma işlemim olursa aynı firmayı değerlendiriyor olurdum. Teşekkürler, İyi Çalışmalar.",
        gender: "male",
        date: "10 Ekim 2023",
        score: 5,
      },
      {
        name: "Büşra Yazıcı",
        description:
          "Konuşulan gün ve saatinde eşyalarım hiç zarar görmeden teslim aldım. Çalışanların samimiyeti ve eşyalara zarar vermemek için ellerinden geleni yapmaları harikaydı. Çok memnun kaldım teşekkürler.",
        gender: "female",
        date: "1 Haziran 2023",
        score: 4,
      },
      {
        name: "Sezer Akbulut",
        description:
          "Gayet güzel bir taşma oldu benim için. Açıkçası bu kadar zor bir işin bu kadar özenli yapılması son derece güzel. Ben çok memnun kaldım.",
        gender: "male",
        date: "6 Ocak 2023",
        score: 5,
      },
      {
        name: "Mehmet Bayrıl",
        description:
          "Bir daha taşınırsam kime taşıtacağımı artık biliyorum. Güler yüzlü ve işinin ehli ustalar. Sorunsuz bir taşınma oldu. Kendilerine teşekkür ediyorum. Kesinlikle herkese tavsiye ediyorum.",
        gender: "male",
        date: "28 Temmuz 2023",
        score: 4,
      },
    ]);
    set(ref(database, "PraticalTransportationInfos"), [
      {
        name: "Paketlenmemesi Gereken Eşyalar",
        slug: "paketlenmemesi-gereken-esyalar",
        description:
          "Taşınma gününden önce paketlenmesi gereken eşyalar hakkında daha detaylı bilgi almak için tıklayınız.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/uploads/2021/01/blog-6.jpg",
      },
      {
        name: "Tasarruf Sağlayacak Fikirler",
        slug: "tasarruf-saglayacak-fikirler",
        description:
          "Taşınma sırasında tasarruf sağlayacak bilgiler almak için tıklayınız",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/uploads/2021/01/blog-5.jpg",
      },
      {
        name: "En Çok Gerekli Aletler",
        slug: "en-cok-gerekli-aletler",
        description:
          "Taşınma sırasında sizin işinize çok gerekli olacak aletler hakkında bilgi almak için tıklayınız.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/uploads/2021/01/blog-4.jpg",
      },
      {
        name: "Kırılacak Eşyalar Nasıl Paketlenir?",
        slug: "kirilacak-esyalar-nasil-paketlenir",
        description:
          "Kırılacak eşyalara zarar gelmeden nakil etmenin yöntemlerini öğrenmek için tıklayınız.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/uploads/2021/01/blog-3.jpg",
      },
      {
        name: "Kırılacak Eşyalar Nasıl Paketlenir?",
        slug: "kirilacak-esyalar-nasil-paketlenir",
        description:
          "Kırılacak eşyalara zarar gelmeden nakil etmenin yöntemlerini öğrenmek için tıklayınız.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/uploads/2021/01/blog-2.jpg",
      },
      {
        name: "Kırılacak Eşyalar Nasıl Paketlenir?",
        slug: "kirilacak-esyalar-nasil-paketlenir",
        description:
          "Kırılacak eşyalara zarar gelmeden nakil etmenin yöntemlerini öğrenmek için tıklayınız.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/uploads/2021/01/blog-1.jpg",
      },
    ]);
    set(ref(database, "ilcehizmet"), [
      {
        name: "Develi Evden Eve Nakliyat",
        slug: "develi-evden-eve-nakliyat",
      },
      {
        name: "Yahyalı Evden Eve Nakliyat",
        slug: "yahyali-evden-eve-nakliyat",
      },
      {
        name: "Melikgazi Evden Eve Nakliyat",
        slug: "melikgazi-evden-eve-nakliyat",
      },
      {
        name: "Kocasinan Evden Eve Nakliyat",
        slug: "kocasinan-evden-eve-nakliyat",
      },
      {
        name: "Talas Evden Eve Nakliyat",
        slug: "talas-evden-eve-nakliyat",
      },
      {
        name: "İncesu Evden Eve Nakliyat",
        slug: "incesu-evden-eve-nakliyat",
      },
      {
        name: "Tomarza Evden Eve Nakliyat",
        slug: "tomarza-evden-eve-nakliyat",
      },
      {
        name: "Bünyan Evden Eve Nakliyat",
        slug: "bunyan-evden-eve-nakliyat",
      },
      {
        name: "Pınarbaşı Evden Eve Nakliyat",
        slug: "pinarbasi-evden-eve-nakliyat",
      },
    ]);
  };
  useEffect(() => {
    fetchDatas();
    setDatas();
  }, []);

  return (
    <section>
      <div className="text-center space-y-4">
        <h1 className="text-4xl">Profesyonel Paketleme!</h1>
        <p className="text-lg w-full lg:w-3/4 xl:w-3/4 2xl:w-3/4 mx-auto">
          Taşınacak eşyalarınızı en iyi ambalaj ürünleri ile profesyonelce
          paketliyoruz.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-3 my-3">
        {data?.map((card, index) => (
          <div
            key={index}
            className="w-full rounded shadow-lg bg-gray-800 flex text-white my-3"
          >
            <img
              src={card.imageUrl}
              alt="image"
              className="h-full object-cover"
            />
            <div className="p-4 w-full">
              <h2 className="font-bold text-base mb-2">{card.name}</h2>
              <p className="text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalPackaging;
