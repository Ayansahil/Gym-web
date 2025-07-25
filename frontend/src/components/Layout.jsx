import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Outlet />  {/* This will load inner page components dynamically */}
      <Footer />
    </div>
  );
};

export default Layout;
