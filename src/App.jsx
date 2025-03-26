// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import PreOrder from "./pages/PreOrder";

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route path="/arstemporis" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/preorder" element={<PreOrder />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;  // Default export
