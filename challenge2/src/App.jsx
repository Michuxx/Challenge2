import './App.css';
import React from 'react';
import CardFront from './images/bg-card-front.png';
import CardBack from './images/bg-card-back.png';

function App(){
  return (
      <div className="container">
        <div className='credit-site'>
          <div className="credits-images-side">
            <div className='front-card'>
            <img src={CardFront} alt="" />
            </div>
            <div className='back-card'>
              <img src={CardBack} alt="" />
            </div>
          </div>
          <div className="user-form-side">
              <p>CARDHOLDER NAME</p>
              <input type="text" name="" className="" /> 
              <br />
              <p>CARD NUMBER</p>
              <input type="text" name="" className="" />
              <br /><br />
              <input type="text" name="" id="" size="2"/>
              
          </div>
        </div>
      </div>
  );
  }

export default App
