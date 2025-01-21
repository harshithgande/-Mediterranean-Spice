import React from 'react';
    import { motion } from 'framer-motion';

    function AboutUsPage() {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
            <div style={{
              backgroundImage: 'url("https://placehold.co/1920x1080/2A6041/FAF8F1?text=Our+Story+Image")',
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
              <h2 style={{ fontSize: '2.5em' }}>Our Story</h2>
              <p>A brief story about Mediterranean Spice.</p>
            </div>
          </section>

          <section style={{ padding: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <img src="https://placehold.co/200x150/D4A857/121212?text=Image" alt="Image" style={{ width: '200px', height: 'auto' }} />
                <div>
                  <h3>Our Values</h3>
                  <p>Text about our values.</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexDirection: 'row-reverse' }}>
                <img src="https://placehold.co/200x150/D4A857/121212?text=Image" alt="Image" style={{ width: '200px', height: 'auto' }} />
                <div>
                  <h3>Our Mission</h3>
                  <p>Text about our mission.</p>
                </div>
              </div>
            </div>
          </section>

          <section style={{ padding: '40px', textAlign: 'center' }}>
            <h2>Timeline</h2>
            <p>Interactive timeline here.</p>
          </section>
        </motion.div>
      );
    }

    export default AboutUsPage;
