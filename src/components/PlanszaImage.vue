<template>
  <div
    class="trasa"
    role="img"
    alt="grafika"
    aria-label="trasa gry zawierająca 16 pól"
    :style="{ top: props.topPosition, left: props.leftPosition }"
  ></div>
</template>

<script setup lang="ts">
const props = defineProps({ topPosition: String, leftPosition: String });
</script>

<style scoped>
.trasa {
  background-image: url("../assets/sama_plansza.png");
  background-size: 1280px 799px;
  background-repeat: no-repeat;
  position: absolute;
  height: 799px;
  width: 1280px;
  z-index: 0;
}
</style>
