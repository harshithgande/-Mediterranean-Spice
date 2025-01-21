import React from 'react';
    import { motion } from 'framer-motion';

    function RewardsPage() {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section style={{ padding: '40px', textAlign: 'center' }}>
            <h2>Earn points for every order...</h2>
          </section>

          <section style={{ padding: '40px', textAlign: 'center' }}>
            <h2>Eco Savings Calculator</h2>
            <p>Interactive calculator here.</p>
          </section>

          <section style={{ padding: '40px', textAlign: 'center' }}>
            <h2>Rewards Tiers</h2>
            <p>Dynamic progress bars here.</p>
          </section>
        </motion.div>
      );
    }

    export default RewardsPage;
