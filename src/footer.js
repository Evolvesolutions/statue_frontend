// src/footer.js
import React from 'react';

export default function Footer() {
  return (
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
          <a href="https://wa.me/91 9087654321" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <p>
            📞 <a href="tel:+919876543210">+91 9087654321</a>
          </p>
          <p>
            📧 <a href="mailto:evolvesolutionspvtltd@gmail.com">evolvesolutionspvtltd@gmail.com</a>
          </p>
        </div>

        <p>&copy; {new Date().getFullYear()} Evolvesolutionspvtltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
