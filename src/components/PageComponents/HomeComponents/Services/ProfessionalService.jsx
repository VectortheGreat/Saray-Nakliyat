import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDatas } from "../../../../config/config";

const ProfessionalService = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  async function fetchDatas() {
    try {
      const datas = await getDatas("ProfessionalService");
      setData(datas);
    } catch (error) {
      console.error("Mesajları alma hatası:", error);
    }
  }
  useEffect(() => {
    fetchDatas();
  }, []);
  return (
    <section>
      <div className="text-center space-y-4">
        <h1 className="text-4xl">Profesyonel Hizmet!</h1>
        <p className="text-lg w-full lg:w-3/4 xl:w-3/4 2xl:w-3/4 mx-auto">
          İster eviniz ister ofisiniz taşınsın, firmamız tüm taşımacılık
          hizmetlerinde en iyi tecrübeye ve donanıma sahiptir.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-3 my-3">
        {data?.map((card, index) => (
          <div
            key={index}
            className="w-full rounded overflow-hidden shadow-lg bg-gray-800 flex text-white my-3"
          >
            <img
              src={card.imageUrl}
              alt="image"
              className="w-1/2 object-cover"
              style={{ width: "100px", height: "100%", objectFit: "cover" }}
            />
            <div
              className="p-4 w-full cursor-pointer"
              onClick={() => {
                navigate(`/blog/${card.slug}`);
              }}
            >
              <h2 className="font-bold text-base mb-2">{card.name}</h2>
              <p className="text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalService;
