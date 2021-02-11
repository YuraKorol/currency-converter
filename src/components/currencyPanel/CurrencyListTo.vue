<template>
  <v-autocomplete
    v-model="selectedCurrencyTo"
    :items="allExchangeRates"
    :item-text="stateSelectedCurrencyTo => stateSelectedCurrencyTo[0]"
    return-object
    outlined
    dense
    chips
    small-chips
    label="To"
  ></v-autocomplete>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      selectedCurrencyTo: this.stateSelectedCurrencyTo,
    };
  },
  computed: {
    ...mapGetters(['stateSelectedCurrencyTo', 'allExchangeRates'])
  },
  watch: {
    selectedCurrencyTo(){
      this.$store.dispatch('ADD_SELECTED_CURRENCY_TO', this.selectedCurrencyTo)
    },
    stateSelectedCurrencyTo(){
      this.selectedCurrencyTo = this.stateSelectedCurrencyTo
    }
  },
};
</script>

<style>

</style>
