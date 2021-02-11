<template>
  <v-autocomplete
    v-model="selectedCurrencyFrom"
    :items="allExchangeRates"
    :item-text="stateSelectedCurrencyFrom => stateSelectedCurrencyFrom[0]"
    return-object
    outlined
    dense
    chips
    small-chips
    label="From"
  ></v-autocomplete>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      selectedCurrencyFrom: this.stateSelectedCurrencyFrom,
    };
  },
  computed: {
    ...mapGetters(['stateSelectedCurrencyFrom', 'allExchangeRates']),
  },
  watch: {
    selectedCurrencyFrom() {
      this.$store.dispatch('ADD_SELECTED_CURRENCY_FROM', this.selectedCurrencyFrom)
      this.$store.dispatch('GET_EXCHANGE_RATES', this.selectedCurrencyFrom[0])
    },
    stateSelectedCurrencyFrom(){
      this.selectedCurrencyFrom = this.stateSelectedCurrencyFrom
    }
  },
};
</script>

<style>

</style>
