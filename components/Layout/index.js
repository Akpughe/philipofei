import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Toggle from '../Toggle';

const Layout = ({ children }) => {
  return (
    <div >
      <div>
        <Navbar />
        <div className="px-28">{children}</div>
        <div className='fixed bottom-0 right-0 px-28 py-10'>
          <Toggle />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
