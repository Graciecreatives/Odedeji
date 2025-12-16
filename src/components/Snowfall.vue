<template>
  <div class="pointer-events-none absolute inset-0 z-20 overflow-hidden">
    <span
      v-for="n in snowflakes"
      :key="n"
      class="snowflake"
      :style="flakeStyle()"
    >
      🎄
    </span>
  </div>
</template>

<script setup>
const snowflakes = 40;

const flakeStyle = () => {
  const size = Math.random() * 10 + 10;
  return {
    left: Math.random() * 100 + "vw",
    animationDuration: Math.random() * 10 + 5 + "s",
    animationDelay: Math.random() * 5 + "s",
    fontSize: size + "px",
    opacity: Math.random()
  };
};
</script>

<style scoped>
.snowflake {
  position: absolute;
  top: -10%;
  color: white;
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes fall {
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(120vh) translateX(30px);
  }
}
</style>
