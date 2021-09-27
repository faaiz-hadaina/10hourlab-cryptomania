import * as types from '../types';
import * as PapaParse from 'papaparse';
import axios from 'axios';

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: (header: any) => header.toLowerCase().replace(/\W/g, '_')
};
let fileEncoding = 'UTF-8';
const API_URL = 'https://min-api.cryptocompare.com/data/pricemulti?';

//This functon clears all uploaded data from the system
export const clearData = () => {
  return (dispatch: any, getState: any) => {
    dispatch({ type: types.CLEAR_DATA });
  };
};

//This function handles clicking any of the currency cards and sends data to the balance card
export const openCurrency = (name: string) => {
  return (dispatch: any, getState: any) => {
    const payload = {
      selectedAmount: getState().root.openedCurrencies[name],
      selectedCurrency: name
    };
    dispatch({ type: types.OPEN_CURRENCY, payload: payload });
  };
};

//This function handles clicking the items in the portfolio, gets all the currencies for that coin and displays in the My currency cards
export const openItem = (name: string, percentage_increase: number) => {
  return (dispatch: any, getState: any) => {
    const mainCurrency = getState().root.mainCurrency;
    const payload = {
      openedCurrencies: getState().root.currencydata[name],
      openedCoin: name,
      percentage_increase
    };
    dispatch({ type: types.OPEN_ITEM, payload: payload });
    dispatch(openCurrency(mainCurrency));
  };
};

//This function handles parsing of the CSV data and sending to the allAssets storage, calls the refresh, openItem and openCurrency functions
export const loadFile = (fileinput: string, type: number) => {
  return (dispatch: any, getState: any) => {
    const csvData = PapaParse.parse(
      fileinput as string,
      Object.assign(papaparseOptions, {
        error: () => console.log('error'),
        encoding: fileEncoding
      })
    );

    if (type === 1) {
      const refined: any = csvData?.data[0];
      const allCurrencies = Object.values(refined);
      const maincurrency = allCurrencies.splice(0, 1);

      const payload = {
        maincurrency,
        othercurrencies: allCurrencies
      };
      dispatch({ type: types.SET_CURRENCIES, payload: payload });
    } else {
      let refined: any = csvData?.data;
      let allAssets = getState().root.assets || {};

      refined.forEach((item: any) => {
        if (allAssets[item.coin_token]) {
          const totalcost =
            parseFloat(allAssets[item.coin_token].total_cost) +
            parseFloat(item.total_cost);
          const totalunits =
            parseFloat(allAssets[item.coin_token].unit) + parseFloat(item.unit);
          const noofupload = allAssets[item.coin_token].noofuploads + 1;
          const current_unitcost = allAssets[item.coin_token].unit_cost;
          const new_unitcost =
            parseFloat(item.total_cost) / parseFloat(item.unit);
          const unit_cost =
            parseFloat(current_unitcost) + parseFloat(new_unitcost.toFixed(2));
          console.log(unit_cost);

          allAssets[item.coin_token] = {
            ...item,
            dateupdated: 'Today',
            percentage_increase: 0,
            noofuploads: noofupload,
            total_cost: totalcost,
            unit: totalunits.toFixed(2),
            unit_cost: unit_cost.toFixed(2)
          };
        } else {
          const unit_cost = parseFloat(item.total_cost) / parseFloat(item.unit);
          allAssets[item.coin_token] = {
            ...item,
            noofuploads: 1,
            percentage_increase: 0,
            dateupdated: 'Today',
            unit_cost: unit_cost.toFixed(2)
          };
        }
      });
      const assetstoarray = ObjectToArray(allAssets);
      console.log(assetstoarray);
      const coinlist = assetstoarray.map((a: any) => a.coin_token);
      const payload = {
        allAssets,
        assetstoarray,
        coinlist
      };
      dispatch({ type: types.LOAD_ASSETS, payload: payload });
      dispatch(loadCurrency());
    }
  };
};

//This helper function converts the objects from CSV to array of Objects compatible to the Flatlist Component
function ObjectToArray(snapshot: any) {
  var returnArr: any = [];
  for (let obj in snapshot) {
    returnArr.push(snapshot[obj]);
  }
  return returnArr;
}

//This is the function that calls the Api endpoint and saves response to the Currency storage, it also handles the refresh function
export const loadCurrency = () => {
  return (dispatch: any, getState: any) => {
    const state = getState().root;
    const to_currency =
      state.mainCurrency + ',' + state.otherCurrencies.join(',');
    const coins = state.coinlist.join(',');
    const URL_FinalPart = 'fsyms=' + coins + '&tsyms=' + to_currency;
    dispatch({ type: types.LOADING_START });
    axios
      .get(API_URL + URL_FinalPart)
      .then((response) => {
        const allAssets = state.assets;

        Object.keys(response.data).forEach((item: any) => {
          const newprice = response.data[item][state.mainCurrency];
          const average_oldprice =
            parseFloat(allAssets[item].unit_cost) /
            parseFloat(allAssets[item].noofuploads);
          const increase = parseFloat(newprice) - average_oldprice;
          const percentageincrease = (increase / average_oldprice) * 100;
          allAssets[item].percentage_increase = percentageincrease.toFixed(0);
        });
        const assetstoarray = ObjectToArray(allAssets);
        const payload = {
          allAssets,
          assetstoarray,
          converted_currencies: response.data
        };
        dispatch({
          type: types.LOAD_CONVERTED_CURRENCIES,
          payload: payload
        });
        const name = coins.split(',')[0];
        dispatch(openItem(name, allAssets[name].percentage_increase));
        dispatch({ type: types.LOADING_END });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: types.LOADING_END
        });
      });
  };
};
