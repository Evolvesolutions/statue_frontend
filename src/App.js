// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetStarted from './GetStarted';

function Home() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Welcome to Travel Planner</h1>
        <p>Your personalized guide to explore tourist places across India.</p>
        <Link to="/get-started" className="cta-button">Get Started</Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </Router>
  );
}

export default App;
