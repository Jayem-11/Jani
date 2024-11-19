import React from "react";
import { HashRouter   as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Karura from "./pages/blogs/karura_forest/karura";
import NoPage from "./pages/nopage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jani/home" element={<Home />} />
          <Route path="/jani/karura" element={<Karura />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );
};
  
export default App;
