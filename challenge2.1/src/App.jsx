import "./App.css";
import React, { useEffect, useState } from "react";
import Input from "react-input-auto-format";
import { useNavigate } from "react-router-dom";

function App() {
  const [inputFields, setInputFields] = useState({
    cardHolderName: "",
    cardNumber: "",
    expDateMonth: "",
    expDateYear: "",
    cardCVC: "",
  });

  const [error, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const validateValues = (inputValues) => {
    let errors = {};
    let re_month = /^(0[1-9]|1[0-2])/;
    let re_year = /([0-9]{4}|[0-9]{2})$/;
    let re_aplh = /^[0-9]/;
    if (!inputValues.cardHolderName) {
      errors.cardHolderName = "Can't be blank";
    }
    if (
      !re_aplh.test(inputValues.cardNumber) ||
      inputValues.cardNumber?.length != 19
    ) {
      errors.cardNumber = "Incorrect card number";
    }

    if (
      !re_month.test(inputValues.expDateMonth) ||
      inputValues.expDateMonth === null
    ) {
      errors.expDateMonth = "Incorrect month";
    }
    if (
      !re_year.test(inputValues.expDateYear) ||
      inputValues.expDateYear === null
    ) {
      errors.expDateYear = "Incorrect year";
    }
    if (
      !inputValues.cardCVC.search("[a-zA-Z]") ||
      inputValues.cardCVC.length != 3
    ) {
      errors.cardCVC = "Incorrect CVC";
    } else {
      navigate("/SuccessedPage", {
        replace: true,
        state: {
          name: inputFields.cardHolderName,
          number: inputFields.cardNumber,
          month: inputFields.expDateMonth,
          year: inputFields.expDateYear,
          cvc: inputFields.cardCVC,
        },
      });
    }
    console.log(errors);

    return errors;
  };

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };

  const finishSubmit = () => {
    console.log(inputFields);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && submitting) {
      finishSubmit();
    }
  }, [error]);

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
              <p>{inputFields.cardNumber}</p>
            </div>
            <div className="bottom-front-card-information-display">
              <p>{inputFields.cardHolderName}</p>
              <p>
                {inputFields.expDateMonth}
                {inputFields.expDateMonth ? "/" : null}
                {inputFields.expDateYear}
              </p>
            </div>
          </div>
        </div>
        <div className="back-card">
          <div className="back-card-content">
            <p>{inputFields.cardCVC}</p>
          </div>
        </div>
      </div>
      <div className="user-form-side">
        <div className="user-form">
          <div className="card-name">
            <label>CARDHOLDER NAME</label>
            <br />
            <input
              type="text"
              name="cardHolderName"
              className="card-input"
              placeholder="e.g. Jane Appleseed"
              value={inputFields.cardHolderName}
              onChange={handleChange}
              style={{ border: error.cardHolderName ? "1px solid red" : null }}
            />
            <p className="error_p">
              {error.cardHolderName ? "Can't be blank" : null}
            </p>
          </div>
          <br />
          <div className="card-number">
            <label>CARD NUMBER</label>
            <br />
            <Input
              format="#### #### #### ####"
              type="text"
              name="cardNumber"
              className="card-input"
              placeholder="e.g. 1234 5678 9123 0000"
              value={inputFields.cardNumber}
              onChange={handleChange}
              style={{ border: error.cardNumber ? "1px solid red" : null }}
            />

            <p className="error_p">
              {error.cardNumber ? "Wrong format, numbers only" : null}
            </p>
          </div>
          <br />
          <br />
          <div className="expiration">
            <div className="card-expiration">
              <div className="card-expiration-label">
                <label>EXP. DATE (MM/YY)</label>
              </div>
              <div className="card-expiration-inputs">
                <input
                  type="tel"
                  name="expDateMonth"
                  className="card-input"
                  placeholder="MM"
                  maxLength="2"
                  value={inputFields.expDateMonth}
                  onChange={handleChange}
                  style={{
                    border: error.expDateMonth ? "1px solid red" : null,
                  }}
                />

                <input
                  type="text"
                  name="expDateYear"
                  className="card-input"
                  id="card-input-id"
                  placeholder="YY"
                  maxLength="2"
                  value={inputFields.expDateYear}
                  onChange={handleChange}
                  style={{ border: error.expDateYear ? "1px solid red" : null }}
                />
                <p className="error_p">
                  {error.expDateMonth || error.expDateYear
                    ? "Can't be blank"
                    : null}
                </p>
              </div>
            </div>
            <div className="card-three-numbers">
              <div className="card-three-numbers-label">
                <label>CVC</label>
              </div>
              <div className="card-three-numbers-input">
                <input
                  type="text"
                  name="cardCVC"
                  className="card-input"
                  placeholder="e.g. 123"
                  maxLength="3"
                  value={inputFields.cardCVC}
                  onChange={handleChange}
                  style={{ border: error.cardCVC ? "1px solid red" : null }}
                />
                <p className="error_p">
                  {error.cardCVC ? "Can't be blank" : null}
                </p>
              </div>
            </div>
          </div>
          <button className="confirm-btn" onClick={handleSubmit}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
