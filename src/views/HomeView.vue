<template>
  <main>
    <Header />
    <HeroSection />
    <section class="bg-white py-20 px-6">
      <div class="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
        <!-- Text -->
        <div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">
            Welcome to the
            <span class="text-green-600">DE ODEDEJI FAMILY CAROL 2025</span>
          </h2>

          <p class="mt-5 text-gray-600 text-lg leading-relaxed">
            The DE ODEDEJI FAMILY CAROL is an annual moment of unity, worship, and joy.
            It brings family and friends together to reflect on the true meaning of
            Christmas through songs, prayers, and celebration.
          </p>

          <!-- Highlights List -->
          <ul class="mt-8 space-y-5">
            <li class="flex items-start gap-4">
              <Music class="w-6 h-6 text-red-600 flex-shrink-0" />
              <span class="text-gray-700 text-base md:text-lg">Spirit-filled carol songs</span>
            </li>
            <li class="flex items-start gap-4">
              <Users class="w-6 h-6 text-red-600 flex-shrink-0" />
              <span class="text-gray-700 text-base md:text-lg">Family fellowship & thanksgiving</span>
            </li>
            <li class="flex items-start gap-4">
              <Cross class="w-6 h-6 text-red-600 flex-shrink-0" />
              <span class="text-gray-700 text-base md:text-lg">Celebration of Christ’s birth</span>
            </li>
          </ul>
        </div>

        <!-- Image -->
        <div>
          <img
            src="/Images/Xmas.jpg"
            alt="Family Christmas Carol"
            class="rounded-2xl shadow-xl border-2 border-green-100"
          />
        </div>
      </div>
    </section>
    <Program />
    <Gallery />
    <Greetings />
    <footer class="bg-green-800 text-white py-8 px-6">
  <div class="max-w-6xl mx-auto text-center">
    <h3 class="text-2xl font-bold mb-2 text-green-400">
      DE ODEDEJI FAMILY CAROL
    </h3>
    <p class="text-red-400 mb-4">
      Bringing family and friends together to celebrate the true meaning of Christmas
    </p>
    <p class="text-gray-300 text-sm">
      &copy; 2025 DE ODEDEJI FAMILY. All Rights Reserved.
    </p>
  </div>
</footer>

  </main>
</template>

<script setup>
import { Music, Users, Cross } from "lucide-vue-next";
import Header from "@/components/Header.vue";
import HeroSection from "@/components/Herosection.vue";
import Program from "@/components/Program.vue";
import Gallery from "@/components/Gallery.vue";
import Greetings from "@/components/Greetings.vue";
</script>
