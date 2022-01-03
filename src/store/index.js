import Vue from "vue";
import Vuex from "vuex";
// import { fetchExchangeRates } from "../api/apiCalls.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseCurrency: "ILS",
    convertCurrency: null,
    rates: {
      AED: 1.181982,
      AFN: 33.378788,
      ALL: 34.311726,
      AMD: 154.501653,
      ANG: 0.580006,
      AOA: 177.136531,
      ARS: 33.037654,
      AUD: 0.443107,
      AWG: 0.579207,
      AZN: 0.547095,
      BAM: 0.55614,
      BBD: 0.643723,
      BDT: 27.583599,
      BGN: 0.554383,
      BHD: 0.121492,
      BIF: 644.569024,
      BMD: 0.321751,
      BND: 0.434557,
      BOB: 2.218954,
      BRL: 1.792549,
      BSD: 0.321646,
      BTC: 0.000007,
      BTN: 23.926513,
      BWP: 3.783695,
      BYN: 0.822902,
      BZD: 0.648822,
      CAD: 0.406845,
      CDF: 644.247009,
      CHF: 0.293402,
      CLF: 0.010092,
      CLP: 274.106754,
      CNH: 2.047534,
      CNY: 2.04497,
      COP: 1303.619388,
      CRC: 206.573705,
      CUC: 0.321806,
      CUP: 8.284515,
      CVE: 31.368072,
      CZK: 7.036766,
      DJF: 57.186183,
      DKK: 2.104138,
      DOP: 18.458903,
      DZD: 44.658534,
      EGP: 5.054304,
      ERN: 4.825873,
      ETB: 15.81285,
      EUR: 0.282986,
      FJD: 0.683568,
      FKP: 0.23798,
      GBP: 0.23801,
      GEL: 0.995743,
      GGP: 0.238051,
      GHS: 1.978864,
      GIP: 0.237929,
      GMD: 16.971038,
      GNF: 3000.051721,
      GTQ: 2.483541,
      GYD: 67.291771,
      HKD: 2.508347,
      HNL: 7.850122,
      HRK: 2.126798,
      HTG: 32.266182,
      HUF: 104.466488,
      IDR: 4581.955433,
      ILS: 1,
      IMP: 0.238162,
      INR: 23.973614,
      IQD: 469.713401,
      IRR: 13600.769946,
      ISK: 41.756323,
      JEP: 0.237987,
      JMD: 49.544115,
      JOD: 0.228323,
      JPY: 37.03266,
      KES: 36.402787,
      KGS: 27.275673,
      KHR: 1309.406266,
      KMF: 139.908479,
      KPW: 289.549317,
      KRW: 382.488182,
      KWD: 0.097551,
      KYD: 0.26819,
      KZT: 139.978697,
      LAK: 3598.45334,
      LBP: 486.764674,
      LKR: 65.28443,
      LRD: 46.689845,
      LSL: 5.131429,
      LYD: 1.48015,
      MAD: 2.985724,
      MDL: 5.711653,
      MGA: 1275.625318,
      MKD: 17.519234,
      MMK: 572.153486,
      MNT: 920.3395,
      MOP: 2.584893,
      MRU: 12.049578,
      MUR: 14.026259,
      MVR: 4.95473,
      MWK: 261.881588,
      MXN: 6.594738,
      MYR: 1.343712,
      MZN: 20.542133,
      NAD: 5.1314,
      NGN: 132.533417,
      NIO: 11.389181,
      NOK: 2.837286,
      NPR: 38.282935,
      NZD: 0.47037,
      OMR: 0.124101,
      PAB: 0.32176,
      PEN: 1.283791,
      PGK: 1.134194,
      PHP: 16.407837,
      PKR: 57.346984,
      PLN: 1.298369,
      PYG: 2213.950027,
      QAR: 1.171444,
      RON: 1.399894,
      RSD: 33.261331,
      RUB: 24.062279,
      RWF: 326.547269,
      SAR: 1.208077,
      SBD: 2.604165,
      SCR: 4.447026,
      SDG: 140.75312,
      SEK: 2.911617,
      SGD: 0.434162,
      SHP: 0.237988,
      SLL: 3638.668463,
      SOS: 187.885549,
      SRD: 6.69459,
      SSP: 41.907677,
      STD: 6809.856631,
      STN: 7.061944,
      SVC: 2.815704,
      SYP: 808.325109,
      SZL: 5.13153,
      THB: 10.679729,
      TJS: 3.636388,
      TMT: 1.129324,
      TND: 0.92547,
      TOP: 0.731812,
      TRY: 4.285715,
      TTD: 2.18586,
      TWD: 8.917343,
      TZS: 741.889703,
      UAH: 8.779208,
      UGX: 1140.734868,
      USD: 0.321662,
      UYU: 14.383768,
      UZS: 3481.025194,
      VES: 1.475028,
      VND: 7325.595156,
      VUV: 36.414446,
      WST: 0.837146,
      XAF: 185.542831,
      XAG: 0.014064,
      XAU: 0.000372,
      XCD: 0.869607,
      XDR: 0.229583,
      XOF: 185.542826,
      XPD: 0.000377,
      XPF: 33.754076,
      XPT: 0.000483,
      YER: 80.510851,
      ZAR: 5.132029,
      ZMW: 5.361201,
      ZWL: 103.594282,
    },
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
    async fetchRates(_, currencyCode) {
      // async fetchRates(context, currencyCode) {
      // const responseObj = await fetchExchangeRates(
      //   currencyCode ?? context.state.baseCurrency
      // );
      console.log(currencyCode);
      // context.commit("setRates", responseObj.rates);
    },
  },
  modules: {},
});
