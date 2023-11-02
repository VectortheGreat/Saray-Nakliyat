import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDatas } from "../../../config/config";
import { useEffect } from "react";

const PraticalTransportationInfos = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  async function fetchDatas() {
    try {
      const datas = await getDatas("PraticalTransportationInfos");
      setData(datas);
    } catch (error) {
      console.error("Mesajları alma hatası:", error);
    }
  }
  useEffect(() => {
    fetchDatas();
  }, []);
  return (
    <article>
      <div className="text-center space-y-4">
        <h1 className="text-4xl">Pratik Taşınma Bilgileri</h1>
        <p className="text-lg w-full lg:w-3/4 xl:w-3/4 2xl:w-3/4 mx-auto">
          Ev yada ofisinizin taşınmasına hazır mısınız? Nakliye uzmanlarınca
          hazırlanan yazılarımızı inceleyerek taşınma öncesi tecrübe sahibi
          olun.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-3 my-3">
        {data?.map((x, index) => (
          <div
            key={index}
            className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-gray-800 text-center"
          >
            <img
              src={x.imageUrl}
              alt="image"
              className="w-full"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
              onClick={() => {
                navigate(`/`);
              }}
            />
            <div
              className="px-6 py-4 cursor-pointer"
              onClick={() => {
                navigate(`/blog/${x.slug}`);
              }}
            >
              <div className="font-bold text-xl mb-2">{x.name}</div>
              <p className="text-base">{x.description}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default PraticalTransportationInfos;
