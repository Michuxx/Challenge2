import "./App.css";
import React from "react";
import CardFront from "./images/bg-card-front.png";
import CardBack from "./images/bg-card-back.png";

function App() {
  return (
    <div className="container">
      <div className="credit-site">
        <div className="credits-images-side">
          <div className="front-card">
            <img src={CardFront} alt="" />
          </div>
          <div className="back-card">
            <img src={CardBack} alt="" />
          </div>
        </div>
        <div className="user-form-side">
          <div className="user-form">
            <div className="card-name">
              <label>CARDHOLDER NAME</label>
              <br />
              <input type="text" name="" className="card-input" />
            </div>
            <br />
            <div className="card-number">
              <label>CARD NUMBER</label>
              <br />
              <input type="text" name="" className="card-input" />
            </div>
            <br />
            <br />
            <div className="expiration">
              <div className="card-expiration">
                <label>EXP. DATE (MM/YY)</label>
                <br />
                <input type="text" name="" className="card-input" size="2" />
                <input
                  type="text"
                  name=""
                  className="card-input"
                  size="2"
                  id="card-input-id"
                />
              </div>
              <div className="card-three-numbers">
                <label>CVC</label>
                <br />
                <input type="text" name="" className="card-input" />
              </div>
            </div>
            <button className="confirm-btn">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
