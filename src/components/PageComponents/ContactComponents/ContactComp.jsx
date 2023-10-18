import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
const ContactComp = () => {
  return (
    <section className="mt-3">
      <div className="text-center space-y-4">
        <h1 className="text-4xl">Bizimle İletişime Geçin!</h1>
        <p className="text-lg w-3/4 mx-auto">
          Firmamız ile hızlıca iletişime geçebilirsiniz. Dilerseniz teklif
          formunu doldurun biz sizi arayalım
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 my-3">
        <div className="bg-gray-800 text-center rounded-sm">
          <FaPhone className="w-full p-3 text-rose-600" size={80}></FaPhone>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Telefon</div>
          </div>
          <div className="px-4 pb-3 flex flex-col">
            <a
              href="tel:0533333333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-pink-700"
            >
              0533 333 33 33
            </a>
            <a
              href="tel:0533333333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-pink-700"
            >
              0533 333 33 33
            </a>
          </div>
        </div>
        <div className="bg-gray-800 text-center rounded-sm">
          <FaWhatsapp
            className="w-full p-3 text-rose-600"
            size={80}
          ></FaWhatsapp>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Whatsapp</div>
          </div>
          <div className="px-4 pb-3 flex flex-col">
            <a
              href="tel:0533333333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-pink-700"
            >
              0533 333 33 33
            </a>
            <a
              href="tel:0533333333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-pink-700"
            >
              0533 333 33 33
            </a>
          </div>
        </div>
        <div className="bg-gray-800 text-center rounded-sm">
          <HiLocationMarker
            className="w-full p-3 text-rose-600"
            size={80}
          ></HiLocationMarker>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Adresimiz</div>
          </div>
          <div className="px-4 pb-3 flex flex-col">
            <a
              href="tel:0533333333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-pink-700"
            >
              Hunat Mah. Seyitgazi Gaziler Sk. No:5 Melikgazi/KAYSERİ
            </a>
          </div>
        </div>
      </div>
      <hr className="my-6" />
      <article className="flex space-x-3">
        <form
          className="bg-gray-800 p-8 rounded shadow-md w-1/3 text-black"
          //   onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4 text-white">Başvuru Formu</h2>
          <div className="flex space-x-2">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-white font-medium mb-2"
              >
                Adınız:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                //   value={formData.name}
                //   onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-white font-medium mb-2"
              >
                Telefonunuz:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                //   value={formData.name}
                //   onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white font-medium mb-2"
            >
              E-posta Adresiniz:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              //   value={formData.email}
              //   onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-white font-medium mb-2"
            >
              Mesajınız:
            </label>
            <textarea
              id="message"
              name="message"
              //   value={formData.message}
              //   onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
          >
            Başvuruyu Gönder
          </button>
        </form>
        <div className="relative overflow-hidden rounded-lg shadow-lg w-2/3">
          <iframe
            title="Google Haritalar"
            className="w-full h-64 md:h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24920.461229525354!2d34.72668895188273!3d38.670543043459936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a6f61dd439449%3A0xdb52e27000b43c54!2s2000%20Evler%2C%20Nev%C5%9Fehir%20Merkez%2FNev%C5%9Fehir!5e0!3m2!1str!2str!4v1685953273641!5m2!1str!2str"
          ></iframe>
        </div>
      </article>
    </section>
  );
};

export default ContactComp;
