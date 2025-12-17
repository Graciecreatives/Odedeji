<template>
  <section class="bg-red-50 min-h-screen">
    <Header />

   <!-- Hero Section -->
<div class="relative w-full h-64 md:h-96 bg-gray-200 overflow-hidden">
  <!-- Hero Image -->
  <img src="/Images/image5.jpg" alt="Bible" class="w-full h-full object-cover" />

  <!-- Overlay -->
  <div class="absolute inset-0 flex items-center justify-center bg-black/40">
    <h1
      class="text-3xl md:text-5xl font-extrabold text-white text-center px-4"
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-once="true"
    >
      Order of Program
    </h1>
  </div>
</div>


    <OrderOfProgram />
    <Greetings />
    <footer class="bg-green-800 text-white py-8 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h3 class="text-2xl font-bold mb-2 text-green-400">DE ODEDEJI FAMILY CAROL</h3>
        <p
          class="text-red-400 mb-4"
        >Bringing family and friends together to celebrate the true meaning of Christmas</p>
        <p class="text-gray-300 text-sm">&copy; 2025 DE ODEDEJI FAMILY. All Rights Reserved.</p>
      </div>
    </footer>
  </section>
</template>

<script setup>
import Header from "@/components/Header.vue";
import OrderOfProgram from "@/components/OrderOfProgram.vue";
import Greetings from "@/components/Greetings.vue";
</script>