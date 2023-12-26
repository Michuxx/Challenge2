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
            <img src={CardFront} alt="" className="card-image" />
          </div>
          <div className="back-card">
            <img src={CardBack} alt="" className="card-image" />
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
                <div className="card-expiration-label">
                  <label>EXP. DATE (MM/YY)</label>
                </div>
                <div className="card-expiration-inputs">
                  <input type="text" name="" className="card-input" />
                  <input
                    type="text"
                    name=""
                    className="card-input"
                    id="card-input-id"
                  />
                </div>
              </div>
              <div className="card-three-numbers">
                <div className="card-three-numbers-label">
                  <label>CVC</label>
                </div>
                <div className="card-three-numbers-input">
                  <input type="text" name="" className="card-input" />
                </div>
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
