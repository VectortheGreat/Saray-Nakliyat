import { useState } from "react";
import {
  BiLogoFacebookSquare,
  BiLogoTwitter,
  BiLogoInstagramAlt,
} from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { getDatas } from "../../config/config";
import { useEffect } from "react";
const Footer = () => {
  const [serviceData, setServiceData] = useState(null);
  const [contactData, setContactData] = useState(null);
  const navigate = useNavigate();
  async function fetchDatas() {
    try {
      const servicedatas = await getDatas("ProfessionalService");
      const contactDatas = await getDatas("ContactUs");
      setServiceData(servicedatas);
      setContactData(contactDatas);
    } catch (error) {
      console.error("Mesajları alma hatası:", error);
    }
  }
  useEffect(() => {
    fetchDatas();
  }, []);
  return (
    <footer className="bg-gray-800 text-white p-8 flex flex-wrap justify-center mt-3">
      <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 text-center mb-6">
        <img
          src="https://i.imgur.com/F18rZYw.png"
          alt="Saray Nakliyat Logo"
          className="p-2 cursor-pointer mx-auto"
          onClick={() => {
            navigate("/");
          }}
        />
        <p className="text-sm text-center">
          Tek bir araçla çıktığımız bu yolda ilkelerimiz ve prensiplerimiz
          sayesine Türkiye’nin en büyük sermayeli sayılı nakliye firmaları
          arasında olmanın gururunu yaşıyoruz. Şu ana kadar gerçekleştirdiğimiz
          hiç bir işimizde müşterilerimizi yarı yolda bırakmadık. Söz verdiğimiz
          gibi tam zamanlı ve kusursuz hizmet sunduk.
        </p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 text-center mb-6">
        <h1 className="text-xl font-bold text-pink-600">Hizmetlerimiz</h1>
        <ul className="text-m">
          {serviceData?.map((x, index) => (
            <li key={index}>
              <button
                className="hover:text-pink-600"
                onClick={() => navigate(`/${x.slug}`)}
              >
                {x.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 text-center mb-6">
        <h1 className="text-xl font-bold text-pink-600">Bağlantılar</h1>
        <ul className="text-m">
          <li>
            <a className="hover:text-pink-600" href="/">
              Anasayfa
            </a>
          </li>
          <li>
            <a className="hover:text-pink-600" href="/hakkimizda">
              Hakkımızda
            </a>
          </li>
          <li>
            <a className="hover:text-pink-600" href="/hizmetlerimiz">
              Hizmetlerimiz
            </a>
          </li>
          <li>
            <a className="hover:text-pink-600" href="/blog">
              Blog
            </a>
          </li>
          <li>
            <a className="hover:text-pink-600" href="/iletisim">
              İletişim
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 text-center">
        <h1 className="text-xl font-bold text-pink-600">İletişim</h1>
        <ul className="text-m">
          {contactData?.map((x, index) => (
            <li key={index}>
              {index === 0 || index === 1 ? (
                <a
                  href={x.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-600"
                >
                  {x.shortname}
                </a>
              ) : (
                <button
                  className="hover:text-pink-600"
                  onClick={() => navigate(x.buttonLink)}
                >
                  {x.shortname}
                </button>
              )}
            </li>
          ))}
        </ul>
        <div className="text-xl font-bold">
          <h1 className="text-pink-600">Sosyal Medya Hesaplarımız: </h1>
          <div className="flex items-center justify-center space-x-2">
            <a
              href="https://www.facebook.com/profile.php?id=100065451281480&locale=nb_NO&paipv=0&eav=AfbPtUiuPgdEja7n1BZnE2euhLMrE4tWKNMPpSLPBEfmA34DQqTQFmfhghDu2n_fbY8"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoFacebookSquare className="text-blue-500 cursor-pointer hover:text-pink-600" />
            </a>
            <a
              href="https://www.instagram.com/saraynakliyat/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoInstagramAlt className="text-blue-500 cursor-pointer hover:text-pink-600" />
            </a>
            <a
              href="https://twitter.com/saraynakliyat"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoTwitter className="text-blue-500 cursor-pointer hover:text-pink-600" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
