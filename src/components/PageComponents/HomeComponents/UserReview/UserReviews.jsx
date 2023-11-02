import { useState } from "react";
import UserReviewCard from "./UserReviewCard";
import { getDatas } from "../../../../config/config";
import { useEffect } from "react";

const UserReviews = () => {
  const [data, setData] = useState(null);
  async function fetchDatas() {
    try {
      const datas = await getDatas("UserReviews");
      setData(datas);
    } catch (error) {
      console.error("Mesajları alma hatası:", error);
    }
  }
  useEffect(() => {
    fetchDatas();
  }, []);
  return (
    <section>
      <div className="text-center space-y-4">
        <h1 className="text-4xl">Müşterimizin Yorumları</h1>
        <p className="text-lg w-3/4 mx-auto">
          Firmamızı tercih eden insanların yapmış olduğu gerçek yorumları
          inceleyin.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-3 my-3">
        {data?.map((card, index) => (
          <UserReviewCard card={card} key={index}></UserReviewCard>
        ))}
      </div>
    </section>
  );
};

export default UserReviews;
