const baseURL = "http://api.exchangeratesapi.io/v1/";
const key = `${process.env.REACT_APP_API_KEY}`;
const symbols = "EUR,GBP,RUB,USD,JPY,RON";
export const currencyURL = `${baseURL}latest?access_key=${key}&symbols=${symbols}`;
