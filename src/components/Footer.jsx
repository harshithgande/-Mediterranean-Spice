import React from 'react';

    function Footer() {
      return (
        <footer style={{ backgroundColor: '#2A6041', color: '#FAF8F1', textAlign: 'center', padding: '10px' }}>
          <p>&copy; {new Date().getFullYear()} Mediterranean Spice</p>
        </footer>
      );
    }

    export default Footer;
