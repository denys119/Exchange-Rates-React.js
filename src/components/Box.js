import React from "react";

//import motion and styled

import { motion } from "framer-motion";
import styled from "styled-components";

//redux

import { useSelector, useDispatch } from "react-redux";

import { updateRates, setSelectedCurrencies } from "../actions/currencyAction";

const Box = ({ rate, isAdded }) => {
  const dispatch = useDispatch();
  const { rates, selectedCurrencies } = useSelector(
    (state) => state.currencies
  );
  const addCurrencyHandler = () => {
    const key = rate.name;
    const newRates = [...rates];
    const rateToAdd = newRates.find((rate) => rate.name === key);
    rateToAdd.isAdded = !rateToAdd.isAdded;
    let newSelectedRates = [...selectedCurrencies];
    if (rateToAdd.isAdded) {
      newSelectedRates.push(rateToAdd);
      dispatch(setSelectedCurrencies(newSelectedRates));
    } else {
      newSelectedRates = newSelectedRates.filter((rate) => rate.name !== key);
      dispatch(setSelectedCurrencies(newSelectedRates));
    }
    dispatch(updateRates(newRates));
  };
  return (
    <>
      <BoxContainer
        onClick={addCurrencyHandler}
        className={isAdded ? "itemAdded" : ""}
      >
        <Flag>
          <img src={rate.image} alt="" />
        </Flag>
        <h3>
          {rate.abbreviation} <span>-</span>
        </h3>
        <h3>{rate.name}</h3>
      </BoxContainer>
    </>
  );
};

const BoxContainer = styled(motion.div)`
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fcf8f8;
  cursor: pointer;
  padding: 0rem 1rem;
  &.itemAdded {
    background: rgba(0, 0, 0, 0.2);
  }
  img {
    height: 3rem;
    width: 3rem;
  }
  h3 {
    padding: 0rem 0.4rem;
    font-size: 0.8rem;
  }
`;
const Flag = styled(motion.div)``;
export default Box;
