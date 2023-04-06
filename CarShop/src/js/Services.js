
import React, { useState } from 'react';


function Service() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // add your form submission logic here
    // set the submitted state to true if the form is submitted successfully
    setSubmitted(true);
  }

  return (
    <div>
      <section className="hero">
        <h2>Car Services</h2>
        <p>At BlendeDealership.pro, we offer a wide range of car services to keep your vehicle running smoothly. Our team of expert technicians is trained to handle all types of cars, and we use only the highest quality parts and equipment.</p>
        <p>Use the links in the header to navigate to different sections of our website, or come visit us at our dealership in person to schedule a service appointment.</p>
      </section>
      <section className="services">
        <h3>Our Services</h3>
        <ul>
          <li>Oil changes</li>
          <li>Tire rotations and replacements</li>
          <li>Brake inspections and repairs</li>
          <li>Engine diagnostics and repairs</li>
          <li>Transmission services</li>
          <li>And much more!</li>
        </ul>
      </section>
      <section className="appointment">
        <h3>Schedule an Appointment</h3>
        {submitted ?
          <p>Thank you for submitting the form. We will contact you shortly.</p>
          :
          <div>
            <p>Fill out the form below to schedule a service appointment at BlendeDealership.pro:</p>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div>
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" required />
              </div>
              <div>
                <label htmlFor="time">Time:</label>
                <input type="time" id="time" name="time" required />
              </div>
              <div>
                <label htmlFor="services">Services:</label>
                <select id="services" name="services" required>
                  <option value="">Select a service...</option>
                  <option value="oil-change">Oil Change</option>
                  <option value="tire-rotation">Tire Rotation</option>
                  <option value="brake-inspection">Brake Inspection</option>
                  <option value="engine-repair">Engine Repair</option>
                  <option value="transmission-service">Transmission Service</option>
                </select>
              </div>
              <div>
                <label htmlFor="comments">Comments:</label>
                <textarea id="comments" name="comments"></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        }
      </section>
    </div>
  );
}

export default Service;
