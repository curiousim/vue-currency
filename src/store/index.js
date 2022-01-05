import Vue from "vue";
import Vuex from "vuex";
import { fetchExchangeRates } from "../api/apiCalls.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseCurrency: "EUR",
    convertCurrency: null,
    rates: null,
  },
  getters: {
    getConversionRate: (state) => state.rates[state.convertCurrency],
  },
  mutations: {
    setBaseCurrency(state, currency) {
      state.baseCurrency = currency;
    },
    setConvertCurrency(state, currency) {
      state.convertCurrency = currency;
    },
    setRates(state, ratesObj) {
      state.rates = ratesObj;
    },
  },
  actions: {
    async fetchRates(context, currencyCode) {
      const responseObj = await fetchExchangeRates(
        currencyCode ?? context.state.baseCurrency
      );

      context.commit("setRates", responseObj.rates);
    },
  },
  modules: {},
});
