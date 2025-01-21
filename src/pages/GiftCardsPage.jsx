import React from 'react';
    import { motion } from 'framer-motion';

    function GiftCardsPage() {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section style={{ padding: '40px', textAlign: 'center' }}>
            <h2>Gift Cards</h2>
            <p>Customization options here.</p>
          </section>

          <section style={{ padding: '40px', textAlign: 'center' }}>
            <h2>Checkout</h2>
            <p>Simple payment form here.</p>
          </section>
        </motion.div>
      );
    }

    export default GiftCardsPage;
