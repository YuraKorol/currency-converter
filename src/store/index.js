import Vue from "vue";
import Vuex from "vuex";
import exchangeRates from "@/store/modules/exchangeRates.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    exchangeRates
  }
});
