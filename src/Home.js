// src/Home.js
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="hero">
      <h1>Welcome to Divine Statues 🛕</h1>
      <p>Discover and buy beautiful handcrafted statues for your home and temple.</p>
      <Link to="/shop" className="cta-button">Start Shopping</Link>
    </div>
  );
}


export default Home;
