import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Utils/ScrollToTop";
import CopyRight from "./components/Footer/CopyRight";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/hizmetlerimiz" element={<Service />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
      <Footer></Footer>
      <CopyRight></CopyRight>
      <ScrollToTop></ScrollToTop>
    </Router>
  );
}

export default App;
