import * as types from '../types';

const assetsReducer = (state = {}, action: any) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case types.SET_CURRENCIES:
      return {
        ...state,
        mainCurrency: action.payload.maincurrency,
        otherCurrencies: action.payload.othercurrencies
      };
    case types.OPEN_ITEM:
      return {
        ...state,
        openedCurrencies: action.payload.openedCurrencies,
        openedCoin: action.payload.openedCoin,
        percentage_increase: action.payload.percentage_increase
      };
    case types.OPEN_CURRENCY:
      return {
        ...state,
        selectedAmount: action.payload.selectedAmount,
        selectedCurrency: action.payload.selectedCurrency
      };
    case types.LOAD_ASSETS:
      return {
        ...state,
        assets: action.payload.allAssets,
        assetstoarray: action.payload.assetstoarray,
        coinlist: action.payload.coinlist
      };
    case types.LOAD_CONVERTED_CURRENCIES:
      return {
        ...state,
        assets: action.payload.allAssets,
        assetstoarray: action.payload.assetstoarray,
        currencydata: action.payload.converted_currencies
      };

    case types.CLEAR_DATA:
      return {
        state: {}
      };
    default:
      return state;
  }
};

export default assetsReducer;
