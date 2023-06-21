import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
// import Navbar from './components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import NoPage from "./pages/nopage";
import VRTour from './pages/vrtour';
// import Main from './vrscene'



// import VRScene from './vrscene';
// ReactDOM.render(<App />, document.getElementById('root'));


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     {/* <Main /> */}
//   </React.StrictMode>
// );

// React router - https://www.w3schools.com/react/react_router.asp

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navbar />}> */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vrtour" element={<VRTour />} />
          <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

