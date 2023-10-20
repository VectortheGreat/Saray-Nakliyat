import { useNavigate } from "react-router-dom";

const PraticalTransportationInfos = () => {
  const navigate = useNavigate();
  const cards = [
    {
      name: "Paketlenmemesi Gereken Eşyalar",
      description:
        "Taşınma gününden önce paketlenmesi gereken eşyalar hakkında daha detaylı bilgi almak için tıklayınız.",
      imageUrl:
        "https://kardelennakliyat.com.tr/wp-content/uploads/2021/01/blog-6.jpg",
    },
    {
      name: "Tasarruf Sağlayacak Fikirler",
      description:
        "Taşınma sırasında tasarruf sağlayacak bilgiler almak için tıklayınız",
      imageUrl:
        "https://kardelennakliyat.com.tr/wp-content/uploads/2021/01/blog-5.jpg",
    },
    {
      name: "En Çok Gerekli Aletler",
      description:
        "Taşınma sırasında sizin işinize çok gerekli olacak aletler hakkında bilgi almak için tıklayınız.",
      imageUrl:
        "https://kardelennakliyat.com.tr/wp-content/uploads/2021/01/blog-4.jpg",
    },
    {
      name: "Kırılacak Eşyalar Nasıl Paketlenir?",
      description:
        "Kırılacak eşyalara zarar gelmeden nakil etmenin yöntemlerini öğrenmek için tıklayınız.",
      imageUrl:
        "https://kardelennakliyat.com.tr/wp-content/uploads/2021/01/blog-3.jpg",
    },
    {
      name: "Kırılacak Eşyalar Nasıl Paketlenir?",
      description:
        "Kırılacak eşyalara zarar gelmeden nakil etmenin yöntemlerini öğrenmek için tıklayınız.",
      imageUrl:
        "https://kardelennakliyat.com.tr/wp-content/uploads/2021/01/blog-2.jpg",
    },
    {
      name: "Kırılacak Eşyalar Nasıl Paketlenir?",
      description:
        "Kırılacak eşyalara zarar gelmeden nakil etmenin yöntemlerini öğrenmek için tıklayınız.",
      imageUrl:
        "https://kardelennakliyat.com.tr/wp-content/uploads/2021/01/blog-1.jpg",
    },
  ];
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
        {cards?.map((x, index) => (
          <div
            key={index}
            className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-gray-800 text-center"
          >
            <img
              src={x.imageUrl}
              alt="image"
              className="w-full"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div
              className="px-6 py-4 cursor-pointer"
              onClick={() => {
                navigate("/blog/1");
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
