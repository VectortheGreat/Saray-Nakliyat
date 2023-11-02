import { FaFileSignature, FaPeopleCarry } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { LiaTruckLoadingSolid } from "react-icons/lia";

const WorkingMethods = () => {
  return (
    <section className="flex flex-wrap mt-3">
      <div className="w-full sm:w-1/2 md:w-1/4 text-center space-y-3">
        <FaFileSignature size={52} className="mx-auto text-rose-600" />
        <h3 className="text-rose-600">Sözleşme Yapıyoruz</h3>
        <p className="w-3/4 mx-auto">
          Taşıdığımız şey her ne olursa olsun karşılıklı güvence için işimizi
          daima imza altına alıyoruz.
        </p>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 text-center space-y-3 ">
        <FaPeopleCarry size={52} className="mx-auto text-rose-600" />
        <h3 className="text-rose-600">Sigortalı Taşıyoruz</h3>
        <p className="w-3/4 mx-auto">
          Şehirler arası nakliye işlerimizde eşyalarınızın değerine göre sigorta
          yaptırıyoruz.
        </p>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 text-center space-y-3">
        <AiFillSafetyCertificate size={52} className="mx-auto text-rose-600" />
        <h3 className="text-rose-600">Garanti Veriyoruz</h3>
        <p className="w-3/4 mx-auto">
          Uyguladığımız her hizmet için %100 memnuniyet garantisini veriyoruz.
          Emin olabilirsiniz.
        </p>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 text-center space-y-3">
        <LiaTruckLoadingSolid size={52} className="mx-auto text-rose-600" />
        <h3 className="text-rose-600">Bu İşte Yetkiliyiz</h3>
        <p className="w-3/4 mx-auto">
          Taşımacılık konusunda tüm yetkiye sahip olan şirketimiz anahtar
          teslimi hizmet sunar.
        </p>
      </div>
    </section>
  );
};

export default WorkingMethods;
