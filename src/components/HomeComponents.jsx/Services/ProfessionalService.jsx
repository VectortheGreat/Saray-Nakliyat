const ProfessionalService = () => {
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

  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const cardGroups = chunkArray(cards, 2);
  return (
    <section>
      <div className="text-center space-y-4">
        <h1 className="text-4xl">Profesyonel Hizmet!</h1>
        <p className="text-lg w-3/4 mx-auto">
          İster eviniz ister ofisiniz taşınsın, firmamız tüm taşımacılık
          hizmetlerinde en iyi tecrübeye ve donanıma sahiptir.
        </p>
      </div>
      {cardGroups.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className="flex justify-center gap-4 cursor-pointer"
        >
          {group.map((card, cardIndex) => (
            <div
              key={cardIndex}
              className="w-2/3 rounded overflow-hidden shadow-lg bg-gray-800 flex text-white my-3"
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
      ))}
    </section>
  );
};

export default ProfessionalService;
