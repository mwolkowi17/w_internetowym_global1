<template>
  <button
    class="cursor-pointer bg-[#1d3850] font-['Proxima Nova Condensed'] text-[#ffffff] font-bold"
    :style="{
      width: props.width,
      height: props.height,
      fontSize: props.fontSize,
    }"
  >
    {{ props.text }}
  </button>
</template>
<script setup lang="ts">
const props = defineProps({
  text: String,
  fontSize: String,
  width: String,
  height: String,
});
</script>
<style scoped></style>
