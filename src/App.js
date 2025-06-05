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

  if (loading) {
    return <div className="loading">Loading statues...</div>;
  }

  return (
    <div className="App">
      <h1>Statues for Sale</h1>
      <div className="product-grid">
        {statues.map((item, index) => (
          <div key={index} className="product-card">
            <img
              src={`http://127.0.0.1:8000${item.image}`}
              alt={item.name}
              onError={(e) => {
                e.target.src = '/placeholder.jpg'; // Place a fallback image in public/
              }}
            />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
