/* eslint-disable react/no-unescaped-entities */
const AboutComp = () => {
  return (
    <section className="space-y-3 mt-3 px-5">
      <article className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
        <div className="space-y-3">
          <h1 className="text-3xl">Biz Kimiz?</h1>
          <p>
            Kuruluşu 2000’li yıllara dayanan firmamız, "Saray Evden Eve
            Nakliyat" olarak faaliyete geçtik. Bu sektörde sizler için
            çalışmakta olan, yeniliklere açık, disiplinle tam zamanlı olarak
            çalışma, kaliteli hizmet, müşteri memnuniyetini prensip edinmiş bir
            aile şirketiyiz.
          </p>
          <p>
            Tek bir araçla çıktığımız bu yolda ilkelerimiz ve prensiplerimiz
            sayesine Türkiye’nin en büyük sermayeli sayılı nakliye firmaları
            arasında olmanın gururunu yaşıyoruz. Şu ana kadar
            gerçekleştirdiğimiz hiç bir işimizde müşterilerimizi yarı yolda
            bırakmadık. Söz verdiğimiz gibi tam zamanlı ve kusursuz hizmet
            sunduk.
          </p>
          <p>
            Bu güne kadar gelebilmemiz deki en büyük destekçimiz olan ve bu
            aileye dahil olan tüm müşterilerimize borçluyuz.
          </p>
          <p>Daha iyisi için daha çok çalıştık ve çalışmaya devam edeceğiz.</p>
        </div>
        <img
          src="https://scontent.fasr2-1.fna.fbcdn.net/v/t31.18172-8/15732096_1031556783657599_1509853494409958401_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=oiogYPAnXZoAX-lgNA1&_nc_ht=scontent.fasr2-1.fna&oh=00_AfBnJ310uUVykdnoJxaorMDj6PSXUqxWpDzFNeqEB3F5Qg&oe=656B00F6"
          alt="resim"
          className="w-full md:w-1/2 rounded-full"
        />
      </article>
      <hr className="my-3" />
      <article className="flex flex-col-reverse md:flex-row space-y-3 md:space-y-0 md:space-x-3">
        <img
          src="https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/hakkimizda/hakkimizda-2.png"
          alt="resim"
          className="w-full md:w-1/2"
        />
        <div className="space-y-3">
          <h1 className="text-3xl">Size Garanti Veriyoruz!</h1>
          <p>
            Firmamızı müşterilerine daima memnuniyet garantili hizmet sunar.
            Vermiş olduğu bütün hizmetleri sözleşme ile garanti altına alır.
          </p>
          <ul className="list-disc ml-4">
            <li>Hasarsız nakliye garantisi</li>
            <li>Uzmanından monte ve demonte</li>
            <li>İşini iyi bilen uzman kadro</li>
            <li>Malınızın değerine göre sigorta</li>
            <li>Para iade garantisi</li>
            <li>Müşteri memnuniyeti garantisi</li>
            <li>Geniş kapsamlı taşıma sözleşmesi</li>
            <li>Geniş araç filosu</li>
          </ul>
        </div>
      </article>
      <hr className="my-3" />
      <article className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
        <div className="space-y-3">
          <h1 className="text-3xl">Misyonumuz / Vizyonumuz</h1>
          <p>
            Saray Nakliyat, şu ana kadar var olma misyonumuzu, müşterilerimizin
            nakliye sektöründeki ihtiyaçlarını karşılamak adına, bu alanda en
            iyi hizmeti sizlere sunabilmektir. Bununla birlikte sektördeki
            ihtiyaçları karşılamaya çalışarak misyonumuz gereği nakliye
            sektörüne sürekli olarak yeni fikirler ve düşünceler ile katkı
            sağlamaktayız.
          </p>
          <p>
            Sahip olduğumuz vizyonumuz sayesinde kendimizi sürekli geliştirmiş
            ve hizmet verdiğimiz alanlarda ekibimizi ve ekipmanlarımızı
            geliştirmekteyiz. Bu bağlamda Asansörlü taşımacılık, Stand
            taşımacılığı, Nakliyat depolama hizmetleri de vererek hizmet ağımızı
            geliştirdik.
          </p>
          <p>
            Personelimizin sürekli eğitimine ve gelişimine de önem vererek sahip
            olduğumuz vizyonumuz sayesinde onlara da katkı sağlamaktayız.
          </p>
          <p>
            Tüm bu amaçlarımızı yerine getirerek müşterilerimiz ile birlikte
            büyümemizi devam ettirmek en büyük arzumuzdur.
          </p>
        </div>
        <img
          src="https://www.a1nakliyat.com/wp-content/uploads/2022/02/evden-eve-nakliyat-1024x682.jpg"
          alt="resim"
          className="w-full md:w-1/2 rounded-full"
        />
      </article>
    </section>
  );
};

export default AboutComp;
