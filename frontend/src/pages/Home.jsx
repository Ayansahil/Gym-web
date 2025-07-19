import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Membership from '../components/Membership';
import Trainers from '../components/Trainers';
import Schedule from '../components/Schedule';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Membership />
      <Trainers />
      <Schedule />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
