<template>
  <div>
    <input v-on:input="handleInput" type="number" id="numeric-input" />
    <div>{{ result }}</div>
  </div>
</template>

<script>
import debounce from "lodash.debounce";

export default {
  name: "InputWithConvertor",
  data() {
    return {
      input: 0,
      result: 0,
    };
  },
  methods: {
    handleInput: debounce(function (event) {
      const amount = Number.parseFloat(event.target.value);
      console.log(amount);
      if (!Number.isNaN(amount)) {
        this.input = amount;
        this.result = (this.$store.getters.getConversionRate * amount).toFixed(
          2
        );
      } else {
        this.input = 0;
        this.result = 0;
      }
    }, 500),
  },
};
</script>

<style>
input[type="number"] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
</style>
