import React from 'react'

export default function About() {
  return (
    <div>
           <div className="about-section">
             
              <h2><strong> About Divine Statues</strong></h2>
              <p>
                  Divine Statues is dedicated to bringing the sacred and spiritual into your home.
                  Every piece is handcrafted by skilled artisans using traditional techniques passed down through generations.
                  We believe that a statue is not just a decoration but a divine presence.
              </p>

              </div>

          {/* 🌟 Why Choose Us Section */}
          <section className="why-choose-us">
              <h2>🖤 Why Choose Us?</h2>
              <ul>
                  <li>✅ 100% Handcrafted with love</li>
                  <li>✅ Made in India 🇮🇳</li>
                  <li>✅ Affordable prices, premium quality</li>
                  <li>✅ Fast and safe shipping</li>
              </ul>
          </section>

          {/* 💬 Customer Testimonials */}
          <section className="testimonials">
              <h2>💬 What Our Customers Say</h2>
              <div className="testimonial">
                  <p>"The statue is beautiful and brings peace to my home. Thank you!"</p>
                  <span>- Aarti, Chennai</span>
              </div>
              <div className="testimonial">
                  <p>"Excellent craftsmanship. Delivered on time and well packed!"</p>
                  <span>- Ravi, Bangalore</span>
              </div>
          </section>

    </div>
  )
}

