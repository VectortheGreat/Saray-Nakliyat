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
      date: "6 Şubat 2023",
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
        <h1 className="text-4xl">Müşterimizin Yorumları</h1>
        <p className="text-lg w-3/4 mx-auto">
          Firmamızı tercih eden insanların yapmış olduğu gerçek yorumları
          inceleyin.
        </p>
      </div>
      {cardGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="flex justify-center gap-4">
          {group.map((card, cardIndex) => (
            <UserReviewCard card={card} key={cardIndex}></UserReviewCard>
          ))}
        </div>
      ))}
    </section>
  );
};

export default UserReviews;
