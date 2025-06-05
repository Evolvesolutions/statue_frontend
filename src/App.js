import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Footer from './footer';
import Shop from './shop';

export default function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Footer />
            </>
          } />
          <Route path="/shop" element={<Shop />} />
        </Routes>

        
                <a
          href="https://wa.me/91XXXXXXXXXX" // Replace with your number
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </Router>
  );
}
