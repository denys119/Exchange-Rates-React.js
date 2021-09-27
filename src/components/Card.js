import React from "react";

//redux

import { useSelector, useDispatch } from "react-redux";

import {
  updateBase,
  updateInput,
  deleteDisplayed,
} from "../actions/currencyAction";

//import motion and styled

import { motion } from "framer-motion";
import styled from "styled-components";

const Card = ({ displayedCurrency }) => {
  const dispatch = useDispatch();
  const {
    currencies,
    numberToConvert,
    displayedCurrencies,
    selectedCurrencies,
    rates,
  } = useSelector((state) => state.currencies);
  let base = currencies.data.base;
  let last = Object.values(displayedCurrency);
  last = last[last.length - 1];
  const changeBaseHandler = () => {
    const abbreviation = displayedCurrency.abbreviation;
    dispatch(updateBase(currencies, abbreviation, displayedCurrencies, last));
  };

  const updateOtherInputs = (e) => {
    let number = e.target.value;
    dispatch(updateInput(number));
  };

  const deleteCurrencyHandler = () => {
    const name = displayedCurrency.name;
    dispatch(
      deleteDisplayed(name, displayedCurrencies, selectedCurrencies, rates)
    );
  };
  return (
    <>
      <CardContainer
        className={base === displayedCurrency.abbreviation ? "base" : ""}
      >
        <div className="discard">
          <span onClick={deleteCurrencyHandler}>X</span>
        </div>
        <div className="detail">
          <div className="flag">
            <img src={displayedCurrency.image} alt={displayedCurrency.name} />
            <div className="symbol">{displayedCurrency.symbol}</div>
            <input
              type="number"
              onClick={changeBaseHandler}
              onChange={updateOtherInputs}
              value={
                base === displayedCurrency.abbreviation
                  ? numberToConvert
                  : numberToConvert * last
              }
            />
          </div>
          <div className="currency">
            <h3>
              {displayedCurrency.abbreviation} - {displayedCurrency.name}
            </h3>
            <h3>
              1 {currencies.data.base} = {last} {displayedCurrency.abbreviation}
            </h3>
          </div>
        </div>
      </CardContainer>
    </>
  );
};

const CardContainer = styled(motion.div)`
  &.base {
    background: lightblue;
  }
  border: 1px solid black;
  height: 8rem;
  background: #e2dfdf;
  display: flex;
  flex-direction: column;
  .discard {
    display: flex;
    justify-content: flex-end;
    span {
      color: red;
      font-size: 0.7rem;
      font-weight: bold;
      cursor: pointer;
      padding: 0.2rem 0.5rem;
    }
  }
  .detail {
    display: flex;

    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    .flag {
      display: flex;
      align-items: center;
      img {
        width: 60px;
        height: 50px;
      }
      .symbol {
        padding: 0 0.5rem;
        font-weight: bold;
      }
    }
    .input {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
    .currency {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding-left: 5rem;
      h3 {
        font-size: 0.6rem;
        margin-top: 0.5rem;
      }
    }
  }
`;

export default Card;
