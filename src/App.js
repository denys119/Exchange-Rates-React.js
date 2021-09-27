import React, { useEffect } from "react";

//Route
import { Switch, Route, useLocation } from "react-router-dom";

//Global Style

import GlobalStyle from "./components/GlobalStyle";

//Redux

import { useDispatch } from "react-redux";

import { loadCurrencies } from "./actions/currencyAction";

//Import components

import Header from "./components/Header";

import Main from "./components/Main";

import Modal from "./components/Modal";

import ButtonComponent from "./components/ButtonComponent";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCurrencies());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/currencies" exact>
            <Modal />
          </Route>
        </Switch>
        {location.pathname === "/" ? <ButtonComponent /> : ""}
      </div>
    </>
  );
}

export default App;
