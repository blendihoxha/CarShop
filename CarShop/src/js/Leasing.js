import React from 'react';

const Leasing = () => {
  const carName = 'BMW M3';
  const carCost = 65000;
  const downPayment = carCost * 0.2;
  const monthlyPayment = 2000;
  
  return (
    <div className='leasing'>
      <div className='leas'>
      <h1>Leasing</h1>
      <p>Leasing a car is a type of financing where the customer essentially rents the car for a set period of time, typically 2-4 years. During this time, the customer makes monthly payments and has the option to buy the car at the end of the lease term.</p>
      <h2>Benefits of Leasing</h2>
      <ul>
        <li>Lower monthly payments compared to buying a car outright</li>
        <li>Driving a newer car without the upfront cost</li>
        <li>No need to worry about selling the car or trading it in</li>
      </ul>
      <h2>Requirements for Leasing</h2>
      <ul>
        <li>Good credit score</li>
        <li>Steady source of income</li>
        <li>Possible security deposit or down payment</li>
      </ul>
      <h2>Leasing Process for {carName}</h2>
      <ol>
        <li>Choose the {carName} you want to lease</li>
        <li>Make a down payment of ${downPayment}</li>
        <li>Pay ${monthlyPayment} per month for the duration of the lease term</li>
        <li>The lease term is typically 2-4 years</li>
        <li>You have the option to buy the {carName} at the end of the lease term</li>
      </ol>
      </div>
      <div className='foto1'>
       
      </div>
    </div>
  );
};

export default Leasing;
