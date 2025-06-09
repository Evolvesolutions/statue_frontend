import React, { useEffect, useState } from 'react';
import './App.css';

function Home() {
  const [statues, setStatues] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/')
      .then((res) => res.json())
      .then((data) => setStatues(data.slice(0, 5))); // First 5
  }, []);

  return (
    <div className="hero">
      <h1>Welcome to Divine Statues 🛕</h1>
      <p>Discover and buy beautiful handcrafted statues for your home and temple.</p>
      <a href="/shop" className="cta-button">Start Shopping</a>

      <div className="carousel-container">
        <div className="statue-gallery-horizontal">
          {statues.map((statue) => (
            <div key={statue.id} className="statue-thumbnail">
              <img src={`http://127.0.0.1:8000${statue.image}`} alt={statue.name} />
              <p>{statue.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
