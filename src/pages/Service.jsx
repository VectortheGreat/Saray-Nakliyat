import ServiceComp from "../components/PageComponents/ServiceComponents/ServiceComp";

const Service = () => {
  return (
    <>
      <h1 className="text-center text-2xl bg-slate-200 p-2">Hizmetlerimiz</h1>
      <div className="container mx-auto text-white space-y-5">
        <ServiceComp></ServiceComp>
      </div>
    </>
  );
};

export default Service;
