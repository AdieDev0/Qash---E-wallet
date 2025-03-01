import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Footer from "./Components/Footer";
import Mini from "./Components/Mini";
const App = () => {
  return (
    <Router>
      <Mini />
      <Navbar />
      <Routes></Routes>
      <Footer />
    </Router>
  );
};

export default App;
