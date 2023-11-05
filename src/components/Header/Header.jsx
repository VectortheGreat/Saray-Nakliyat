import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { HiMail } from "react-icons/hi";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between flex-wrap items-center">
        <img
          src="https://i.imgur.com/F18rZYw.png"
          alt="Saray Nakliyat Logo"
          className="p-2 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
        <button onClick={toggleMenu} className="block md:hidden text-white p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:block space-x-4 md:space-x-10 mt-4 md:mt-0 text-center`}
        >
          <button
            className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
            onClick={() => {
              navigate("/");
            }}
          >
            <span className="flex items-center space-x-1">
              <AiFillHome></AiFillHome>
              <p>Anasayfa</p>
            </span>
          </button>
          <button
            className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
            onClick={() => {
              navigate("/hakkimizda");
            }}
          >
            <span className="flex items-center space-x-1">
              <IoIosPeople></IoIosPeople>
              <p>Hakkımızda</p>
            </span>
          </button>
          <button
            className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
            onClick={() => {
              navigate("/blog");
            }}
          >
            <span className="flex items-center space-x-1">
              <IoIosPeople></IoIosPeople>
              <p>Blog</p>
            </span>
          </button>
          <button
            className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
            onClick={() => {
              navigate("/iletisim");
            }}
          >
            <span className="flex items-center space-x-1">
              <HiMail></HiMail>
              <p>İletişim</p>
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
