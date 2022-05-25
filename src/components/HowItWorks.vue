<template>
  <section class="container mx-auto">
    <h2 class="text-center text-3xl lg:text-4xl text-primary font-bold">
      How it works.
    </h2>
    <p class="text-xl text-gray-500 text-center">
      This is how our products works
    </p>
    <div class="pt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-28">
      <div
        v-for="({ title, description, image }, index) in processes"
        :key="index"
        class="
          bg-light
          rounded
          shadow
          py-20
          px-10
          overflow-hidden
          hover:shadow-xl
          mx-6
          sm:mx-0
        "
      >
        <div class="service-icon py-4">
          <img
            :src="`/src/assets/images/${image}`"
            :alt="title"
            class="h-18 w-auto mx-auto"
          />
        </div>
        <h5 class="text-xl text-center text-black font-medium pt-4">
          {{ title }}
        </h5>
        <p class="text-center text-gray-400 pt-3">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "HowItWorks",
  data() {
    return {
      processes: [
        {
          title: "Find Home",
          description:
            "Our properties are located at prime areas where by there won't be problem with transportation ",
          image: "address.svg",
        },
        {
          title: "Make payments ",
          description:
            "Our estates comes with good network,portable water , 24hrs light and round the clock security.",
          image: "smart-house.svg",
        },
        {
          title: "Make it Official ",
          description:
            "We have been in business for over 32 years,for client outside the country you can trust  us to deliver well. ",
          image: "secure.svg",
        },
      ],
    };
  },
};
</script>