import React, { useState } from "react";

const OrderForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [car, setCar] = useState("Select a car");
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you for your order, ${firstName} ${lastName}! Your ${color} ${car} will be delivered to you soon. We will contact you at ${email} or ${phone} for more information.`
    );
  };

  const handleCarChange = (e) => {
    setCar(e.target.value);
  };

  return (
    <div className="bele">
      <h1>Order Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />
        <label>
          Car:
          <select value={car} onChange={handleCarChange}>
          <option disabled>Select a car</option>
          <option disabled>Select a car</option>
            <option value="Ford Mustang">Ford Mustang</option>
            <option value="Chevrolet Camaro">Chevrolet Camaro</option>
            <option value="Dodge Challenger">Dodge Challenger</option>
            <option value="Nissan GT-R">Nissan GT-R</option>
            <option value="Porsche 911">Porsche 911</option>
            <option value="Audi R8">Audi R8</option>
            <option value="BMW M5">BMW M5</option>
            <option value="Mercedes-AMG GT">Mercedes-AMG GT</option>
            <option value="Tesla Model S">Tesla Model S</option>
            <option value="Ferrari 488">Ferrari 488</option>
            <option value="Lamborghini Huracan">Lamborghini Huracan</option>
            <option value="McLaren 720S">McLaren 720S</option>
            <option value="Bugatti Chiron">Bugatti Chiron</option>
            <option value="Koenigsegg Jesko">Koenigsegg Jesko</option>

            
          </select>
        </label>
        <br />
        <label>
          Color:
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
