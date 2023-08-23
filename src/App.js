import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Altai from "./pages/Altai";
import Team from "./pages/Team";
import Tours from "./pages/Tours";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/altai" element={<Altai />} />
        <Route path="/team" element={<Team />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
