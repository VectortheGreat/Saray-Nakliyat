import AboutComp from "../components/PageComponents/AboutComponents/AboutComp";

const About = () => {
  return (
    <>
      <h1 className="text-center text-2xl bg-slate-200 p-2">Hakkımızda</h1>
      <div className="container mx-auto text-white space-y-5">
        <AboutComp></AboutComp>
      </div>
    </>
  );
};

export default About;
