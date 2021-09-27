import React from "react";

//import motion and styled

import { motion } from "framer-motion";
import styled from "styled-components";
import { animHeader } from "../Animation";

//redux

import { useSelector } from "react-redux";

const Header = () => {
  //create a variable that contains the data from the currency reducer

  const { currencies, isLoading } = useSelector((state) => state.currencies);

  return (
    <>
      {!isLoading && (
        <HeaderContainer variants={animHeader} initial="hidden" animate="show">
          <Title>Currency Exchange</Title>
          <Date>{currencies.data.date}</Date>
        </HeaderContainer>
      )}
    </>
  );
};

const HeaderContainer = styled(motion.div)`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eeeaea;
`;

const Title = styled(motion.h1)`
  font-size: 1.3rem;
  font-weight: 600;
`;

const Date = styled(motion.h2)`
  font-size: 1rem;
  font-weight: lighter;
`;

export default Header;
