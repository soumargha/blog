/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./jsx/Footer";
import Body from "./jsx/Body";

import Mydescription from "./pages/Mydescription";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/mydescrip" element={<Mydescription />} />
      </Routes>
    </Router>
  );
}

export default App;
