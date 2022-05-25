<template>
  <section class="container mx-auto py-20 px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="md:pr-20">
        <img
          src="@/assets/images/why-us.png"
          class="object-fit rounded-tr-50 rounded-bl-50"
          alt="property"
        />
      </div>
      <div class="flex">
        <div class="my-auto pt-5 md:pt-20">
          <h3 class="text-primary text-3xl font-medium">
            Why you should choose us.
          </h3>
          <p class="text-gray-800 text-lg pt-2">
            Creating quality urban lifestyles,building stronger communities
          </p>
          <div class="mt-4 grid grid-cols-2">
            <label class="flex items-center mb-3" v-for="(item, index) in checklistItems" :key="index">
              <input type="checkbox" class="form-checkbox rounded checked:bg-secondary" checked disabled />
              <span class="ml-2 text-black font-medium text-lg">
                {{item}}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhyUs",
  data() {
      return {
          checklistItems: [
              "World class", "Affordable", "Trusted", "Amenities"
          ]
      }
  },
};
</script>