import { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { getDatas } from "../../../config/config";
import { useEffect } from "react";

const IlceHizmetleri = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  async function fetchDatas() {
    try {
      const datas = await getDatas("ilcehizmet");
      setData(datas);
    } catch (error) {
      console.error("Mesajları alma hatası:", error);
    }
  }
  useEffect(() => {
    fetchDatas();
  }, []);

  return (
    <article className="md:flex justify-between md:space-y-0 space-y-3">
      <img
        src="https://gungornakliyat.com/wp-content/uploads/2022/03/ambarlilimaninakliye.jpg"
        alt=""
        className="h-52 mx-auto md:mr-4"
      />
      <div className="space-y-3">
        <h1 className="text-center text-3xl">
          Bütün ilçelerde hizmetinizdeyiz
        </h1>
        <p>
          Şehrimizde bulunan bütün ilçelere şehir içi nakliye hizmeti
          sunmaktayız. Ayrıca 81 ilimize şehirler arası nakliye hizmeti
          sunmaktayız.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data?.map((ilce, index) => (
            <button
              key={index}
              className="flex items-center hover:text-rose-600 cursor-pointer"
              onClick={() => navigate(`/${ilce.slug}`)}
            >
              <MdLocationPin />
              <span>{ilce.name}</span>
            </button>
          ))}
        </div>
      </div>
    </article>
  );
};

export default IlceHizmetleri;
