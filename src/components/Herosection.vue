<template>
  <section class="relative h-screen w-full overflow-hidden">
    <Snowfall />

    <!-- Background Image Slider -->
    <div class="absolute inset-0">
      <div
        v-for="(image, index) in images"
        :key="index"
         class="absolute inset-0 h-full w-full transition-opacity duration-1000"
        :class="currentIndex === index ? 'opacity-100' : 'opacity-0'"
      >
        <img
          :src="image"
          class="h-full w-full object-cover"
          alt="Christmas Carol Background"
        />
      </div>
    </div>

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Hero Content -->
    <div
      class="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white"
    >
      <h1
        class="text-3xl font-extrabold tracking-wide md:text-5xl"
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        DE ODEDEJI FAMILY CAROL
      </h1>

      <p
        class="mt-4 max-w-xl text-base text-white/90 md:text-lg"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        A joyful gathering of praise, music, and thanksgiving as we celebrate
        the birth of Jesus Christ together as one family.
      </p>

      <div
        class="mt-8 flex flex-wrap justify-center gap-4"
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-delay="500"
      >
        <!-- Red CTA -->
        <router-link
          to="/program"
          class="rounded-xl bg-red-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-red-700"
        >
          View Program Schedule
        </router-link>

        <!-- Green CTA -->
        <router-link
          to="/hymn"
          class="rounded-xl border-2 border-white px-8 py-3 text-sm font-semibold text-green-500 transition hover:bg-green-500 hover:text-white bg-white"
        >
          Explore Hymns
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Snowfall from "./Snowfall.vue";
import AOS from "aos";
import "aos/dist/aos.css";

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
  // Initialize AOS
  AOS.init({ once: true });

  // Start slider
  sliderInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  }, 4000);
});

onUnmounted(() => {
  clearInterval(sliderInterval);
});
</script>
