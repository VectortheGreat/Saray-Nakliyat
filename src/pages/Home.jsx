import IlceHizmetleri from "../components/PageComponents/HomeComponents/IlceHizmetleri";
import Services from "../components/PageComponents/HomeComponents/Services/Services";
import Slide from "../components/PageComponents/HomeComponents/Slide";
import UserReviews from "../components/PageComponents/HomeComponents/UserReview/UserReviews";
import PraticalTransportationInfos from "../components/PageComponents/HomeComponents/PraticalTransportationInfos";
const Home = () => {
  return (
    <div className="container mx-auto text-white space-y-5">
      <Slide></Slide>
      <Services></Services>
      <hr></hr>
      <UserReviews></UserReviews>
      <hr></hr>
      <PraticalTransportationInfos></PraticalTransportationInfos>
      <hr></hr>
      <IlceHizmetleri></IlceHizmetleri>
    </div>
  );
};

export default Home;
