<template>
  <section class="banner container h-5/6 mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 md:pt-16">
      <div class="order-2 md:order-1 md:pr-7">
        <h1 class="text-4xl lg:text-6xl font-medium text-primary">
          Helping you find the property of your dreams.
        </h1>
        <p class="py-5 md:py-8 text-xl">
            Creating quality urban lifestyles,building stronger communities
        </p>

        <div class="flex pt-1 md:pt-4">
            <ActionButton class="px-4">
                Learn More
            </ActionButton>
        </div>
      </div>
      <div class="md:order-2 mb-6 md:mb-0">
        <div class="relative">
          <div class="banner-property">
            <img
              src="@/assets/images/banner-property.png"
              class="object-fit rounded-tr-50 rounded-bl-50"
              alt="property"
            />
            <div class="bg-secondary p-6 absolute rounded-full dot hidden md:block shadow"></div>
          </div>
        </div>
      </div>
    </div>
    <SearchBar class="mt-10 md:mt-20 xl:mt-14" />
  </section>
</template>

<script>
import SearchBar from './SearchBar.vue';
export default {
    name: "Banner",
    components: { SearchBar }
};
</script>

<style scoped>
.rounded-tr-50 {
  border-top-right-radius: 35%;
}
.rounded-bl-50 {
    border-bottom-left-radius: 35%;
}
.dot {
    bottom: 0;
    left: 0;
}
</style>