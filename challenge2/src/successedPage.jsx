import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";

const successedPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

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
    </div>
  );
};

export default successedPage;
