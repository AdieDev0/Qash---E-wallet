import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Footer from "./Components/Footer";
import Mini from "./Components/Mini";
import Home from "./pages/Home";
import ThemeToggle from "./DarkMode/ThemeToggle";

const App = () => {
  return (
    <Router>
      <Mini />
      <div className="top-0 sticky z-50">
        <Navbar />
      </div>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
