import { MdLocationPin } from "react-icons/md";

const IlceHizmetleri = () => {
  const ilceler = [
    {
      name: "Develi",
      url: "https://www.youtube.com",
    },
    {
      name: "Yahyalı",
      url: "https://www.youtube.com",
    },
    {
      name: "Melikgazi",
      url: "https://www.youtube.com",
    },
    {
      name: "Kocasinan",
      url: "https://www.youtube.com",
    },
    {
      name: "Talas",
      url: "https://www.youtube.com",
    },
  ];

  return (
    <article className="flex justify-between">
      <img
        src="https://gungornakliyat.com/wp-content/uploads/2022/03/ambarlilimaninakliye.jpg"
        alt=""
        className="h-52 mx-auto"
      />
      <div className="space-y-3">
        <h1 className="text-center text-3xl">
          Bütün ilçelerde hizmetinizdeyiz
        </h1>
        <p>
          Şehrimizde bulunan bütün ilçelere şehir içi nakliye hizmeti
          sunmaktayız. Ayrıca 81 ilimize şehirler arası nakliye hizmeti
          sunmaktayız.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {ilceler.map((ilce, index) => (
            <a
              key={index}
              href={ilce.url}
              className="flex items-center hover:text-rose-600"
            >
              <MdLocationPin />
              <span>{ilce.name} Evden Eve Nakliyat</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default IlceHizmetleri;