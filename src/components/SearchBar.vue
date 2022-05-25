<template>
  <div class="md:mx-10 bg-light search-bar px-5 py-6 rounded-2xl">
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
      <Dropdown title="Location" :values="locations" />
      <Dropdown title="Property Type" :values="propertyTpes" />
      <Dropdown title="Max Price" :values="prices" />
      <div class="text-center">
        <ActionButton class="px-7">Search</ActionButton>
      </div>
    </div>
  </div>
</template> 

<script>
import Dropdown from "./Dropdown.vue";
import ActionButton from "./ActionButton.vue";
export default {
  name: "SearchBar",
  components: { Dropdown, ActionButton },
  data() {
    return {
      locations: ["Nairobi", "Nakuru", "Mombasa"],
      propertyTpes: ["Villas", "Bungallows", "Estates"],
      prices: ["1M-2M", "2M-5M"] 
    };
  },
};
</script>

<style scoped>
.search-bar {
  box-shadow: 24px 24px 48px rgba(37, 73, 211, 0.05);
}
</style>