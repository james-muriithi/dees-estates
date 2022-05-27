<template>
  <footer class="py-20 mt-6 bg-primary">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-3">
      <div>
        <img src="@images/logolight.svg" class="h-5 mb-4" alt="Dees estates" />
        <p class="text-gray-300">
          Solution for easy and flexible house hunting. You can trust us
          anywhere through this platform
        </p>
      </div>

      <div class="md:flex mt-8 md:mt-0">
        <div class="mx-auto">
          <h3 class="text-xl text-light font-bold mb-3">Property</h3>
          <router-link to="#" class="text-gray-300 block mb-2">
            Learning Modules
          </router-link>
          <router-link to="#" class="text-gray-300 block mb-2">
            Partnership
          </router-link>
          <router-link to="#" class="text-gray-300 block mb-2">
            Watch demo
          </router-link>
          <router-link to="#" class="text-gray-300 block mb-2">
            Event
          </router-link>
        </div>
      </div>

      <div class="md:flex mt-8 md:mt-0">
        <div class="mx-auto">
          <h3 class="text-xl text-light font-bold mb-3">About</h3>
          <router-link to="#" class="text-gray-300 block mb-2">
            Our Company
          </router-link>
          <router-link to="#" class="text-gray-300 block mb-2">
            Career
          </router-link>
          <router-link to="#" class="text-gray-300 block mb-2">
            Investor Relations
          </router-link>
          <router-link to="#" class="text-gray-300 block mb-2">
            Social Impact
          </router-link>
        </div>
      </div>

       <div class="md:flex mt-8 md:mt-0">
        <div class="mx-auto">
          <h3 class="text-xl text-light font-bold mb-3">Resources</h3>
          <router-link to="#" class="text-gray-300 block mb-2">
            Contact
          </router-link>
          <router-link to="#" class="text-gray-300 block mb-2">
            Give Feedback
          </router-link>
          <router-link to="#" class="text-gray-300 block mb-2">
            Sytems status
          </router-link>
          <router-link to="#" class="text-gray-300 block mb-2">
            Privacy Policy
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "PageFooter",
};
</script>