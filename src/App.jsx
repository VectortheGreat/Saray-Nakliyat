import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Utils/ScrollToTop";
import CopyRight from "./components/Footer/CopyRight";
import BlogDetail from "./components/PageComponents/BlogComponents/BlogDetailPage/BlogDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authInfo } from "./redux/authSlice";
import { authFBConfig } from "./config/config";

function App() {
  const auth = authFBConfig;
  const authInfoPayload = {
    app: {
      name: auth.app.name,
    },
    currentUser: auth.currentUser,
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authInfo(authInfoPayload));
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path={`/blog/${slug}`} element={<BlogDetail />} /> */}
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
      <Footer></Footer>
      <CopyRight></CopyRight>
      <ScrollToTop></ScrollToTop>
    </Router>
  );
}

export default App;
