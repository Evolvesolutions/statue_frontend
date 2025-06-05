import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
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
    <div className="App">
      {/* 🌟 Welcome Hero Section */}
      <div className="hero">
        <h1>Welcome to Divine Statues 🛕</h1>
        <p>Discover and buy beautiful handcrafted statues for your home and temple.</p>
        <a href="#shop" className="cta-button">Start Shopping</a>
      </div>

      {/* 🛍️ Product Sales Section */}
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
      </div>
                    <footer className="footer">
          <div className="footer-content">
            <p>Connect with us:</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Your Statue Store. All rights reserved.</p>
          </div>
        </footer>


    </div>

    



    


  );
  
}


export default App;
