import React from "react";

//import motion and styled

import { motion } from "framer-motion";
import styled from "styled-components";

//redux

import { useSelector } from "react-redux";

//import components

import Card from "./Card";

const Main = () => {
  const { displayedCurrencies } = useSelector((state) => state.currencies);
  return (
    <>
      <MainContainer>
        <Cards>
          {displayedCurrencies.map((displayedCurrency) => (
            <Card
              displayedCurrency={displayedCurrency}
              key={displayedCurrency.name}
            />
          ))}
        </Cards>
      </MainContainer>
    </>
  );
};

const MainContainer = styled(motion.div)`
  padding: 0rem 3rem;
`;

const Cards = styled(motion.div)`
  margin-top: 1rem;
  min-height: 60vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;
export default Main;
