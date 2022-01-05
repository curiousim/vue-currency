<template>
  <main>
    <h2 class="list-title">Rates for {{ baseRateName }}</h2>
    <div class="overflow-scroll-gradient">
      <ul class="list-container" v-if="rates">
        <li v-for="currency in listOfCurrencies" v-bind:key="currency.code">
          <CurrencyListElement
            :name="currency.name"
            :code="currency.code"
            :rate="rates[currency.code]"
          />
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import CurrencyListElement from "../components/CurrencyListElement.vue";
import { CURRENCY_DESCRIPTION } from "../description";

export default {
  name: "Rates",
  components: {
    CurrencyListElement,
  },
  data() {
    return {
      listOfCurrencies: CURRENCY_DESCRIPTION,
    };
  },
  methods: {},
  computed: {
    baseRateName: function () {
      return (
        CURRENCY_DESCRIPTION.find(
          (currency) => currency.code === this.$store.state.baseCurrency
        ).name ?? ""
      );
    },
    rates: function () {
      return this.$store.state.rates;
    },
  },
  created() {
    if (!this.$store.state.rates) {
      this.$store.dispatch("fetchRates");
    }
  },
};
</script>

<style scoped>
.list-title {
  font-size: 20px;
  color: var(--dark-grey-blue);
  margin: 5px 0;
}

.list-container {
  height: 480px;
  width: 100%;
  overflow-y: scroll;
  padding: 10px 0;
}

.overflow-scroll-gradient {
  position: relative;
}
.overflow-scroll-gradient::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 20px;
  background: linear-gradient(
    var(--background-grey),
    rgba(255, 255, 255, 0.001)
  );
}
.overflow-scroll-gradient::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 25px;
  background: linear-gradient(
    rgba(255, 255, 255, 0.001),
    var(--background-grey)
  );
}
</style>
