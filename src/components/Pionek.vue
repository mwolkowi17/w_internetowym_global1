<template>
  <div
    class="pionek1"
    :style="{ left: props.leftPosition + 'px', top: props.topPosition + 'px' }"
  ></div>
</template>

<script setup lang="ts">
const props = defineProps({ topPosition: Number, leftPosition: Number });
</script>

<style scoped>
.pionek1 {
  background-image: url("../assets/pionek1.png");
  background-size: 116px 116px;
  background-repeat: no-repeat;
  height: 116px;
  width: 116px;
  position: absolute;
  /* z-index: 3; */
}
</style>
