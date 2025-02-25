import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import TechnicalEvents from './components/TechnicalEvents';
import CulturalEvents from './components/CulturalEvents';
import SportsEvents from './components/SportsEvents';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import UpdatesPage from './components/UpdatesPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/updates" element={<UpdatesPage />} />
        <Route path="/technical" element={<TechnicalEvents />} />
        <Route path="/cultural" element={<CulturalEvents />} />
        <Route path="/sports" element={<SportsEvents />} />

      </Routes>
    </Router>
  );
};

export default App;