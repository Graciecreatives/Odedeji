<template>
  <section class="bg-green-50 py-20 px-6 overflow-hidden">
  <div class="mx-auto max-w-4xl">
    <h2 
      class="text-3xl md:text-4xl font-extrabold text-gray-900 text-center"
      data-aos="fade-down" 
      data-aos-duration="1200" 
      data-aos-once="true"
    >
      Program Schedule
    </h2>

    <p
      class="text-center text-gray-600 mt-3 mb-12"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-once="true"
    >
      Here’s the order of events for the DE ODEDEJI FAMILY CAROL
    </p>

    <div class="relative">
      <!-- Vertical Line -->
      <div class="absolute left-10 top-0 h-full w-1 bg-red-600"></div>

      <div class="space-y-16">
        <div
          v-for="section in program"
          :key="section.number"
          class="flex flex-col md:flex-row items-start gap-6 relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          <!-- Number Circle -->
          <div class="flex flex-col items-center z-10">
            <div
              class="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              {{ section.number || "Pre" }}
            </div>
          </div>

          <!-- Program Items -->
          <div class="flex-1 space-y-3">
            <div
              v-for="(item, index) in section.items"
              :key="index"
              class="flex items-center gap-3"
              data-aos="fade-left"
              :data-aos-delay="100 * index"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <component :is="item.icon" class="w-5 h-5 text-red-600 flex-shrink-0" />
              <div>
                <p class="text-gray-900 font-semibold">{{ item.content }}</p>
                <p v-if="item.minister" class="text-gray-600 text-sm">{{ item.minister }}</p>
              </div>
            </div>

            <!-- Buttons for all sections -->
            <div class="mt-4 flex gap-3" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              <router-link
                to="/bible"
                class="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors"
              >
                <BookOpenIcon class="w-5 h-5" />Read Scripture
              </router-link>

              <router-link
                to="/hymn"
                class="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                <MusicIcon class="w-5 h-5" />View Hymn
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</template>


<script setup>
import {
  Music as MusicIcon,
  Users,
  Cross,
  BookOpen as BookOpenIcon
} from "lucide-vue-next";

const program = [
  {
    number: "",
    items: [
      {
        type: "Song",
        content: "Close to Thee - Instrumental",
        minister: "",
        icon: MusicIcon
      },
      {
        type: "Song",
        content: "Wonderful World - Luis Armstrano",
        minister: "",
        icon: MusicIcon
      },
      {
        type: "Song",
        content: "Make the World a Brighter Place - Michael Jackson",
        minister: "",
        icon: MusicIcon
      },
      {
        type: "Worship",
        content: "WORSHIP: Emmanuel - D, Oh Be Lifted - A, Odara - A",
        minister: "",
        icon: MusicIcon
      },
      { type: "Prayer", content: "Opening Prayer", minister: "", icon: Cross },
      { type: "Carol", content: "CAROL", minister: "", icon: Users }
    ]
  },
  {
    number: 1,
    items: [
      {
        type: "Scripture",
        content: "Gen. 3 v 8 - 15",
        minister: "Odedeji B.J",
        icon: Cross
      },
      {
        type: "Song",
        content: "Climb Every Mountain",
        minister: "Funso Bejide",
        icon: MusicIcon
      },
      {
        type: "Song",
        content: "Hark the Herald Angel Sing",
        minister: "F",
        icon: MusicIcon
      }
    ]
  },
  {
    number: 2,
    items: [
      {
        type: "Scripture",
        content: "Gen. 22 v 15 - 18",
        minister: "Ifeoluwa Odedeji",
        icon: Cross
      },
      {
        type: "Song",
        content: "The Virgins Slumber + Born is the Light",
        minister: "Ibiso Kio",
        icon: MusicIcon
      },
      {
        type: "Song",
        content: "Dong Merrily on High",
        minister: "Bb",
        icon: MusicIcon
      }
    ]
  },
  {
    number: 3,
    items: [
      {
        type: "Scripture",
        content: "Isaiah 9 v 2, 6 - 7",
        minister: "Odedeji O.A (JP)",
        icon: Cross
      },
      { type: "Song", content: "Alpha Brass Group", minister: "", icon: Users },
      {
        type: "Song",
        content: "Longtime Ago in Bethlehem",
        minister: "Bb",
        icon: MusicIcon
      }
    ]
  },
  {
    number: 4,
    items: [
      {
        type: "Scripture",
        content: "Isaiah 11 v 1 - 9",
        minister: "Isaac Durosinuola",
        icon: Cross
      },
      {
        type: "Song",
        content: "Salvation Army Group",
        minister: "",
        icon: Users
      },
      {
        type: "Song",
        content: "Joy to the World",
        minister: "D",
        icon: MusicIcon
      }
    ]
  },
  {
    number: 5,
    items: [
      {
        type: "Scripture",
        content: "Luke 1 v 26 - 38",
        minister: "Peter Bamigboye",
        icon: Cross
      },
      {
        type: "Song",
        content: "Premier Symphony Orchestra Group",
        minister: "",
        icon: Users
      },
      { type: "Song", content: "Silent Night", minister: "C", icon: MusicIcon }
    ]
  },
  {
    number: 6,
    items: [
      {
        type: "Scripture",
        content: "Matthew 1 v 18 - 23",
        minister: "Prophetess Omowumi Adekola",
        icon: Cross
      },
      {
        type: "Song",
        content: "Mary lomo Aguntan (Pastor Ajibare Family)",
        minister: "",
        icon: Users
      },
      {
        type: "Song",
        content: "Ifeoluwa Odedeji Family",
        minister: "",
        icon: Users
      },
      {
        type: "Song",
        content: "Once in Royal David City",
        minister: "G",
        icon: MusicIcon
      }
    ]
  },
  {
    number: 7,
    items: [
      {
        type: "Scripture",
        content: "Luke v 8 - 16",
        minister: "Evang. Deborah Adeoye",
        icon: Cross
      },
      {
        type: "Song",
        content: "Isaac Durosinuola Family",
        minister: "",
        icon: Users
      },
      {
        type: "Song",
        content: "Glorious Things of Thee - Tune Abbots Leigh + Austria",
        minister: "",
        icon: MusicIcon
      },
      {
        type: "Song",
        content: "Oun Jesu se fun mi - Ab",
        minister: "Odedeji O.A. Jp",
        icon: MusicIcon
      }
    ]
  },
  {
    number: 8,
    items: [
      {
        type: "Scripture",
        content: "Matthew 2 v 1 - 11",
        minister: "Rev. Mother Ajaye",
        icon: Cross
      },
      {
        type: "Song",
        content:
          "Father na you get all the praise (Adaptation Water - Fela Kuti)",
        minister: "",
        icon: MusicIcon
      },
      {
        type: "Song",
        content: "Brightest and Best",
        minister: "G",
        icon: MusicIcon
      }
    ]
  },
  {
    number: 9,
    items: [
      {
        type: "Scripture",
        content: "John 1 v 1-14",
        minister: "Apostle Ben Akanni",
        icon: Cross
      },
      {
        type: "Song",
        content: "Jingle Bells",
        minister: "C, C, Bb for F",
        icon: MusicIcon
      },
      {
        type: "Song",
        content: "We Wish You a Merry Christmas",
        minister: "F",
        icon: MusicIcon
      }
    ]
  }
];
</script>
