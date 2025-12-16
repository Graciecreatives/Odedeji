<template>
  <section class="relative h-screen w-full overflow-hidden">
    <Snowfall />
    <!-- Background Image Slider -->
    <div class="absolute inset-0">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        class="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
        :class="currentIndex === index ? 'opacity-100' : 'opacity-0'"
        alt="Christmas Carol Background"
      />
    </div>

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Hero Content -->
    <div
      class="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white"
    >
      <h1 class="text-3xl font-extrabold tracking-wide md:text-5xl">
        DE ODEDEJI FAMILY CAROL
      </h1>

      <p class="mt-4 max-w-xl text-base text-white/90 md:text-lg">
        A joyful gathering of praise, music, and thanksgiving as we celebrate
        the birth of Jesus Christ together as one family.
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <!-- Red CTA -->
        <router-link
          to="/program"
          class="rounded-xl bg-red-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-red-700"
        >
          View Program Schedule
        </router-link>

        <!-- Green CTA -->
        <router-link
          to="/songs"
          class="rounded-xl border-2 border-white px-8 py-3 text-sm font-semibold text-green-500 transition hover:bg-green-500 hover:text-white bg-white"
        >
          Explore Songs
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Snowfall from "./Snowfall.vue";

/* 🎄 IMAGE ARRAY */
const images = [
  "/Images/image1.jpg",
  "/Images/image2.jpg",
  "/Images/image3.jpg",
  "/Images/image4.jpg",
    "/Images/image5.jpg",
    "/Images/image6.jpg",
];

const currentIndex = ref(0);
let sliderInterval = null;

onMounted(() => {
  sliderInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  }, 4000);
});

onUnmounted(() => {
  clearInterval(sliderInterval);
});
</script>
