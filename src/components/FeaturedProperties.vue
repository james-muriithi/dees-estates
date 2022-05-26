<template>
  <section class="container mx-auto py-20">
    <h2 class="text-center text-3xl lg:text-4xl text-primary font-bold">
      Our featured properties.
    </h2>
    <p class="text-xl text-gray-500 text-center">
      One of our biggest product to be featured and that has sold out the most.
    </p>
    <div
      class="
        mt-5
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        xl:gap-14
      "
    >
      <diV
        v-for="(property, index) in properties"
        :key="index"
        class="
          bg-light
          rounded
          shadow
          overflow-hidden
          hover:shadow-xl
          mx-6
          sm:mx-0
        "
      >
        <img
          :src="getImageUrl(`/src/assets/images/${property.image}`)"
          :alt="property.title"
          class="h-50 w-full object-fit"
        />
        <div class="description mt-4 mb-6 px-3">
          <div class="grid grid-cols-2">
            <router-link to="#">
              <h3 class="text-2xl font-medium text-black">
                {{ property.title }}
              </h3>
            </router-link>
            <p class="text-right text-gray-500 mt-auto">{{ property.type }}</p>
            <p class="text-gray-500 mt-2">{{ property.phase }}</p>
            <p class="text-gray-500 mt-2 text-right">{{ property.cost }}</p>
          </div>
        </div>
      </diV>
    </div>
  </section>
</template>

<script>
import imageUrl from "../mixins/imageUrl";

export default {
  name: "FeaturedProperties",
  mixins: [imageUrl],
  data() {
    return {
      properties: [
        {
          title: "The palace",
          type: "Duplex",
          phase: "Lekki, phase 2",
          cost: "$2,000",
          image: "palace.png",
        },
        {
          title: "Ivy Rory",
          type: "Duplex",
          phase: "Lekki, phase 2",
          cost: "$2,000",
          image: "ivy-rory.png",
        },
        {
          title: "Rexona",
          type: "Duplex",
          phase: "Lekki, phase 2",
          cost: "$2,000",
          image: "banner-property.png",
        },
      ],
    };
  },
};
</script>