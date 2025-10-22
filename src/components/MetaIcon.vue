<template>
  <div
    class="ikona-meta"
    :style="{ top: props.topPosition, left: props.leftPosition }"
  ></div>
</template>

<script setup lang="ts">
const props = defineProps({ topPosition: String, leftPosition: String });
</script>

<style scoped>
.ikona-meta {
  background-image: url("../assets/meta_poziom1.png");
  background-size: 267px 288px;
  background-repeat: no-repeat;
  position: absolute;
  height: 288px;
  width: 267px;
  z-index: 0;
}
</style>
