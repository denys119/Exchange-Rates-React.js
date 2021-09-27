import React from "react";

//import motion and styled

import { motion } from "framer-motion";
import styled from "styled-components";
import { modalAnim } from "../Animation";

//Router

import { Link } from "react-router-dom";

const ButtonComponent = () => {
  return (
    <>
      <ButtonContainer variants={modalAnim} initial="hidden" animate="show">
        <Link to={`/currencies/`}>
          <Button>Add Currency</Button>
        </Link>
      </ButtonContainer>
    </>
  );
};

const Button = styled(motion.button)`
  width: 15rem;
  height: 2rem;
  border: none;
  border-radius: 2rem;
  background: #37b137;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const ButtonContainer = styled(motion.div)`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default ButtonComponent;
