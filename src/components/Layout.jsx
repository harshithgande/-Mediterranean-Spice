import React from 'react';
    import Navbar from './Navbar';
    import Footer from './Footer';

    function Layout({ children }) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <div style={{ flex: 1 }}>{children}</div>
          <Footer />
        </div>
      );
    }

    export default Layout;
