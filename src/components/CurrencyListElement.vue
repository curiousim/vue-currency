<template>
  <div class="currency-list-element">
    <span class="element-title element-text"> {{ code }} - {{ name }} </span>
    <span class="element-amount">{{ rateToFixed }}</span>
  </div>
</template>

<script>
export default {
  name: "CurrencyListElement",
  props: {
    code: String,
    name: String,
    rate: Number,
  },
  computed: {
    rateToFixed() {
      if (this.rate) {
        return this.rate.toFixed(4);
      }
      return "";
    },
  },
};
</script>

<style>
.currency-list-element {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

.element-amount {
  color: var(--dark-grey-blue);
  margin-top: 5px;
}

.element-title {
  color: var(--grey-blue);
  border-bottom: var(--light-orange) 2px solid;
  width: 80%;
}
</style>
