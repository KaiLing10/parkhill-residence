import React from 'react';
// import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import ScrollToTop from './components/ScrollToTop';

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
// pages - admin
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminRentBooking from './pages/admin/AdminRentBooking';
import AdminAppointmentBooking from './pages/admin/AdminAppointmentBooking';
import AdminUnitPreference from './pages/admin/AdminUnitPreference';
// import AdminUnitManagement from './pages/admin/AdminUnitManagement';

export default function App() {
  return (
    <BrowserRouter>
     <ScrollToTop>
      <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />    
          <Route path="location" element={<Location />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="rent" element={<Rent />} /> 
          <Route path="vrtour" element={<VRTour />} />
          <Route path="vrtour/:virtualId" element={<VRTour />} />
          <Route path="unitInfo1" element={<UnitInfo1 />} />
          <Route path="unitInfo2" element={<UnitInfo2 />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="adminRentBooking" element={<AdminRentBooking />} />
          <Route path="adminAppointmentBooking" element={<AdminAppointmentBooking />} />
          <Route path="adminUnitPreference" element={<AdminUnitPreference />} />

          
          {/* <Route path="adminUnitManagement" element={<AdminUnitManagement />} /> */}

          

          
          <Route path="*" element={<NoPage />} />
      </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}
const root = createRoot(document.getElementById('root'));
root.render(<App />);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

