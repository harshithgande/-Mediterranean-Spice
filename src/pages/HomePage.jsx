import React from 'react';
    import { motion } from 'framer-motion';

    function HomePage() {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
            <div style={{
              backgroundImage: 'heroimage.jpg',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              width: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 0
            }} />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              zIndex: 1,
              color: '#FAF8F1'
            }}>
              <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>Experience the Taste of Wellness</h1>
              <p style={{ fontSize: '1.5em', marginBottom: '30px' }}>Farm-to-Table Freshness Every Day</p>
              <button style={{ padding: '15px 30px', fontSize: '1.2em' }}>Order Online</button>
            </div>
          </section>

          <section style={{ padding: '40px', textAlign: 'center' }}>
            <h2>Popular Items</h2>
            <div style={{ display: 'flex', overflowX: 'auto', gap: '20px', padding: '20px 0' }}>
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} style={{
                  minWidth: '250px',
                  backgroundColor: '#2A6041',
                  padding: '15px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)' }}
                >
                  <img src="https://placehold.co/200x150/D4A857/121212?text=Food" alt="Food Item" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
                  <h3>Item {i + 1}</h3>
                  <p>Description of item {i + 1}.</p>
                  <p>Price: $10.99</p>
                  <button>View Full Menu</button>
                </div>
              ))}
            </div>
          </section>

          <section style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
            <div style={{
              backgroundImage: 'url("src/Images/heroimage.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              width: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 0
            }} />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              zIndex: 1,
              color: '#FAF8F1',
              padding: '20px'
            }}>
              <h2>About Us</h2>
              <p>A short paragraph about Mediterranean Spice.</p>
              <button>Learn More</button>
            </div>
          </section>
        </motion.div>
      );
    }

    export default HomePage;
