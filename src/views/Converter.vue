<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <CurrencyDropdown
      :value="this.$store.state.baseCurrency"
      label="Base currency"
      @currencySelected="setBaseValue"
      :filterOutValue="this.$store.state.convertCurrency"
    />
    <CurrencyDropdown
      label="Convert to"
      :value="this.$store.state.convertCurrency"
      @currencySelected="setConvertValue"
      :filterOutValue="this.$store.state.baseCurrency"
    />
  </div>
</template>

<script>
import CurrencyDropdown from "@/components/CurrencyDropdown.vue";
// import store from "@/store";

export default {
  name: "Converter",
  components: {
    CurrencyDropdown,
  },
  methods: {
    setBaseValue: function (value) {
      this.$store.commit("setBaseCurrency", value);
      this.$store.dispatch("fetchRates", value);
    },
    setConvertValue: function (value) {
      this.$store.commit("setConvertCurrency", value);
    },
  },
  created() {
    this.$store.dispatch("fetchRates");
    console.log("Converter created");
  },
};
</script>
