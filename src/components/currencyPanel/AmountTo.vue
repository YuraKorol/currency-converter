<template>
  <v-card
    min-width="20%"
    max-width="40%"
    height="58px"
    outlined
  >
    <v-card-text style="color: black">
      {{ stateAmountTo == '0.000' || stateAmountTo == 'NaN' ? 0 : stateAmountTo }}
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed:{
    ...mapGetters(['stateAmountTo'])
  },
};
</script>

<style scoped>
  .v-sheet--outlined {
    border: 1.5px solid #9e9e9e !important;
  }
</style>
