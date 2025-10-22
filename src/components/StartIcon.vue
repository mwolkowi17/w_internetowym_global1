<template>
  <div class="tlo2">
    <div
      class="ikona-start"
      role="img"
      alt=""
      :style="{ top: props.topPosition, left: props.leftPosition }"
    ></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({ topPosition: String, leftPosition: String });
</script>

<style scoped>
.ikona-start {
  background-image: url("../assets/start_poziom1.png");
  background-size: 255px 305px;
  background-repeat: no-repeat;
  position: absolute;
  height: 305px;
  width: 255px;
  z-index: 0;
}
</style>
