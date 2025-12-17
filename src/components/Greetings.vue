<template>
  <section class="bg-red-50 py-20 px-6 relative overflow-hidden">
    <Snowfall />

    <div
      class="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-once="true"
    >
      <!-- Video Section -->
      <div
        class="flex-1"
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <video
          src="/Videos/FatherXmas.mp4"
          autoplay
          loop
          muted
          playsinline
          class="rounded-2xl shadow-lg w-full object-cover"
        ></video>
      </div>

      <!-- Greeting Text Section -->
      <div
        class="flex-1 text-center md:text-left relative"
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <h2 class="text-3xl md:text-4xl font-extrabold text-green-700">
          Thank You for Celebrating with Us!
        </h2>
        <p class="mt-4 text-gray-700 text-lg md:text-xl">
          We are so grateful for your presence at the DE ODEDEJI FAMILY CAROL.  
          May the joy of Christmas fill your heart and home.  
          Happy Christmas! 🎄
        </p>

        <!-- Happy Christmas Button -->
        <button
          class="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          🎄 Happy Christmas
        </button>

        <!-- Emoji Explosion -->
        <div
          class="absolute inset-0 pointer-events-none"
          data-aos="fade-in"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <span
            v-for="(emoji, index) in emojis"
            :key="index"
            :style="emoji.style"
            class="absolute text-2xl md:text-4xl transform transition-all duration-1000"
          >
            🎄
          </span>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from "vue";
import Snowfall from "./Snowfall.vue";
</script>

<style scoped>
@keyframes flyUp {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-400px) rotate(720deg);
    opacity: 0;
  }
}
</style>
