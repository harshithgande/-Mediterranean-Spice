import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import HomePage from './pages/HomePage';
    import MenuPage from './pages/MenuPage';
    import AboutUsPage from './pages/AboutUsPage';
    import RewardsPage from './pages/RewardsPage';
    import ReservationsPage from './pages/ReservationsPage';
    import BlogPage from './pages/BlogPage';
    import ContactUsPage from './pages/ContactUsPage';
    import GiftCardsPage from './pages/GiftCardsPage';
    import Layout from './components/Layout';

    function App() {
      return (
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/rewards" element={<RewardsPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/giftcards" element={<GiftCardsPage />} />
          </Routes>
        </Layout>
      );
    }

    export default App;
