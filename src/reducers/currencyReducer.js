const initState = {
  currencies: [],
  rates: [],
  selectedCurrencies: [],
  displayedCurrencies: [],
  numberToConvert: 1,
  isLoading: true,
};

const currenciesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_CURRENCIES":
      return {
        ...state,
        currencies: action.payload.currencies,
        rates: action.payload.rates,
        isLoading: false,
      };
    case "LOADING_CURRENCY":
      return {
        ...state,
        isLoading: true,
      };
    case "UPDATE_RATES":
      return {
        ...state,
        rates: action.payload.rates,
      };
    case "ADD_CURRENCY":
      return {
        ...state,
        selectedCurrencies: action.payload.selectedCurrencies,
      };
    case "DISPLAY_CURRENCIES":
      return {
        ...state,
        displayedCurrencies: action.payload.displayedCurrencies,
      };
    case "UPDATE_BASE":
      return {
        ...state,
        currencies: action.payload.currencies,
        displayedCurrencies: action.payload.displayedCurrencies,
      };
    case "UPDATE_INPUT":
      return {
        ...state,
        numberToConvert: action.payload.numberToConvert,
      };
    case "DELETE_DISPLAYED_CURRENCIES":
      return {
        ...state,
        displayedCurrencies: action.payload.displayedCurrencies,
      };
    default:
      return { ...state };
  }
};

export default currenciesReducer;
