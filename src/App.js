import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Contacts from "./pages/Contacts";

import "./App.css";
import "./styles/main.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
