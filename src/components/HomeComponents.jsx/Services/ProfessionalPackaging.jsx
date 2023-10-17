const ProfessionalPackaging = () => {
  const cards = [
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
  ];
  return (
    <section>
      <div className="text-center space-y-4">
        <h1 className="text-4xl">Profesyonel Paketleme!</h1>
        <p className="text-lg w-3/4 mx-auto">
          Taşınacak eşyalarınızı en iyi ambalaj ürünleri ile profesyonelce
          paketliyoruz.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 my-3">
        {cards.map((card, index) => (
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
            <div className="p-4 w-1/2">
              <div className="font-bold text-base mb-2">{card.name}</div>
              <p className="text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalPackaging;
