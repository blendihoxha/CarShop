import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
// import carsData from './carsData.json';

function CarList(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const [carsData, setCarsData] = useState([]);

  const API = "http://localhost:3000";

  const newCarList = carsData.filter((el) => el.type == "newCar");


  const filteredCars = newCarList.filter((car) =>
    car.make.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  useEffect( ()=>{
    fetch(`${API}/cars`)
    .then(response => response.json() )
    .then(data =>{
      setCarsData(data)
    })



  },[] )



  const closeCarContainer = () => {
    if(typeof props.showcarlist == "function") {
      props.showcarlist(false)
    }
  }

  const navigateToCar = (e,link) => {
   e.preventDefault();
   window.open(link, '_blank');


  }



  return (
    <div className='carlist'>
       <div className='loli'>

        <div className='loli1'>
          <h1 className='find-dream-car'>Find Your Dream Car</h1>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search by make or model"
              style={{padding: "1.375rem 5.75rem"}}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Group>
          <button className='buton' onClick={closeCarContainer}>Close</button>
        </div>
      <Row>
        {   
        carsData.length ?
        filteredCars.map((car) => (
          <Col md={4} key={car.id}>
            <Card >
            
                
              <img variant="top" src={car.image} />
              <Card.Body>
                <Card.Title>{car.make} {car.model}</Card.Title>
                <Card.Text className='blende'>
                  <p>Power: {car.power}</p>
                  <p>{car.description}</p>
                  <p>Price: {car.price}</p>
                  <buton onClick={(e) => navigateToCar(e,car.carlink)}>Shop</buton>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))
      :
      null
      }
      </Row>
    </div>
    </div>
   
  );
}



export default CarList;
