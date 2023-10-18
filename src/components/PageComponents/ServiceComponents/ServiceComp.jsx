const ServiceComp = () => {
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
    <section className="space-y-3 mt-3">
      <article className="flex space-x-3">
        <img
          src="https://gungornakliyat.com/wp-content/uploads/2022/03/ambarlilimaninakliye.jpg"
          alt="resim"
        />
        <div className="space-y-3">
          <h1 className="text-3xl">Taşımacılıkta Çözüm Ortağınız !</h1>
          <p>
            Firmamız sizlere her türlü taşımacılık hizmetini verebilecek tecrübe
            ve donanıma sahiptir. Firmamızın vermiş olduğu hizmetler hakkında
            detaylı bilgi için aşağıda bulunan hizmetlerden birine tıklayınız.
          </p>
          <h1 className="text-3xl">Bütün Hizmetler Garanti Altında !</h1>
          <ul className="list-disc ml-4">
            <li>Taşıma Öncesi Sözleşme</li>
            <li>Nakliye Sigortası</li>
            <li>İşinde Uzman Kadro</li>
            <li>Mobilya Söküm / Kurulum</li>
            <li>Profesyonel Paketleme</li>
          </ul>
        </div>
      </article>

      <div className="grid grid-cols-2 gap-3 my-3">
        {cards?.map((card, index) => (
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

export default ServiceComp;
