// src/Shop.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './footer';

function Shop() {
  const [statues, setStatues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch statues');
        }
        return response.json();
      })
      .then((data) => {
        setStatues(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  const handleBuy = (item) => {
    alert(`Thank you for choosing to buy: ${item.name} for ₹${item.price}`);
  };

  if (loading) {
    return <div className="loading">Loading statues...</div>;
  }

  return (
    <div id="shop">
      <h2 className="main-title">🛍️Available Statues</h2>
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
            <button className="buy-btn" onClick={() => handleBuy(item)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
    
  );
}



export default Shop;
