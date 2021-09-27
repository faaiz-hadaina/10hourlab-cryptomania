import * as types from '../types';

const assetsReducer = (state: any = { loading: false }, action: any) => {
  switch (action.type) {
    case types.LOADING_START:
      return {
        ...state,
        loading: true
      };
    case types.LOADING_END:
      return {
        ...state,
        loading: false
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
        state: { loading: false }
      };
    default:
      return state;
  }
};

export default assetsReducer;
