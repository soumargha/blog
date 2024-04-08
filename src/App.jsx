/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Body from "./jsx/Body";
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2'
import Blog3 from './pages/Blog3'
import Blog4 from './pages/Blog4'
import Blog5 from './pages/Blog5'
import Blog6 from './pages/blog6'
import Allblogs from './pages/AllBlogs'
import Mydescription from "./pages/Mydescription";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/mydescrip" element={<Mydescription />} />
        <Route path="/Blog1" element ={<Blog1/>} />
        <Route path="/Blog2" element ={<Blog2/>} />
        <Route path="/Blog3" element ={<Blog3/>} />
        <Route path="/Blog4" element ={<Blog4/>} />
        <Route path="/Blog5" element ={<Blog5/>} />
        <Route path="/Blog6" element ={<Blog6/>} />
        <Route path="/allblogs" element ={<Allblogs/>} />
      </Routes>
    </Router>
  );
}

export default App;
