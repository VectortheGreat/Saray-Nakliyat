const ContactUs = () => {
  const cards = [
    {
      name: "Whatsapp Destek",
      description:
        "WhatsApp üzerinden firmamıza eşya resmi göndererek anında fiyat alabilirsiniz.",
      buttonName: "0533 333 33 33",
      buttonLink: "https://www.youtube.com",
      imageUrl:
        "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1490000/whatsapp-aa-1490025.jpg",
    },
    {
      name: "Teklif Formu",
      description:
        "Teklif formunu doldurarak firmamızdan hızlıca fiyat alabilirsiniz.",
      buttonName: "Teklif Formu",
      buttonLink: "https://www.youtube.com",
      imageUrl:
        "https://images.hindustantimes.com/tech/rf/image_size_960x540/HT/p2/2017/02/28/Pictures/_8fcc5b2c-fd95-11e6-a3af-7fa15638f741.jpg",
    },
    {
      name: "Ofis Aderesimiz",
      description:
        "Ofisimizi ziyaret ederek yüz yüze görüşme sağlayabilirsiniz.",
      buttonName: "Harita Konumu",
      buttonLink: "https://www.youtube.com",
      imageUrl:
        "https://www.a1nakliyat.com/wp-content/uploads/2022/02/evden-eve-nakliyat-1024x682.jpg",
    },
  ];

  return (
    <section>
      <div className="text-center space-y-4">
        <h1 className="text-4xl">Bize Ulaşmanın Hızlı Yolları!</h1>
        <p className="text-lg w-3/4 mx-auto">
          Firmamıza Whatsapp üzerinden eşya resmi gönderebilir, Teklif formu ile
          hızlı fiyat alabilir, Ofimize gelerek bir kahvemizi içebilirsiniz.
        </p>
      </div>
      <div className="flex justify-center gap-4">
        {cards?.map((x, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-center"
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
            <div className="px-6 py-4">
              <a
                href={x.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 text-lg"
              >
                {x.buttonName}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactUs;
