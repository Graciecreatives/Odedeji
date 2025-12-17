<template>
  <section class="bg-green-50 py-20 px-6 overflow-hidden">
    <div class="mx-auto max-w-6xl">
      <h2
        class="text-3xl md:text-4xl font-extrabold text-gray-900 text-center"
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        Memories from Our Past Carol Events
      </h2>
      <p
        class="text-center text-gray-600 mt-3 mb-12"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        A glimpse of joy, worship, and celebration
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="(image, index) in galleryImages"
          :key="index"
          class="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          @click="openLightbox(index)"
          data-aos="fade-up"
          :data-aos-delay="index * 150"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img :src="image" alt="Gallery image" class="w-full h-64 object-cover" />
        </div>
      </div>

      <!-- Lightbox / Modal -->
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      >
        <button
          class="absolute top-4 right-4 text-white text-3xl font-bold"
          @click="closeLightbox"
        >
          &times;
        </button>

        <button
          class="absolute left-4 text-white text-3xl font-bold"
          @click="prevImage"
        >
          &#10094;
        </button>

        <img :src="galleryImages[currentIndex]" class="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-xl" />

        <button
          class="absolute right-4 text-white text-3xl font-bold"
          @click="nextImage"
        >
          &#10095;
        </button>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from "vue";

const galleryImages = [
  "/Images/image1.jpg",
  "/Images/image2.jpg",
  "/Images/image3.jpg",
  "/Images/image4.jpg",
  "/Images/image5.jpg",
  "/Images/image6.jpg",
];

const lightboxOpen = ref(false);
const currentIndex = ref(0);

function openLightbox(index) {
  currentIndex.value = index;
  lightboxOpen.value = true;
}

function closeLightbox() {
  lightboxOpen.value = false;
}

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % galleryImages.length;
}

function prevImage() {
  currentIndex.value =
    (currentIndex.value - 1 + galleryImages.length) % galleryImages.length;
}
</script>
