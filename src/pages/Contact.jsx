import ContactComp from "../components/PageComponents/ContactComponents/ContactComp";

const Contact = () => {
  return (
    <>
      <h1 className="text-center text-2xl bg-slate-200 p-2">İletişim</h1>
      <div className="container mx-auto text-white space-y-5">
        <ContactComp></ContactComp>
      </div>
    </>
  );
};

export default Contact;
