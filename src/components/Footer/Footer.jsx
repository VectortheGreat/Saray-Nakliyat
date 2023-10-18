import {
  BiLogoFacebookSquare,
  BiLogoTwitter,
  BiLogoInstagramAlt,
} from "react-icons/bi";
const Footer = () => {
  const cards = [
    {
      name: "Evden Eve Nakliyat",
      description:
        "Yılların vermiş olduğu tecrübemiz ile evinizi profesyonelce sigortalı olara taşıyoruz.",
      imageUrl:
        "https://www.a1nakliyat.com/wp-content/uploads/2022/02/evden-eve-nakliyat-1024x682.jpg",
      link: "https://www.youtube.com",
    },
    {
      name: "Ofis Taşıma",
      description:
        "Ofis ve büro taşımacılığında tüm eşyalarınızı özenle paketleyip sorunsuz hizmet sunuyoruz.",
      imageUrl:
        "https://www.a1nakliyat.com/wp-content/uploads/2022/02/evden-eve-nakliyat-1024x682.jpg",
      link: "https://www.youtube.com",
    },
    {
      name: "Asansörlü Nakliyat",
      description:
        "Katınız kaçınca kat olursa olsun, son teknoloji modüler asansörümüz ile asansörlü evinizi taşıyoruz.",
      imageUrl:
        "https://www.a1nakliyat.com/wp-content/uploads/2022/02/evden-eve-nakliyat-1024x682.jpg",
      link: "https://www.youtube.com",
    },
    {
      name: "Parça Eşya Taşıma",
      description:
        "Taşınacak bir kaç parça eşyanız mı var ? En uygun fiyatlara, zamanında teslimat garantisi ile hizmet alın.",
      imageUrl:
        "https://www.a1nakliyat.com/wp-content/uploads/2022/02/evden-eve-nakliyat-1024x682.jpg",
      link: "https://www.youtube.com",
    },
    {
      name: "Eşya Depolama",
      description:
        "Eşyalarınızı güvende tutacak yer mi arıyorsunuz ? Sigortalı 7/24 kameralı depolarımız hizmetinize hazır.",
      imageUrl:
        "https://www.a1nakliyat.com/wp-content/uploads/2022/02/evden-eve-nakliyat-1024x682.jpg",
      link: "https://www.youtube.com",
    },
    {
      name: "Şehir İçi Nakliye",
      description:
        "Taşıma türü ne olursa olsun, şehir içi taşımacılık isteğinize profesyonelce nakliye hizmeti veriyoruz.",
      imageUrl:
        "https://www.a1nakliyat.com/wp-content/uploads/2022/02/evden-eve-nakliyat-1024x682.jpg",
      link: "https://www.youtube.com",
    },
    {
      name: "Şehirler Arası Nakliye",
      description:
        "Şehirler arası nakliyede garantili, zamanında teslimat ve uygun fiyat ile hizmet sunuyoruz.",
      imageUrl:
        "https://www.a1nakliyat.com/wp-content/uploads/2022/02/evden-eve-nakliyat-1024x682.jpg",
      link: "https://www.youtube.com",
    },
    {
      name: "Ücretsiz Ekspertiz",
      description:
        "Taşınacak eşyalarınızı yerinde inceleyip, en iyi hizmeti vermek için ücretsiz ekspertiz hizmetimi ile kapınızdayız.",
      imageUrl:
        "https://www.a1nakliyat.com/wp-content/uploads/2022/02/evden-eve-nakliyat-1024x682.jpg",
      link: "https://www.youtube.com",
    },
  ];
  return (
    <footer className="bg-gray-800 text-white p-8 flex flex-wrap justify-center mt-3">
      <div className="w-full md:w-1/4 lg:w-1/5 text-center">
        <img
          src="https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/logo.png"
          alt="Saray Nakliyat Logo"
          className="p-2 cursor-pointer"
        />
        <p className="text-sm">
          Tek bir araçla çıktığımız bu yolda ilkelerimiz ve prensiplerimiz
          sayesine Türkiye’nin en büyük sermayeli sayılı nakliye firmaları
          arasında olmanın gururunu yaşıyoruz. Şu ana kadar gerçekleştirdiğimiz
          hiç bir işimizde müşterilerimizi yarı yolda bırakmadık. Söz verdiğimiz
          gibi tam zamanlı ve kusursuz hizmet sunduk.
        </p>
      </div>
      <div className="w-full md:w-1/4 lg:w-1/5 text-center">
        <h1 className="text-xl font-bold text-pink-600">Hizmetlerimiz</h1>
        <ul className="text-m">
          {cards?.map((x, index) => (
            <li key={index}>
              <a href={x.link}>{x.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-1/4 lg:w-1/5 text-center">
        <h1 className="text-xl font-bold text-pink-600">Bağlantılar</h1>
        <ul className="text-m">
          <li>
            <a href="/">Anasayfa</a>
          </li>
          <li>
            <a href="/hakkimizda">Hakkımızda</a>
          </li>
          <li>
            <a href="/hizmetlerimiz">Hizmetlerimiz</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/iletisim">İletişim</a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 lg:w-1/5 text-center">
        <h1 className="text-xl font-bold text-pink-600">İletişim</h1>
        <ul className="text-m ">
          <li>
            <a href="/adres">Adres</a>
          </li>
          <li>
            <a href="/eposta">E-Posta</a>
          </li>
          <li>
            <a href="/telefon">Telefon</a>
          </li>
        </ul>
        <div className="text-xl font-bold">
          <h1 className="text-pink-600">Sosyal Medya Hesaplarımız: </h1>
          <div className="flex items-center justify-center space-x-2">
            <BiLogoFacebookSquare className="text-blue-500 cursor-pointer hover:text-pink-600" />
            <BiLogoTwitter className="text-blue-500 cursor-pointer hover:text-pink-600" />
            <BiLogoInstagramAlt className="text-blue-500 cursor-pointer hover:text-pink-600" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
