import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CurrentCouncil from "./pages/CurrentCouncil";
import Events from "./pages/Events";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ContactPage from "./pages/ContactPage";
import JoinPage from "./pages/JoinPage";
import { VesitTank } from "./pages/workshops/VesitTank";
import ScrollToTop from "./ScrollToTop";
import PrevCouncil1 from './pages/PrevCouncil1';
import Developers from './pages/Developers';
import WIE from './pages/WIE/WIE'
import Darkb from './components/Darkb/Darkb'
import Societies3 from './components/Societies-3/Societies'
import Calendar from './components/Calendar/Calendar.jsx';
import CI from "./pages/CI/CI.jsx"

function App() {
  return (
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/current_council" element={<CurrentCouncil />} />
          <Route path="/council23-24" element={<PrevCouncil1 />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/join_ieee" element={<JoinPage />} />
          <Route path="/vesit_tank" element={<VesitTank />} />
          <Route path="/societies/wie" element={<WIE />} />
          <Route path="/societies/ci" element={<CI/>} />
          <Route path="/societies/calendar" element={<Calendar/>} />
        </Routes>
        <Footer />
        {/* <Societies /> */}
      </Router>
  );
}

export default App;
