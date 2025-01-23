import React from 'react';
import { motion } from 'framer-motion';

function MenuPage() {
  const starters = [
    {
      image: 'src/Images/pita_and_hummus.jpg',
      name: 'Pita and Hummus',
      description: 'Soft, warm pita bread served with creamy, garlic-infused hummus.',
      price: '$6.99',
      nutritionalInfo: '200 calories'
    },
    {
      image: 'src/Images/fougasse.jpg',
      name: 'Fougasse',
      description: 'A traditional Provençal olive bread, crispy on the outside and soft within, studded with briny olives.',
      price: '$7.99',
      nutritionalInfo: '150 calories'
    },
    {
      image: 'src/Images/zucchini_fritters.jpg',
      name: 'Zucchini Fritters',
      description: 'Crispy zucchini patties blended with feta, cheddar, fresh mint, and parsley for a flavorful bite.',
      price: '$8.49',
      nutritionalInfo: '250 calories'
    },
    {
      image: 'src/Images/grilled_eggplant.jpg',
      name: 'Grilled Eggplant',
      description: 'Tender slices of eggplant grilled to perfection, enhanced with mint and a hint of garlic.',
      price: '$5.49',
      nutritionalInfo: '300 calories'
    },
    {
      image: 'src/Images/veg_shawarma.jpg',
      name: 'Veg Shawarma',
      description: 'A medley of spiced, roasted vegetables wrapped in warm pita, topped with tahini sauce and fresh herbs.',
      price: '$9.99',
      nutritionalInfo: '180 calories'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
        <div style={{
          backgroundImage: 'url("https://placehold.co/1920x1080/2A6041/FAF8F1?text=Menu+Banner")',
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
          <h2 style={{ fontSize: '2.5em' }}>Our Menu</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
            <button>Starters</button>
            <button>Soups</button>
            <button>Mains</button>
            <button>Desserts</button>
            <button>Drinks</button>
          </div>
        </div>
      </section>

      <section style={{ padding: '40px' }}>
        <h2>Category: Starters</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {starters.map((item, index) => (
            <div key={index} style={{
              backgroundColor: '#2A6041',
              padding: '15px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)' }}
            >
              <img src={item.image} alt={item.name} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
              <p>Nutritional Info: {item.nutritionalInfo}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Build Your Own Bowl</h2>
        <p>Interactive ingredient selection here.</p>
      </section>
    </motion.div>
  );
}

export default MenuPage;