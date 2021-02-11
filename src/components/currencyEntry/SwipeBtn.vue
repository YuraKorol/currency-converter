<template>
  <v-btn
      class="mx-2"
      fab
      small
      color="primary"
      @click="SWAP_SELECTED_CURRENCIES()"
    >
      <v-icon dark>
        mdi-bank-transfer
      </v-icon>
    </v-btn>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions(['SWAP_SELECTED_CURRENCIES'])
  },
};
</script>

<style></style>
