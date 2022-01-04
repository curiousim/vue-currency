<template>
  <div class="dropdown-container">
    <label class="dropdown-label">{{ label }}</label>
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
import { CURRENCY_DESCRIPTION } from "../util/translation";

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
  display: flex;
  flex-direction: column;
}

.dropdown-label {
  color: var(--dark-grey-blue);
  margin-bottom: 5px;
}

.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background-color: var(--background-grey);
  border: var(--grey-blue) 1px solid;
  color: var(--grey-blue);
  font-weight: 500;
}

.vs__selected,
.vs__dropdown-option {
  color: var(--grey-blue);
}

.vs__dropdown-option--highlight {
  background-color: var(--light-orange);
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: var(--grey-blue);
}
</style>
