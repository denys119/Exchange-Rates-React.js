import axios from "axios";

import { currencyURL } from "../api";

import data from "../util";

export const loadCurrencies = () => async (dispatch) => {
  dispatch({
    type: "LOADING_CURRENCY",
  });
  //FETCH AXIOS
  let currenciesData = await axios.get(currencyURL);

  let result = Object.keys(currenciesData.data.rates).map((k) => ({
    [k]: currenciesData.data.rates[k],
  }));

  const detailCurrrency = data();

  for (let i = 0; i < detailCurrrency.length; i++) {
    result[i] = { ...detailCurrrency[i], ...result[i] };
  }
  currenciesData.data.rates = result;

  dispatch({
    type: "FETCH_CURRENCIES",
    payload: {
      currencies: currenciesData,
      rates: result,
    },
  });
};

export const updateRates = (rates) => (dispatch) => {
  dispatch({
    type: "UPDATE_RATES",
    payload: {
      rates: rates,
    },
  });
};

export const setSelectedCurrencies = (selectedCurrencies) => (dispatch) => {
  dispatch({
    type: "ADD_CURRENCY",
    payload: {
      selectedCurrencies: selectedCurrencies,
    },
  });
};

export const setDisplayedCurrencies = (displayedCurrencies) => (dispatch) => {
  dispatch({
    type: "DISPLAY_CURRENCIES",
    payload: {
      displayedCurrencies: displayedCurrencies,
    },
  });
};

export const updateBase =
  (currencies, base, displayedCurrencies, currentLast) => (dispatch) => {
    const newDisplayedCurrencies = [...displayedCurrencies];
    for (let i = 0; i < newDisplayedCurrencies.length; i++) {
      let last = Object.values(newDisplayedCurrencies[i]);
      last = last[last.length - 1];
      let newLast = last / currentLast;
      newDisplayedCurrencies[i][
        Object.keys(newDisplayedCurrencies[i])[
          Object.keys(newDisplayedCurrencies[i]).length - 1
        ]
      ] = newLast;
    }

    const newBase = base;
    currencies.data.base = newBase;
    dispatch({
      type: "UPDATE_BASE",
      payload: {
        currencies: currencies,
        displayedCurrencies: newDisplayedCurrencies,
      },
    });
  };

export const updateInput = (newnumber) => (dispatch) => {
  dispatch({
    type: "UPDATE_INPUT",
    payload: {
      numberToConvert: newnumber,
    },
  });
};

export const deleteDisplayed =
  (name, displayedCurrencies, selectedCurrencies, rates) => (dispatch) => {
    let newDisplayedCurrencies = [...displayedCurrencies];
    let newSelectedCurrencies = [...selectedCurrencies];

    const rateToAdd = displayedCurrencies.find(
      (currency) => currency.name === name
    );
    rateToAdd.isAdded = !rateToAdd.isAdded;

    newDisplayedCurrencies = newDisplayedCurrencies.filter(
      (currency) => currency.name !== name
    );

    newSelectedCurrencies = newSelectedCurrencies.filter(
      (currency) => currency.name !== name
    );

    rates.push(rateToAdd);
    dispatch({
      type: "DISPLAY_CURRENCIES",
      payload: {
        displayedCurrencies: newDisplayedCurrencies,
      },
    });
    dispatch({
      type: "ADD_CURRENCY",
      payload: {
        selectedCurrencies: newSelectedCurrencies,
      },
    });
    dispatch({
      type: "UPDATE_RATES",
      payload: {
        rates: rates,
      },
    });
  };
