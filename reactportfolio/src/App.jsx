import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Wrapper from "./pages/Wrapper";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import Footer from "./pages/Footer";
import Header from "./pages/header/Header";
import Gallery from "./pages/gallery/Gallery";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
