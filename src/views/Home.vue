<template>
  <div class="home">
    <h1>Currency coverter</h1>
    <v-row
      class="my-4"
      style="width: 60%"
      justify="center"
    >
      <CurrencyListFrom />
      <SwapBtn />
      <CurrencyListTo />
    </v-row>
    <v-row
      justify="space-around"
      style="width: 60%"
    >
      <AmountFrom />
      <AmountTo />
    </v-row>
  </div>
</template>

<script>
import CurrencyListFrom from "@/components/currencyPanel/CurrencyListFrom.vue";
import CurrencyListTo from "@/components/currencyPanel/CurrencyListTo.vue";
import SwapBtn from "@/components/currencyPanel/SwapBtn.vue";
import AmountFrom from "@/components/currencyPanel/AmountFrom.vue";
import AmountTo from "@/components/currencyPanel/AmountTo.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  methods: {
    ...mapActions(["GET_EXCHANGE_RATES"]),
  },

  mounted() {
    this.GET_EXCHANGE_RATES();
  },
  components: {
    CurrencyListFrom,
    CurrencyListTo,
    SwapBtn,
    AmountFrom,
    AmountTo
  }
};
</script>

<style>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
