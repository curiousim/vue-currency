<template>
  <div>
    <div>{{ label }}</div>
    <VueSelect
      :value="value"
      @input="handleSelect"
      :options="options"
      label="name"
      class="select-component"
      :clearable="false"
    />
  </div>
</template>

<script>
import VueSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { CURRENCY_DESCRIPTION } from "../store/translation";

export default {
  name: "CurrencyDropdown",
  components: {
    VueSelect,
  },
  props: {
    value: String,
    label: String,
    filterOutValue: String,
  },
  computed: {
    options() {
      // filter out selected option
      return this.filterOutValue
        ? CURRENCY_DESCRIPTION.filter((value) => {
            return value.code !== this.filterOutValue;
          })
        : CURRENCY_DESCRIPTION;
    },
  },
  methods: {
    handleSelect(selected) {
      this.$emit("currencySelected", selected.code);
    },
  },
};
</script>
