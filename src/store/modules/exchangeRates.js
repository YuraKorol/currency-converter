import axios from "axios";

export default {
  state: {
    exchangeRates: [],
    stateSelectedCurrencyFrom: [],
    stateSelectedCurrencyTo: [],
    stateAmountFrom: 0,
    stateAmountTo: 0,
  },
  mutations: {
    GET_EXCHANGE_RATES_TO_STATE(state, exchangeRates) {
      state.exchangeRates = Object.entries(exchangeRates.rates);
    },
    ADD_SELECTED_CURRENCY_FROM(state, selectedCurrencyFrom){
      state.stateSelectedCurrencyFrom = selectedCurrencyFrom
      state.stateAmountTo = state.stateAmountFrom * state.stateSelectedCurrencyTo[1]
    },
    ADD_SELECTED_CURRENCY_TO(state, selectedCurrencyTo){
      state.stateSelectedCurrencyTo = selectedCurrencyTo
      state.stateAmountTo = state.stateAmountFrom * state.stateSelectedCurrencyTo[1]
    },
    UPDATE_AMOUNT_FROM(state, amountFrom){
      state.stateAmountFrom = amountFrom
      state.stateAmountTo = state.stateAmountFrom * state.stateSelectedCurrencyTo[1]
    },
    SWAP_SELECTED_CURRENCIES(state){
      let swapContainer = state.stateSelectedCurrencyFrom
      state.stateSelectedCurrencyFrom = state.stateSelectedCurrencyTo
      state.stateSelectedCurrencyTo = swapContainer
      state.stateAmountTo = state.stateAmountFrom * state.stateSelectedCurrencyTo[1]
    }
    
  },
  actions: {
    SWAP_SELECTED_CURRENCIES({commit}){
      commit('SWAP_SELECTED_CURRENCIES')
    },
    UPDATE_AMOUNT_FROM({commit}, amountFrom){
      commit('UPDATE_AMOUNT_FROM', amountFrom)
    },
    ADD_SELECTED_CURRENCY_FROM({commit}, selectedCurrencyFrom) {
      commit('ADD_SELECTED_CURRENCY_FROM', selectedCurrencyFrom)
    },
    ADD_SELECTED_CURRENCY_TO({commit}, selectedCurrencyTo) {
      commit('ADD_SELECTED_CURRENCY_TO', selectedCurrencyTo)
    },
    async GET_EXCHANGE_RATES({ commit }, selectedCurrencyFrom) {
      try {
        let exchangeRates = await axios.get(
          `https://api.exchangeratesapi.io/latest?base=${selectedCurrencyFrom || "EUR"}`
        );
        commit("GET_EXCHANGE_RATES_TO_STATE", exchangeRates.data);
      } catch (error) {
        console.log(`ERROR: ${error}`);
      }
    }
  },
  getters: {
    allExchangeRates: state => state.exchangeRates,
    stateSelectedCurrencyFrom: state => state.stateSelectedCurrencyFrom,
    stateSelectedCurrencyTo: state => state.stateSelectedCurrencyTo,
    stateAmountTo: state => state.stateAmountTo.toFixed(3)
  }
};
