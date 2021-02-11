<template>
  <v-text-field
    label="Enter the amount"
    :rules="validationRules"
    v-model.number="amountFrom"
    outlined
    style="max-width: 20%"
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      amountFrom: 0,
      validationRules: [
        value => typeof value == 'number' || "Only numbers",
        value => value >= 0 || 'Min number is 0'
      ]
    };
  },
  watch: {
    amountFrom(){
      this.$store.dispatch('UPDATE_AMOUNT_FROM', this.amountFrom)
    }
  }
};
</script>

<style>

</style>
