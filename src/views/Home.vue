<template>
  <div>
    <hero></hero>
    <offer></offer>
    <services-hint></services-hint>
  </div>
</template>

<script lang="js">
import Hero from "../components/Hero";
import Offer from "../components/Offer";
import ServicesHint from "../components/ServicesHint";

export default {
  components: { Hero, Offer, ServicesHint }
};
</script>
