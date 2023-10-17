const PraticalTransportationInfos = () => {
  const cards = [
    {
      name: "Paketlenmemesi Gereken Eşyalar",
      description:
        "Taşınma gününden önce paketlenmesi gereken eşyalar hakkında daha detaylı bilgi almak için tıklayınız.",
      imageUrl:
        "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/paketleme/paket-1.png",
    },
    {
      name: "Tasarruf Sağlayacak Fikirler",
      description:
        "Taşınma sırasında tasarruf sağlayacak bilgiler almak için tıklayınız",
      imageUrl:
        "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/paketleme/paket-2.png",
    },
    {
      name: "En Çok Gerekli Aletler",
      description:
        "Taşınma sırasında sizin işinize çok gerekli olacak aletler hakkında bilgi almak için tıklayınız.",
      imageUrl:
        "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/paketleme/paket-3.png",
    },
    {
      name: "Kırılacak Eşyalar Nasıl Paketlenir?",
      description:
        "Kırılacak eşyalara zarar gelmeden nakil etmenin yöntemlerini öğrenmek için tıklayınız.",
      imageUrl:
        "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/paketleme/paket-4.png",
    },
    {
      name: "Kırılacak Eşyalar Nasıl Paketlenir?",
      description:
        "Kırılacak eşyalara zarar gelmeden nakil etmenin yöntemlerini öğrenmek için tıklayınız.",
      imageUrl:
        "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/paketleme/paket-4.png",
    },
    {
      name: "Kırılacak Eşyalar Nasıl Paketlenir?",
      description:
        "Kırılacak eşyalara zarar gelmeden nakil etmenin yöntemlerini öğrenmek için tıklayınız.",
      imageUrl:
        "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/paketleme/paket-4.png",
    },
  ];
  return (
    <article>
      <div className="text-center space-y-4">
        <h1 className="text-4xl">Pratik Taşınma Bilgileri</h1>
        <p className="text-lg w-3/4 mx-auto">
          Ev yada ofisinizin taşınmasına hazır mısınız? Nakliye uzmanlarınca
          hazırlanan yazılarımızı inceleyerek taşınma öncesi tecrübe sahibi
          olun.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 my-3">
        {cards.map((x, index) => (
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
            <div className="px-6 py-4">
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
