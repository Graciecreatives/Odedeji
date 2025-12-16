<template>
  <section class="bg-red-50 py-20 px-6 min-h-screen">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-extrabold text-green-700 text-center mb-12">
        Scripture Readings
      </h1>

      <!-- Loading & error states -->
      <div v-if="loading" class="text-center text-gray-600">Loading scriptures…</div>
      <div v-else-if="error" class="text-center text-red-600">{{ error }}</div>

      <!-- Scriptures -->
      <div
        v-else
        v-for="(verse, index) in scriptures"
        :key="index"
        class="bg-white p-6 rounded-2xl shadow-lg mb-8 border-l-4 border-red-600"
      >
        <h2 class="text-xl font-semibold text-gray-900 mb-4">
          {{ verse.reference }} - Minister: {{ verse.minister }}
        </h2>

        <!-- Tabs -->
        <div class="flex gap-4 mb-4">
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
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const scriptures = ref([]);
const loading = ref(true);
const error = ref("");

onMounted(async () => {
  try {
    const res = await fetch("/scriptures.json"); // fetch from public folder
    if (!res.ok) throw new Error("Failed to load scriptures.json");
    const data = await res.json();

    // Add 'active' property to each scripture for tab switching
    scriptures.value = data.map((verse) => ({
      ...verse,
      active: verse.versions?.some(v => v.name === "NIV") ? "NIV" : verse.versions[0]?.name || "",
    }));

    console.log("Loaded scriptures:", scriptures.value);
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
