<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-3 lg:py-7">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <router-link :to="{ name: 'home' }" class="flex items-center">
        <img src="@/assets/images/logo.svg" class="mr-3 h-5" alt="Logo" />
      </router-link>

      <NavbarToggleButton @click="$emit('toggleMenu')" />

      <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul
          class="
            flex flex-col
            md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium
          "
        >
          <li
            v-for="({ title, routeName }, index) in navItems"
            :key="index"
            class="flex font-normal"
          >
            <router-link
              :to="{ name: routeName }"
              active-class="text-primary font-medium"
              exact
              class="
                block
                py-2
                pr-4
                pl-3
                text-dark
                rounded
                md:bg-transparent md:px-1 md:py-0
                my-auto
              "
              aria-current="page"
            >
              {{ title }}
            </router-link>
          </li>

          <li class="md:pl-10">
            <ActionButton />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarToggleButton from "./NavbarToggleButton.vue";
import navItems from "@/utils/menu";

export default {
  name: "Navbar",
  emits: ["toggleMenu"],
  components: { NavbarToggleButton },
  created(){
    this.navItems = navItems;
  }
};
</script>