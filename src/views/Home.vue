<template>
  <hr />
  <Banner class="px-2 sm:px-4" />
  <HowItWorks class="pb-24" />
  <WhyUs />
</template>

<script>
import Banner from "../components/Banner.vue";
import HowItWorks from '../components/HowItWorks.vue';
import WhyUs from '../components/WhyUs.vue';
export default {
  components: { Banner, HowItWorks, WhyUs },
  name: "Home",
};
</script>