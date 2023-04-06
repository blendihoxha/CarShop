import React from 'react';


function Home() {
  return (
    <div>
      <section className="hero">
        <h2>Welcome to BlendeDealership.pro</h2>
        <p>We are your one-stop shop for all your car buying needs. We sell high-quality cars at competitive prices, and we offer financing options to help you get the car of your dreams.</p>
        <p>Use the links in the header to navigate to different sections of our website, or come visit us at our dealership in person!</p>
      </section>
      <section className="services">
        <h3>Our Services</h3>
        <ul>
          <li>Sales of new and used cars</li>
          <li>Financing options</li>
          <li>Trade-ins</li>
          <li>Repairs and maintenance</li>
        </ul>
      </section>
      <section className="testimonials">
        <h3>Testimonials</h3>
        <blockquote>
          "I had a great experience buying a car at BlendeDealership.pro. The staff was friendly and helpful, and I got a great deal on a used car. Highly recommended!"
          <cite>- Jane Doe</cite>
        </blockquote>
        <blockquote>
          "I brought my car in for service and was impressed with the quality of work and the reasonable prices. I'll definitely be back!"
          <cite>- John Smith</cite>
        </blockquote>
      </section>
    </div>
  );
}

export default Home;

