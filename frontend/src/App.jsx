import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // ✅
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './components/About';
import Services from './components/Services';
import Membership from './components/Membership';
import Trainers from './components/Trainers';
import Schedule from './components/Schedule';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <ScrollToTop /> {/* ✅ Scrolls to top on each route change */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="membership" element={<Membership />} />
          <Route path="trainers" element={<Trainers />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
