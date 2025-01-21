import React from 'react';
    import { Link } from 'react-router-dom';

    function Navbar() {
      return (
        <nav style={{ backgroundColor: '#2A6041', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ color: '#FAF8F1', fontSize: '1.5em', fontWeight: 'bold' }}>Mediterranean Spice</Link>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
            <li><Link to="/" style={{ color: '#FAF8F1' }}>Home</Link></li>
            <li><Link to="/menu" style={{ color: '#FAF8F1' }}>Menu</Link></li>
            <li><Link to="/about" style={{ color: '#FAF8F1' }}>About Us</Link></li>
             <li><Link to="/rewards" style={{ color: '#FAF8F1' }}>Rewards</Link></li>
            <li><Link to="/reservations" style={{ color: '#FAF8F1' }}>Reservations</Link></li>
            <li><Link to="/blog" style={{ color: '#FAF8F1' }}>Blog</Link></li>
            <li><Link to="/contact" style={{ color: '#FAF8F1' }}>Contact Us</Link></li>
            <li><Link to="/giftcards" style={{ color: '#FAF8F1' }}>Gift Cards</Link></li>
          </ul>
        </nav>
      );
    }

    export default Navbar;
