<template>
  <div class="my-autos relative mb-3 md:mb-0">
    <button
      id="dropdownNavbarLink"
      data-dropdown-toggle="dropdownNavbar"
      @click="show = !show"
      v-click-away="clickAway"
      class="
        flex
        items-center
        content-center
        w-full
        py-2
        pl-3
        pr-4
        font-medium
        text-secondary
        bg-transparent
        md:border-0 md:hover:text-secondary md:p-0 md:w-auto
        transition
        duration-300
      "
    >
      {{ title }}
      <svg
        class="w-6 h-6 ml-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <span class="text-gray-400 pl-3 pr-4 md:p-0">
      {{ selectedValue }}
    </span>
    <transition name="slide-in-up">
      <div
        id="dropdownNavbar"
        class="
          z-10
          bg-light
          divide-y divide-gray-100
          rounded
          shadow
          w-44
          absolute
          mt-2
        "
        v-if="show"
      >
        <ul class="text-sm text-gray-400" aria-labelledby="dropdownLargeButton">
          <li v-for="value in values" :key="value" @click="selectValue(value)">
            <a
              href="#"
              class="block px-4 py-2 hover:bg-secondary hover:text-white transition duration-300"
              :class="{'bg-secondary text-light': selectedValue === value}"
            >
              {{ value }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    title: {
      type: String,
      required: true,
    },
    values: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      show: false,
      selectedValue: "",
    };
  },
  methods: {
    selectValue(value) {
      this.selectedValue = value;
      this.show = false;
    },
    clickAway(){
        if(this.show) this.show = false
    }
  },
  created(){

  }
};
</script>

<style scoped>
.slide-in-up-enter-active,
.slide-in-up-leave-active {
  transition: all 0.5s;
  transform: translateY(0);
}
.slide-in-up-enter,
.slide-in-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>