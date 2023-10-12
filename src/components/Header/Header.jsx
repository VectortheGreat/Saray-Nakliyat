const Header = () => {
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
              console.log("Button 1 clicked");
            }}
          >
            Anasayfa
          </button>
          <button
            className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
            onClick={() => {
              console.log("Button 2 clicked");
            }}
          >
            Hakkımızda
          </button>
          <button
            className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
            onClick={() => {
              console.log("Button 3 clicked");
            }}
          >
            Hizmetlerimiz
          </button>
          <button
            className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
            onClick={() => {
              console.log("Button 3 clicked");
            }}
          >
            Hizmetlerimiz
          </button>
          <button
            className="text-white hover:text-blue-300 transition duration-300 ease-in-out"
            onClick={() => {
              console.log("Button 3 clicked");
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
