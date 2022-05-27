<template>
  <transition name="slide-in-left">
    <div
      class="mega-menu fixed top-0 w-full h-full bg-primary z-50 p-4 animate"
      v-if="open"
    >
      <div class="text-right">
        <button @click="$emit('toggleMenu')">
          <span class="material-icons text-light text-3xl font-bold">
            close
          </span>
        </button>
      </div>
      <div class="mx-auto px-4 overflow-y-auto">
        <div class="menu mt-16">
          <router-link
            v-for="({ title, routeName }, index) in navItems"
            :key="index"
            :to="{ name: routeName }"
            active-class="text-light"
            @click="$emit('toggleMenu')"
            class="
              block
              py-4
              text-2xl
              font-medium
              text-gray-400
              hover:text-light
              transition-colors
            "
            exact
          >
            {{ title }}
          </router-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import navItems from "@/utils/menu";

export default {
  name: "MegaMenu",
  emits: ["toggleMenu"],
  props: {
    open: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    open(currentValue) {
      if (currentValue) {
        document.getElementById("app").classList.add("overflow-y-hidden");
      } else {
        document.getElementById("app").classList.remove("overflow-y-hidden");
      }
    },
  },
  created() {
    this.navItems = navItems;
  },
};
</script>

<style scoped>
.slide-in-left-enter-active,
.slide-in-left-leave-active {
  transition: all 0.5s;
  transform: translateX(0);
}
.slide-in-left-enter-from,
.slide-in-left-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>