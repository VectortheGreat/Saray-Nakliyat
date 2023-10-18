import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <div className="fixed bottom-4 right-4">
      {visible && (
        <div
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-3 rounded-full transition-transform transform hover:scale-110 cursor-pointer flex items-center"
          onClick={scrollToTop}
        >
          <AiOutlineArrowUp />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
