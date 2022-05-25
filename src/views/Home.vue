<template>
  <hr />
  <Banner class="px-2 sm:px-4" />
  <HowItWorks class="pb-24" />
</template>

<script>
import Banner from "../components/Banner.vue";
import HowItWorks from '../components/HowItWorks.vue';
export default {
  components: { Banner, HowItWorks },
  name: "Home",
};
</script>