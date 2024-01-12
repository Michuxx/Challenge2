import "./App.css";
import React from "react";

function App() {
  return (
    <div className="container">
      <div className="credit-site">
        <div className="credits-images-side">
          <div className="front-card">
            <div className="front-card-content">
              <div className="circles">
                <div className="big-circle"></div>
                <div className="small-circle"></div>
              </div>
              <div className="front-card-number-display">
                <p>1234 1234 1234 1234</p>
              </div>
              <div className="bottom-front-card-information-display">
                <p>Laura Braum</p>
                <p>12/12</p>
              </div>
            </div>
          </div>
          <div className="back-card">
            <div className="back-card-content">
              <p>000</p>
            </div>
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
