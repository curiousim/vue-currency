<template>
  <div class="dropdown-container">
    <div>{{ label }}</div>
    <VueSelect
      :value="value"
      @input="handleSelect"
      :options="options"
      label="name"
      class="style-chooser"
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

<style>
.dropdown-container {
  margin: 15px 0;
}

.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background-color: #e2e4e5;
  border: #5b738b 1px solid;
  color: #5b738b;
  font-weight: 500;
}

.vs__selected,
.vs__dropdown-option {
  color: #495e74;
}

.vs__dropdown-option--highlight {
  background-color: #f8b153;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: #5b738b;
}
</style>
