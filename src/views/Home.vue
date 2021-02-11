<template>
  <div class="home">
    <h1>Currency coverter</h1>
    <v-row
      class="my-4"
      style="width: 60%"
      justify="center"
    >
      <CurrencyListFrom />
      <SwipeBtn />
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
import CurrencyListFrom from "@/components/currencyEntry/CurrencyListFrom.vue";
import CurrencyListTo from "@/components/currencyEntry/CurrencyListTo.vue";
import SwipeBtn from "@/components/currencyEntry/SwipeBtn.vue";
import AmountFrom from "@/components/currencyEntry/AmountFrom.vue";
import AmountTo from "@/components/currencyEntry/AmountTo.vue";
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
    SwipeBtn,
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
