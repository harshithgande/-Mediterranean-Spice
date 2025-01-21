import React from 'react';
    import { motion } from 'framer-motion';

    function BlogPage() {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section style={{ padding: '40px', textAlign: 'center' }}>
            <h2>Blog</h2>
            <p>Main blog grid here.</p>
          </section>

          <section style={{ padding: '40px', textAlign: 'center' }}>
            <h2>Individual Blog Pages</h2>
            <p>Banner image and text content here.</p>
          </section>
        </motion.div>
      );
    }

    export default BlogPage;
