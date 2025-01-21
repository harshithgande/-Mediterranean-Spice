import React from 'react';
    import { motion } from 'framer-motion';

    function ContactUsPage() {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section style={{ padding: '40px', textAlign: 'center' }}>
            <h2>Contact Us</h2>
            <p>Contact form here.</p>
          </section>

          <section style={{ padding: '40px', textAlign: 'center' }}>
            <h2>Interactive Map</h2>
            <p>Google Maps here.</p>
          </section>

          <section style={{ padding: '40px', textAlign: 'center' }}>
            <h2>Social Links</h2>
            <p>Social icons here.</p>
          </section>
        </motion.div>
      );
    }

    export default ContactUsPage;
