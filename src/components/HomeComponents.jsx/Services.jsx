import ContactUs from "./Services/ContactUs";
import ProfessionalPackaging from "./Services/ProfessionalPackaging";
import ProfessionalService from "./Services/ProfessionalService";
import UserReviews from "./Services/UserReviews";
import WorkingMethods from "./Services/WorkingMethods";

const Services = () => {
  return (
    <div className="space-y-5">
      <WorkingMethods></WorkingMethods>
      <hr></hr>
      <ContactUs></ContactUs>
      <hr></hr>
      <ProfessionalService></ProfessionalService>
      <hr></hr>
      <ProfessionalPackaging></ProfessionalPackaging>
      <hr></hr>
      <UserReviews></UserReviews>
    </div>
  );
};

export default Services;
