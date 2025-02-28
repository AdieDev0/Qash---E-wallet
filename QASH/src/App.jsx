import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StickyNavbar from "./Components/StickyNavbar";
import upperNavbar from "./Components/upperNavbar";
const App = () => {
  return (
    <Router>
      <upperNavbar />
      <StickyNavbar />
      <Routes></Routes>
    </Router>
  );
};

export default App;
