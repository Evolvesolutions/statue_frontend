// src/Home.js
import React, { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Home() {
  const [statues, setStatues] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/')
      .then((response) => response.json())
      .then((data) => {
        setStatues(data.slice(0, 5)); // Only first 5
      })
      .catch((error) => {
        console.error('Error fetching statues:', error);
      });
  }, []);

  return (
    <div className="hero">
      <h1>Welcome to Divine Statues 🛕</h1>
      <p>Discover and buy beautiful handcrafted statues for your home and temple.</p>
      <Link to="/shop" className="cta-button">Start Shopping</Link>

      {/* Show first 5 statues preview */}
      <h2 className="main-title">Featured Statues</h2>
      <div className="product-grid">
        {statues.map((item, index) => (
          <div key={index} className="product-card">
            <img
              src={`http://127.0.0.1:8000${item.image}`}
              alt={item.name}
              onError={(e) => {
                e.target.src = '/placeholder.jpg';
              }}
            />
            <h3>{item.name}</h3>
            <p className="price">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
