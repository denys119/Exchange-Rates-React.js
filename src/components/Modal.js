import React from "react";

//import motion and styled

import { motion } from "framer-motion";
import styled from "styled-components";
import { modalAnim, animButton } from "../Animation";

//Route
import { useHistory } from "react-router-dom";

//redux

import { useSelector, useDispatch } from "react-redux";

import { setDisplayedCurrencies, updateRates } from "../actions/currencyAction";

//import components

import Box from "./Box";

const Modal = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { rates, isLoading, selectedCurrencies } = useSelector(
    (state) => state.currencies
  );
  const exitModalHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const addCurrencies = () => {
    let newDisplayedCurrencies = [];
    let newRates = [...rates];
    for (let i = 0; i < selectedCurrencies.length; i++) {
      newDisplayedCurrencies = [
        ...newDisplayedCurrencies,
        selectedCurrencies[i],
      ];
      newRates = newRates.filter(
        (rate) => rate.name !== selectedCurrencies[i].name
      );
    }
    dispatch(updateRates(newRates));
    dispatch(setDisplayedCurrencies(newDisplayedCurrencies));
    history.push("/");
  };

  return (
    <>
      <Shadow onClick={exitModalHandler} className="shadow">
        {!isLoading && (
          <ModalContainer variants={modalAnim} initial="hidden" animate="show">
            {rates.map((rate) => (
              <Box key={rate.name} rate={rate} isAdded={rate.isAdded} />
            ))}
          </ModalContainer>
        )}

        <AddButton
          variants={animButton}
          initial="hidden"
          animate="show"
          onClick={addCurrencies}
        >
          Add Currency
        </AddButton>
      </Shadow>
    </>
  );
};

const AddButton = styled(motion.button)`
  width: 15rem;
  height: 2rem;
  border: none;
  border-radius: 2rem;
  background: #e9573e;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const ModalContainer = styled(motion.div)`
  min-height: 60vh;
  width: 15rem;
  background: #fafafa;
  border: 1px solid black;
  overflow-x: auto;
  margin-bottom: 2rem;
`;
const Shadow = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  .toggleShadow {
    display: none;
  }
`;
export default Modal;
