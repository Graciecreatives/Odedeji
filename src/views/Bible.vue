<template>
  <section class="bg-red-50  min-h-screen">
    <Header />

    <!-- Hero Section -->
    <div class="relative w-full h-64 md:h-96 bg-gray-200 overflow-hidden">
      <!-- Hero Image -->
      <img src="/Images/bible.jpg" alt="Bible" class="w-full h-full object-cover" />

      <!-- Overlay -->
      <div class="absolute inset-0 flex items-center justify-center bg-black/40">
        <h1
        class="text-3xl md:text-5xl font-extrabold text-white text-center px-4"
      data-aos="zoom-in"
      data-aos-duration="800"
      data-aos-once="true"
        >Scripture Readings</h1>
      </div>
    </div>

    <!-- Scripture Cards -->
   <div class="max-w-4xl mx-auto pt-10">
  <!-- Loading & error states -->
  <div v-if="loading" class="text-center text-gray-600">Loading scriptures…</div>
  <div v-else-if="error" class="text-center text-red-600">{{ error }}</div>

  <!-- Scriptures -->
  <div
    v-else
    v-for="(verse, index) in scriptures"
    :key="index"
    class="bg-white p-6 rounded-2xl shadow-lg mb-4 border-l-4 border-green-600"
    data-aos="fade-up"
    data-aos-duration="800"
    data-aos-once="true"
  >
    <!-- Verse Header -->
    <div class="flex justify-between items-center cursor-pointer" @click="toggleVerse(index)">
      <h2 class="text-xl font-semibold text-gray-900">{{ verse.reference }} - {{ verse.minister }}</h2>
      <span class="text-green-600 font-bold text-2xl">{{ activeIndex === index ? '-' : '+' }}</span>
    </div>

    <!-- Collapsible Content -->
    <div v-show="activeIndex === index" class="mt-4">
      <!-- Tabs -->
      <div class="flex gap-4 mb-4 flex-wrap">
        <button
          v-for="version in verse.versions"
          :key="version.name"
          @click="verse.active = version.name"
          :class="[
            'px-4 py-2 rounded-full font-semibold transition-colors',
            verse.active === version.name
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
        >
          {{ version.name }}
        </button>
      </div>

      <!-- Verse Text -->
      <pre class="text-gray-700 text-lg whitespace-pre-wrap">
{{ verse.versions.find(v => v.name === verse.active)?.text || 'No text available for this version.' }}
      </pre>
    </div>
  </div>
</div>

    <Greetings />
    <!-- Footer -->
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
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Header from "@/components/Header.vue";
import Greetings from "@/components/Greetings.vue";

const scriptures = ref([]);
const loading = ref(true);
const error = ref("");

// Keep track of the currently open verse
const activeIndex = ref(null);

const toggleVerse = index => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

onMounted(async () => {
  try {
    const res = await fetch("/scriptures.json"); // fetch from public folder
    if (!res.ok) throw new Error("Failed to load scriptures.json");
    const data = await res.json();

    // Add 'active' property to each scripture for tab switching
    scriptures.value = data.map(verse => ({
      ...verse,
      active: verse.versions?.some(v => v.name === "NIV")
        ? "NIV"
        : verse.versions[0]?.name || ""
    }));
  } catch (err) {
    console.error(err);
    error.value = err.message || "Error loading scriptures.";
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
button {
  transition: background-color 0.3s, color 0.3s;
}
</style>
