import React from "react";
import { BrowserRouter    as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Karura from "./pages/blogs/karura_forest/karura";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/karura" element={<Karura />} />
        </Routes>
      </Router>
    </>
  );
};
  
export default App;
