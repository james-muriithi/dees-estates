<template>
  <Navbar @toggleMenu="open = !open" />
  <MegaMenu :open="open" @toggleMenu="open = !open" />
  <router-view></router-view>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import MegaMenu from './components/MegaMenu.vue'

export default {
  components: { Navbar, MegaMenu },
  data() {
    return {
      open: false
    };
  },
}
</script>