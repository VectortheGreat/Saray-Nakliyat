import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src="https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/logo.png"
          alt="Saray Nakliyat Logo"
          className="p-2 cursor-pointer"
        />
        <nav className="space-x-10 p-2">
          <button
            className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
            onClick={() => {
              navigate("/");
            }}
          >
            Anasayfa
          </button>
          <button
            className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
            onClick={() => {
              navigate("/hakkimizda");
            }}
          >
            Hakkımızda
          </button>
          <button
            className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
            onClick={() => {
              navigate("/hizmetlerimiz");
            }}
          >
            Hizmetlerimiz
          </button>
          <button
            className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
            onClick={() => {
              navigate("/iletisim");
            }}
          >
            İletişim
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
