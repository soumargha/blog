/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./jsx/Navbar";
import Footer from "./jsx/Footer";
import Body from "./jsx/Body";
import Blogs from "./jsx/Blogs";
import Coffee from "./jsx/Coffee";
import Contact from "./jsx/Contact";
import MyDescrip from "./jsx/MyDescrip";
import Cards from "./jsx/Cards";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          {/* Use 'element' instead of 'Component' */}
          <Route path="/MyDescrip" element={<MyDescrip />} />
        </Routes>
        
        <Body />
      </div>
      <Cards/>
      <Blogs />
      <Coffee />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
