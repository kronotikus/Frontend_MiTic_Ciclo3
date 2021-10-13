
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='mainContainer'>
     
      <Navbar/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
