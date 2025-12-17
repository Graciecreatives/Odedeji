<template>
  <header class="sticky top-0 bg-green-600 shadow-md z-50">
    <div class="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
      <!-- Logo / Site Name -->
      <h1 class="text-2xl md:text-3xl font-bold text-white">DE-ODEDEJI</h1>

      <!-- Desktop Navigation -->
      <nav class="hidden md:block">
        <ul class="flex space-x-6 text-white font-medium">
          <li v-for="link in navLinks" :key="link.name">
            <router-link
              :to="link.path"
              class="hover:text-green-200 transition duration-300"
            >
              {{ link.name }}
            </router-link>
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

    <!-- Mobile Navigation as Full-Screen Panel -->
    <transition name="slide-down">
      <nav
        v-show="isOpen"
        class="fixed inset-0 bg-green-700 z-50 flex flex-col justify-center items-center overflow-auto"
      >
        <button
          @click="isOpen = false"
          class="absolute top-6 right-6 text-white text-3xl font-bold focus:outline-none"
        >
          &times;
        </button>

        <ul class="flex flex-col space-y-6 text-white font-semibold text-2xl text-center">
          <li v-for="link in navLinks" :key="link.name">
            <router-link
              @click="isOpen = false"
              :to="link.path"
              class="block py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isOpen: false,
      navLinks: [
        { name: "Home", path: "/" },
        { name: "Program", path: "/program" },
        { name: "Bible", path: "/bible" },
        { name: "Hymn", path: "/hymn" },
      ],
    };
  },
};
</script>

<style scoped>
/* Logo shadow */
h1 {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

/* Mobile menu slide-down animation */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-down-enter-to,
.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
