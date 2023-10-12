// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageContainer from "./components/Container/PageContainer";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </PageContainer>
    </Router>
  );
}

export default App;
