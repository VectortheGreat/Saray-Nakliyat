import IlceHizmetleri from "../components/HomeComponents.jsx/IlceHizmetleri";
import PraticalTransportationInfos from "../components/HomeComponents.jsx/PraticalTransportationInfos";
import Services from "../components/HomeComponents.jsx/Services/Services";
import Slide from "../components/HomeComponents.jsx/Slide";
import UserReviews from "../components/HomeComponents.jsx/UserReview/UserReviews";
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
