<template>
  <div>
    <img alt="Exchange logo" src="../assets/exchange-logo.png" width="200px" />
    <CurrencyDropdown
      :value="this.$store.state.baseCurrency"
      label="Select currency"
      @currencySelected="setBaseValue"
      :filterOutValue="this.$store.state.convertCurrency"
    />
    <CurrencyDropdown
      label="Convert to"
      :value="this.$store.state.convertCurrency"
      @currencySelected="setConvertValue"
      :filterOutValue="this.$store.state.baseCurrency"
    />
    <InputWithConvertor v-if="this.$store.state.convertCurrency" />
  </div>
</template>

<script>
import CurrencyDropdown from "@/components/CurrencyDropdown.vue";
import InputWithConvertor from "@/components/InputWithConvertor.vue";

export default {
  name: "Home",
  components: {
    CurrencyDropdown,
    InputWithConvertor,
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
  },
};
</script>
