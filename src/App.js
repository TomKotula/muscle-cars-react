import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChallengerPage from "./ChallengerPage";
import ChargerPage from "./ChargerPage";
import ChevyPage from "./ChevyPage";
import MustangPage from "./MustangPage";
import MainPage from "./MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/muscle-cars-react" element={<MainPage />} />
        <Route path="/mustang" element={<MustangPage />} />
        <Route path="/chevy" element={<ChevyPage />} />
        <Route path="/challenger" element={<ChallengerPage />} />
        <Route path="/charger" element={<ChargerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
