<template>
  <header class="sticky top-0 bg-green-600 shadow-md z-50">
    <div class="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
      <!-- Logo / Site Name -->
      <h1 class="text-2xl md:text-3xl font-bold text-white">DE-ODEDEJI</h1>

      <!-- Desktop Navigation -->
      <nav class="hidden md:block">
        <ul class="flex space-x-6 text-white font-medium">
          <li>
            <router-link to="/" class="hover:text-green-200 transition duration-300">Home</router-link>
          </li>
          <li>
            <router-link to="/program" class="hover:text-green-200 transition duration-300">Program</router-link>
          </li>
          <li>
            <router-link to="/bible" class="hover:text-green-200 transition duration-300">Bible</router-link>
          </li>
          <li>
            <router-link to="/hymn" class="hover:text-green-200 transition duration-300">Hymn</router-link>
          </li>
        </ul>
      </nav>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button @click="isOpen = !isOpen" class="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <nav v-if="isOpen" class="md:hidden bg-green-700">
      <ul class="flex flex-col space-y-2 text-white font-medium py-2 px-6">
        <li>
          <router-link @click="isOpen = false" to="/" class="hover:text-green-200 transition duration-300">Home</router-link>
        </li>
        <li>
          <router-link @click="isOpen = false" to="/program" class="hover:text-green-200 transition duration-300">Program</router-link>
        </li>
        <li>
          <router-link @click="isOpen = false" to="/bible" class="hover:text-green-200 transition duration-300">Bible</router-link>
        </li>
        <li>
          <router-link @click="isOpen = false" to="/hymn" class="hover:text-green-200 transition duration-300">Hymn</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
/* Optional: subtle shadow for the logo */
h1 {
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}
</style>
