<template>
  <section class="container mx-auto py-20 px-3">
    <h2 class="text-center text-3xl lg:text-4xl text-primary font-bold">
      Testimonials.
    </h2>
    <p class="text-xl text-gray-500 text-center">
      This is what our client are saying
    </p>
    <div class="text-right mt-5">
        <ActionButton class="py-2 px-4">
            View more
        </ActionButton>
    </div>
    <div
      class="
      mt-4
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        xl:gap-14
      "
    >
      <div
        v-for="({ author, country, testimony }, index) in testimonials"
        :key="index"
        class="p-4 bg-light shadow-sm"
      >
        <h6 class="text-xl font-medium mb-1 text-black">
          {{ author }}
        </h6>
        <p class="text-gray-500 text-xs">
          {{ country }}
        </p>
        <p class="my-2 text-gray-500 text-sm">
          {{ testimony }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import ActionButton from './ActionButton.vue';
export default {
    name: "Testimonials",
    data() {
        return {
            testimonials: [
                {
                    author: "Alex Godwin",
                    country: "South Africa",
                    testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus",
                },
                {
                    author: "Alex Godwin",
                    country: "South Africa",
                    testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus",
                },
                {
                    author: "Alex Godwin",
                    country: "South Africa",
                    testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus",
                },
            ],
        };
    },
    components: { ActionButton }
};
</script>