import { useState } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const ContactComp = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "Email sent successfully") {
          console.log(data);
        } else {
          console.error("Error:", data);
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);
  return (
    <section className="mt-3 px-5">
      <div className="text-center space-y-4">
        <h1 className="text-4xl">Bizimle İletişime Geçin!</h1>
        <p className="text-lg md:w-3/4 mx-auto">
          Firmamız ile hızlıca iletişime geçebilirsiniz. Dilerseniz teklif
          formunu doldurun biz sizi arayalım
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
        <div className="bg-gray-800 text-center rounded-sm">
          <FaPhone className="w-full p-3 text-rose-600" size={80}></FaPhone>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Telefon</div>
          </div>
          <div className="px-4 pb-3 flex flex-col">
            <a
              href="tel:05323764984"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-pink-700"
            >
              0532 376 49 84
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
              0532 376 49 84
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
              href="https://maps.app.goo.gl/qzRaqu5vRnCradFU7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-pink-700"
            >
              Aşağıeverek, Cumhuriyet Cd. No:175, 38400 Develi/Kayseri
            </a>
          </div>
        </div>
      </div>
      <hr className="my-6" />
      <article className="flex flex-col md:flex-row space-y-3 md:space-x-3">
        <form
          className="bg-gray-800 p-4 md:p-8 rounded shadow-md w-full md:w-1/3 text-black"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4 text-white">Başvuru Formu</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-medium mb-2">
              Adınız:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-white font-medium mb-2"
            >
              Telefonunuz:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
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
              className="w-full p-2 border rounded"
              onChange={handleChange}
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
              className="w-full p-2 border rounded"
              onChange={handleChange}
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
        <div className="relative overflow-hidden rounded-lg shadow-lg w-full md:w-2/3">
          <iframe
            title="Google Haritalar"
            className="w-full h-64 md:h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199647.76676308972!2d35.2680290855852!3d38.56841620752895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152bbc7c43253271%3A0x82f62270204daa6!2sDeveli%20Saray%20Nak.!5e0!3m2!1sen!2str!4v1698929617827!5m2!1sen!2str"
          ></iframe>
        </div>
      </article>
    </section>
  );
};

export default ContactComp;
