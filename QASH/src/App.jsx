import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Mini from "./Components/Mini";
import Home from "./pages/Home";
import ThemeToggle from "./DarkMode/ThemeToggle";
import NaviBar from "./Components/NaviBar";

const App = () => {
  return (
    <Router>
      <Mini />
      <div className="top-0 sticky z-50">
        <NaviBar />
      </div>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add additional routes here as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
