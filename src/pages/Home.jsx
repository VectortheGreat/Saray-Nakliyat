import IlceHizmetleri from "../components/PageComponents/HomeComponents/IlceHizmetleri";
import Services from "../components/PageComponents/HomeComponents/Services/Services";
import Slide from "../components/PageComponents/HomeComponents/Slide/Slide";
import UserReviews from "../components/PageComponents/HomeComponents/UserReview/UserReviews";
import PraticalTransportationInfos from "../components/PageComponents/HomeComponents/PraticalTransportationInfos";
const Home = () => {
  return (
    <div className=" text-white space-y-5 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Slide></Slide>
        <Services></Services>
      </div>
      <hr className="border-t border-gray-300 my-5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <UserReviews></UserReviews>
      </div>
      <hr className="border-t border-gray-300 my-5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PraticalTransportationInfos></PraticalTransportationInfos>
      </div>
      <hr className="border-t border-gray-300 my-5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <IlceHizmetleri></IlceHizmetleri>
      </div>
    </div>
  );
};

export default Home;
