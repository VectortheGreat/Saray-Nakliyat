import { useState } from "react";
import { getDatas } from "../../../../config/config";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  async function fetchDatas() {
    try {
      const datas = await getDatas("ContactUs");
      setData(datas);
    } catch (error) {
      console.error("Mesajları alma hatası:", error);
    }
  }
  useEffect(() => {
    fetchDatas();
  }, []);

  return (
    <section className="py-10">
      <div className="text-center space-y-4">
        <h1 className="text-4xl ">Bize Ulaşmanın Hızlı Yolları!</h1>
        <p className="text-lg w-full lg:w-3/4 xl:w-3/4 2xl:w-3/4 mx-auto">
          Firmamıza Whatsapp üzerinden eşya resmi gönderebilir, Teklif formu ile
          hızlı fiyat alabilir, Ofisimize gelerek bir kahvemizi içebilirsiniz.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {data?.map((x, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
          >
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-center flex flex-col h-full">
              <img
                src={x.imageUrl}
                alt="image"
                className="w-full h-40 object-cover"
              />
              <div className="px-6 py-4 flex-1">
                <div className="font-bold text-xl mb-2">{x.name}</div>
                <p className="text-base">{x.description}</p>
              </div>
              <div className="px-6 py-4">
                {index === 0 || index === 1 ? (
                  <a
                    href={x.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 text-lg"
                  >
                    {x.buttonName}
                  </a>
                ) : (
                  <button
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 text-lg"
                    onClick={() => navigate(x.buttonLink)}
                  >
                    {x.buttonName}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactUs;
