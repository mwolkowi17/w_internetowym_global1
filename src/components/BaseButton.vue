<template>
  <button
    class="cursor-pointer bg-gray-100 font-['Proxima Nova Condensed'] text-[#1d3850] font-bold border-4 border-[#00bbff]"
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
