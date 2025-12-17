<template>
  <section class="bg-red-50 min-h-screen">
    <Header />

    <!-- Hero Section -->
   <div class="relative w-full h-64 md:h-96 bg-gray-200 overflow-hidden">
  <img src="/Images/image4.jpg" alt="Hymns" class="w-full h-full object-cover" />
  <div class="absolute inset-0 flex items-center justify-center bg-black/40">
    <h1
      class="text-3xl md:text-5xl font-extrabold text-white text-center px-4"
      data-aos="zoom-in"
      data-aos-duration="800"
      data-aos-once="true"
    >
      Hymns
    </h1>
  </div>
</div>


    <!-- Hymn Cards -->
    <div class="max-w-4xl mx-auto pt-10">
  <div v-if="loading" class="text-center text-gray-600">Loading hymns…</div>
  <div v-else-if="error" class="text-center text-red-600">{{ error }}</div>

  <div
    v-else
    v-for="(hymn, index) in hymns"
    :key="index"
    class="bg-white p-6 rounded-2xl shadow-lg mb-4 border-l-4 border-green-600"
    data-aos="fade-up"
    data-aos-duration="800"
    data-aos-once="true"
  >
    <!-- Hymn Header -->
    <div class="flex justify-between items-center cursor-pointer" @click="toggleHymn(index)">
      <h2 class="text-xl font-semibold text-gray-900">{{ hymn.title }}</h2>
      <span class="text-green-600 font-bold text-2xl">{{ activeIndex === index ? '-' : '+' }}</span>
    </div>

    <!-- Collapsible Content -->
    <div v-show="activeIndex === index" class="mt-4">
      <!-- Verse Tabs -->
      <div class="flex gap-4 mb-4 flex-wrap">
        <button
          v-for="(verse, vIndex) in hymn.lyrics"
          :key="vIndex"
          @click="hymn.active = vIndex"
          :class="[
            'px-4 py-2 rounded-full font-semibold transition-colors',
            hymn.active === vIndex
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
        >
          Verse {{ vIndex + 1 }}
        </button>
      </div>

      <!-- Verse Text -->
      <pre class="text-gray-700 text-lg whitespace-pre-wrap">
{{ hymn.lyrics[hymn.active]?.text || 'No lyrics available.' }}
      </pre>

      <!-- Optional Chorus -->
      <div v-if="hymn.chorus" class="mt-4 font-bold text-green-600">
        Chorus: {{ hymn.chorus }}
      </div>
    </div>
  </div>
</div>


    <Greetings />
    <footer class="bg-green-800 text-white py-8 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h3 class="text-2xl font-bold mb-2 text-green-400">
          DE ODEDEJI FAMILY CAROLS
        </h3>
        <p class="text-red-400 mb-4">
          Bringing family and friends together to celebrate the joy of hymns
        </p>
        <p class="text-gray-300 text-sm">&copy; 2025 DE ODEDEJI FAMILY. All Rights Reserved.</p>
      </div>
    </footer>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Header from "@/components/Header.vue";
import Greetings from "@/components/Greetings.vue";

const hymns = ref([]);
const loading = ref(true);
const error = ref("");
const activeIndex = ref(null);

const toggleHymn = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

onMounted(async () => {
  try {
    const res = await fetch("/hymns.json"); // fetch from public folder
    if (!res.ok) throw new Error("Failed to load hymns.json");
    const data = await res.json();

    hymns.value = data.map((hymn) => ({
      ...hymn,
      active: 0 // default to first verse
    }));
  } catch (err) {
    console.error(err);
    error.value = err.message || "Error loading hymns.";
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
