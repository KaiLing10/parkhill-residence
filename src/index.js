import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/home';
import About from './pages/about';
import Location from './pages/location';
import Facilities from './pages/facilities';
import Rent from './pages/rent';
import NoPage from "./pages/nopage";
import VRTour from './pages/vrtour';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navbar />}> */}
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />    
          <Route path="location" element={<Location />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="rent" element={<Rent />} /> 
          {/* <Route path="vrtour" element={<VRTour />} /> */}
          <Route path="vrtour" element={<VRTour />} />
          <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

