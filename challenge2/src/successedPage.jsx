import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import Icon_complete from "/icon-complete.svg";

const successedPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  const DissmissFunction = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="credit-site">
      <div className="credits-images-side">
        <div className="front-card">
          <div className="front-card-content">
            <div className="circles">
              <div className="big-circle"></div>
              <div className="small-circle"></div>
            </div>
            <div className="front-card-number-display">
              <p>{state.number}</p>
            </div>
            <div className="bottom-front-card-information-display">
              <p>{state.name}</p>
              <p>
                {state.month}/{state.year}
              </p>
            </div>
          </div>
        </div>
        <div className="back-card">
          <div className="back-card-content">
            <p>{state.cvc}</p>
          </div>
        </div>
      </div>
      <div className="user-form-side">
        <div className="success-side">
          <img src={Icon_complete} alt="" />
          <h1>THANK YOU!</h1>
          <p>We've added your card details</p>
          <button className="confirm-btn" onClick={DissmissFunction}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default successedPage;
