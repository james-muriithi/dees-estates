<template>
  <section class="container mx-auto py-20">
    <div class="px-2">
      <h2 class="text-center text-3xl lg:text-4xl text-primary font-bold">
        Our featured properties.
      </h2>
      <p class="text-xl text-gray-500 text-center">
        One of our biggest product to be featured and that has sold out the
        most.
      </p>
    </div>
    <div class="text-right mt-5 pr-4">
      <ActionButton class="py-2 px-4"> View more </ActionButton>
    </div>
    <div
      class="
        mt-5
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        xl:gap-20
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
          rounded-tr-50
        "
      >
        <router-link to="#">
          <img
            :src="property.image"
            :alt="property.title"
            class="w-full object-fit h-2/3 rounded-tr-50 rounded-bl-50"
          />
        </router-link>
        <div class="description mt-4 mb-10 px-3">
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
import image1 from "@/assets/images/palace.png";
import image2 from "@/assets/images/ivy-rory.png";
import image3 from "@/assets/images/banner-property.png";

export default {
  name: "FeaturedProperties",
  data() {
    return {
      properties: [
        {
          title: "The palace",
          type: "Duplex",
          phase: "Lekki, phase 2",
          cost: "$2,000",
          image: image1,
        },
        {
          title: "Ivy Rory",
          type: "Duplex",
          phase: "Lekki, phase 2",
          cost: "$2,000",
          image: image2,
        },
        {
          title: "Rexona",
          type: "Duplex",
          phase: "Lekki, phase 2",
          cost: "$2,000",
          image: image3,
        },
      ],
    };
  },
};
</script>