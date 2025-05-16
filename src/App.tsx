import "./styles/main.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // ЗАМІНИ BrowserRouter на HashRouter

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Contacts } from "./pages/Contacts";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Project } from "./pages/Project";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 900,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
