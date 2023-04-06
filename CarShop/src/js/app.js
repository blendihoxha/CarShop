import React, {useState} from 'react';
import ReactDOM from "react-dom";
import CarList from './CarList';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Header from './header';
import HyperList from './HyperList';
import Leasing from './Leasing'
import Location from './Location';
import Home from './Home';
import Service from './Services';
import OrderForm from './OrderForm';







function App() {

  const [showCars, setShowCars] = useState(false)
  const [showHyperCars, setShowHyperCars] = useState(false)
  
  
  const onshowcarlist =(parametriPrejLangindPage) =>{

    setShowCars(parametriPrejLangindPage)
  }
  const onshowHyperList =(parametriPrejLangindPage) =>{

    setShowHyperCars(parametriPrejLangindPage)
  }
  return (
    <div>
      <Header /> 
      <Home />
    
      <LandingPage showcarlist={onshowcarlist} showHyperCarList={onshowHyperList}/>
      {
        showCars ?
        <CarList showcarlist={onshowcarlist}/>
        :
        null
      }
      
      {
        showHyperCars
        ?

        <HyperList showcarlist={onshowHyperList}/>
        :
        null
      }
      <Leasing/>
      <Service/>
      <OrderForm/>
      <Location/>
      <Footer />
      </div>
      )
    }
    
    
    
    
    ReactDOM.render(<App />, document.getElementById("app"));
   
   
   
   
   
   
   
   
   
   
    


  
  
  