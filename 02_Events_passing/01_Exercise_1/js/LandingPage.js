
import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';



function LandingPage(props) {

  const showCar = () => {
    if(typeof props.showcarlist == "function") {
      props.showcarlist(true)
    }
  }
  const showHyperCar = () => {
    if(typeof props.showHyperCarList == "function") {
      props.showHyperCarList(true)
    }
  }
  return (
    <div className='bigbox'>
      
        <div className='landingpage'>
          <div className='foto'>
            
          </div>
          <div className='mido'>
          <h1>Welcome to our Dealership</h1>
          <p>We offer a wide selection of cars at great prices. Visit us today to find your dream car!</p>
          <button className='button' onClick={showCar}>View Our Cars</button>
          <button className='button' onClick={showHyperCar}>View Our HyperCars</button>
          </div>
      
      </div>
    </div>
  );
}





export default LandingPage;
