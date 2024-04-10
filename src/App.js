import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChallengerWeb from "./ChallengerWeb";
import ChargerWeb from "./ChargerWeb";
import ChevyWeb from "./ChevyWeb";
import MustangWeb from "./MustangWeb";
import MainWeb from "./MainWeb";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainWeb />} />
        <Route path="/mustang" element={<MustangWeb />} />
        <Route path="/chevy" element={<ChevyWeb />} />
        <Route path="/challenger" element={<ChallengerWeb />} />
        <Route path="/charger" element={<ChargerWeb />} />
      </Routes>
    </Router>
  );
}

export default App;
