import ContactUs from "./ContactUs";
import ProfessionalPackaging from "./ProfessionalPackaging";
import ProfessionalService from "./ProfessionalService";
import WorkingMethods from "./WorkingMethods";

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
    </div>
  );
};

export default Services;
