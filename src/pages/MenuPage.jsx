import React from 'react';
import { motion } from 'framer-motion';

function MenuPage() {
  const starters = [
    {
      image: 'src/Images/pita_and_hummus.jpg',
      name: 'Pita and Hummus',
      description: 'Soft, warm pita bread served with creamy, garlic-infused hummus.',
      price: '$6.99',
      nutritionalInfo: '200 calories',
    },
    {
      image: 'src/Images/fougasse.jpg',
      name: 'Fougasse',
      description: 'A traditional Provençal olive bread, crispy on the outside and soft within, studded with briny olives.',
      price: '$7.99',
      nutritionalInfo: '150 calories',
    },
    {
      image: 'src/Images/zucchini_fritters.jpg',
      name: 'Zucchini Fritters',
      description: 'Crispy zucchini patties blended with feta, cheddar, fresh mint, and parsley for a flavorful bite.',
      price: '$8.49',
      nutritionalInfo: '250 calories',
    },
    {
      image: 'src/Images/grilled_eggplant.jpg',
      name: 'Grilled Eggplant',
      description: 'Tender slices of eggplant grilled to perfection, enhanced with mint and a hint of garlic.',
      price: '$5.49',
      nutritionalInfo: '300 calories',
    },
    {
      image: 'src/Images/veg_shawarma.jpg',
      name: 'Veg Shawarma',
      description: 'A medley of spiced, roasted vegetables wrapped in warm pita, topped with tahini sauce and fresh herbs.',
      price: '$9.99',
      nutritionalInfo: '180 calories',
    },
  ];

  const soups = [
    {
      image: 'src/Images/hortosoupa.jpg',
      name: 'Hortosoupa',
      description: 'A traditional Greek vegetable soup, brimming with fresh greens, tender vegetables, and a fragrant blend of olive oil and herbs, offering a wholesome and nourishing taste.',
      price: '$5.99',
      nutritionalInfo: '150 calories',
    },
    {
      image: 'src/Images/tomato_orzo_soup.jpg',
      name: 'Tomato Orzo Soup',
      description: 'A comforting, flavorful soup with ripe tomatoes, savory broth, and orzo pasta, creating a perfect balance of hearty and refreshing flavors in every spoonful.',
      price: '$6.49',
      nutritionalInfo: '250 calories',
    },
    {
      image: 'src/Images/white_bean_soup.jpg',
      name: 'White Bean Soup',
      description: 'A hearty and comforting soup made with tender white beans, simmered in a rich vegetable broth with garlic, onions, and herbs. Perfectly seasoned, this soup offers a creamy texture and a wholesome, nutritious taste.',
      price: '$6.99',
      nutritionalInfo: '250 calories',
    }
  ];

  const mains = [
    {
      image: 'src/Images/veg_moussaka.jpg',
      name: 'Vegetable Moussaka',
      description: 'Layers of eggplant, zucchini, and creamy béchamel sauce.',
      price: '$12.99',
      nutritionalInfo: '550 calories',
    },
    {
      image: 'src/Images/lentil_kofta.jpg',
      name: 'Lentil Kofta',
      description: 'Spiced lentil patties served with tangy yogurt sauce.',
      price: '$14.49',
      nutritionalInfo: '400 calories',
    },
    {
      image: 'src/Images/grilled_halloumi.jpg',
      name: 'Grilled Halloumi Plate',
      description: 'Seared halloumi cheese with roasted vegetables and olives.',
      price: '$14.49',
      nutritionalInfo: '450 calories',
    }
  ];

  const desserts = [
    {
      image: 'src/Images/rosewater_baklava.jpg',
      name: 'Rosewater Baklava',
      description: 'Sweet layers of filo pastry with nuts and rosewater syrup.',
      price: '$6.99',
      nutritionalInfo: '300 calories',
    },
    {
      image: 'src/Images/semolina_cake.jpg',
      name: 'Semolina Cake',
      description: 'Moist, spiced cake soaked in orange blossom syrup.',
      price: '$7.49',
      nutritionalInfo: '350 calories',
    },
  ];

  const drinks = [
    {
      image: 'src/Images/mint_lemonade.jpg',
      name: 'Mint Lemonade',
      description: 'A refreshing blend of mint and fresh lemons.',
      price: '$3.99',
      nutritionalInfo: '120 calories',
    },
    {
      image: 'src/Images/turkish_tea.jpg',
      name: 'Turkish Tea',
      description: 'Aromatic tea served hot in traditional glassware.',
      price: '$2.99',
      nutritionalInfo: '50 calories',
    },
    {
      image: 'src/Images/pomegranate_spritzer.jpg',
      name: 'Pomegranate Spritzer',
      description: 'Sparkling water infused with pomegranate juice.',
      price: '$2.99',
      nutritionalInfo: '50 calories',
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
        <div
          style={{
            backgroundImage: 'src/Images/menu_bg.jpg',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            zIndex: 1,
            color: '#FAF8F1',
          }}
        >
          <h2 style={{ fontSize: '2.5em' }}>Our Menu</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
            <button onClick={() => document.getElementById('starters').scrollIntoView({ behavior: 'smooth' })}>
              Starters
            </button>
            <button onClick={() => document.getElementById('soups').scrollIntoView({ behavior: 'smooth' })}>
              Soups
            </button>
            <button onClick={() => document.getElementById('mains').scrollIntoView({ behavior: 'smooth' })}>
              Mains
            </button>
            <button onClick={() => document.getElementById('desserts').scrollIntoView({ behavior: 'smooth' })}>
              Desserts
            </button>
            <button onClick={() => document.getElementById('drinks').scrollIntoView({ behavior: 'smooth' })}>
              Drinks
            </button>
          </div>
        </div>
      </section>

      <section id="starters" style={{ padding: '40px' }}>
        <h2>Category: Starters</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
          }}
        >
          {starters.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#2A6041',
                padding: '15px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
              />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
              <p>Nutritional Info: {item.nutritionalInfo}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="soups" style={{ padding: '40px' }}>
        <h2>Category: Soups</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
          }}
        >
          {soups.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#2A6041',
                padding: '15px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
              />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
              <p>Nutritional Info: {item.nutritionalInfo}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="mains" style={{ padding: '40px' }}>
        <h2>Category: Mains</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
          }}
        >
          {mains.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#2A6041',
                padding: '15px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
              />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
              <p>Nutritional Info: {item.nutritionalInfo}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="desserts" style={{ padding: '40px' }}>
        <h2>Category: Desserts</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
          }}
        >
          {desserts.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#2A6041',
                padding: '15px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
              />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
              <p>Nutritional Info: {item.nutritionalInfo}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="drinks" style={{ padding: '40px' }}>
        <h2>Category: Drinks</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
          }}
        >
          {drinks.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#2A6041',
                padding: '15px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
              />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
              <p>Nutritional Info: {item.nutritionalInfo}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default MenuPage;