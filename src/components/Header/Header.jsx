const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* <div className="text-white text-2xl font-bold">Header</div>
         */}
        <img
          src="https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/logo.png"
          alt="Saray Nakliyat Logo"
          className="p-2"
        />
        <nav className="space-x-4 p-2">
          <a
            href="#"
            className="text-white hover:text-blue-200 transition duration-300 ease-in-out"
          >
            Link 1
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-200 transition duration-300 ease-in-out"
          >
            Link 2
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-200 transition duration-300 ease-in-out"
          >
            Link 3
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
