<template>
  <hr />
  <Banner class="px-2 sm:px-4" />
  <HowItWorks class="pb-24" />
  <WhyUs />
  <FeaturedProperties />
</template>

<script>
import Banner from "../components/Banner.vue";
import HowItWorks from '../components/HowItWorks.vue';
import WhyUs from '../components/WhyUs.vue';
import FeaturedProperties from "../components/FeaturedProperties.vue";
export default {
  components: { Banner, HowItWorks, WhyUs, FeaturedProperties },
  name: "Home",
};
</script>