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
      name: "Ofis Adresimiz",
      description:
        "Ofisimizi ziyaret ederek yüz yüze görüşme sağlayabilirsiniz.",
      buttonName: "Harita Konumu",
      buttonLink: "https://www.youtube.com",
      imageUrl:
        "https://www.a1nakliyat.com/wp-content/uploads/2022/02/evden-eve-nakliyat-1024x682.jpg",
    },
  ];

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
        {cards?.map((x, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
          >
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-center">
              <img
                src={x.imageUrl}
                alt="image"
                className="w-full h-40 object-cover"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactUs;
