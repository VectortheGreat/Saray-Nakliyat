import UserReviewCard from "./UserReviewCard";

const UserReviews = () => {
  const cards = [
    {
      name: "Yunus Güneş",
      description:
        "Merhabalar, Söz verdikleri tarihte taşıdılar. Taşınma sırasında sürekli iletişim halindeydik. Eşyalarım aynı gün içinde taşınacağı bölgeye ulaştı. Yine taşınma işlemim olursa aynı firmayı değerlendiriyor olurdum. Teşekkürler, İyi Çalışmalar.",
      gender: "male",
      date: "10 Ekim 2023",
      score: 5,
    },
    {
      name: "Büşra Yazıcı",
      description:
        "Konuşulan gün ve saatinde eşyalarım hiç zarar görmeden teslim aldım. Çalışanların samimiyeti ve eşyalara zarar vermemek için ellerinden geleni yapmaları harikaydı. Çok memnun kaldım teşekkürler.",
      gender: "female",
      date: "1 Haziran 2023",
      score: 4,
    },
    {
      name: "Sezer Akbulut",
      description:
        "Gayet güzel bir taşma oldu benim için. Açıkçası bu kadar zor bir işin bu kadar özenli yapılması son derece güzel. Ben çok memnun kaldım.",
      gender: "male",
      date: "6 Ocak 2023",
      score: 5,
    },
    {
      name: "Mehmet Bayrıl",
      description:
        "Bir daha taşınırsam kime taşıtacağımı artık biliyorum. Güler yüzlü ve işinin ehli ustalar. Sorunsuz bir taşınma oldu. Kendilerine teşekkür ediyorum. Kesinlikle herkese tavsiye ediyorum.",
      gender: "male",
      date: "28 Temmuz 2023",
      score: 4,
    },
  ];
  return (
    <section>
      <div className="text-center space-y-4">
        <h1 className="text-4xl">Müşterimizin Yorumları</h1>
        <p className="text-lg w-3/4 mx-auto">
          Firmamızı tercih eden insanların yapmış olduğu gerçek yorumları
          inceleyin.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 my-3">
        {cards?.map((card, index) => (
          <UserReviewCard card={card} key={index}></UserReviewCard>
        ))}
      </div>
    </section>
  );
};

export default UserReviews;
