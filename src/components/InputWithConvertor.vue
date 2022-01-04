<template>
  <div class="converter-container">
    <label class="converter-label">Amount</label>
    <input v-on:input="handleInput" type="number" id="numeric-input" />
    <label class="converter-label">Result</label>
    <div class="converter-result">{{ result }}</div>
  </div>
</template>

<script>
import debounce from "lodash.debounce";
import { mapGetters } from "vuex";

export default {
  name: "InputWithConvertor",
  data() {
    return {
      input: 0,
      result: 0,
    };
  },
  computed: {
    ...mapGetters(["getConversionRate"]),
  },
  methods: {
    handleInput: debounce(function (event) {
      const amount = Number.parseFloat(event.target.value);

      if (!Number.isNaN(amount)) {
        this.input = amount;
        this.result = (this.getConversionRate * amount).toFixed(4);
      } else {
        this.input = 0;
        this.result = 0;
      }
    }, 500),
  },
  watch: {
    getConversionRate: function () {
      this.result = (this.getConversionRate * this.input).toFixed(4);
    },
  },
};
</script>

<style scoped>
.converter-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.converter-label {
  color: var(--dark-grey-blue);
  margin-bottom: 5px;
}
.converter-result {
  color: var(--dark-grey-blue);
  font-weight: 500;
  font-size: 28px;
}

#numeric-input,
#numeric-input:focus {
  width: 150px;
  background-color: var(--background-grey);
  border: var(--grey-blue) 1px solid;
  color: var(--grey-blue);
  font-weight: 500;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  outline: 3px solid transparent;
  margin-bottom: 15px;
  text-align: center;
}

#numeric-input[disabled] {
  --input-border: #ccc;

  background-color: #eee;
  cursor: not-allowed;
}
</style>
