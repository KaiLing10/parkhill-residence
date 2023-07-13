import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
// pages
import Home from './pages/home';
import About from './pages/about';
import Location from './pages/location';
import Facilities from './pages/facilities';
import Rent from './pages/rent';
import NoPage from "./pages/nopage";
import VRTour from './pages/vrtour';
import UnitInfo1 from './pages/unitInfo1';
import UnitInfo2 from './pages/unitInfo2';


import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
     <ScrollToTop>
      <Routes>
        {/* <Route path="/" element={<Navbar />}> */}
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />    
          <Route path="location" element={<Location />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="rent" element={<Rent />} /> 
          <Route path="vrtour" element={<VRTour />} />
          <Route path="unit1" element={<UnitInfo1 />} />
          <Route path="unit2" element={<UnitInfo2 />} />
          <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

