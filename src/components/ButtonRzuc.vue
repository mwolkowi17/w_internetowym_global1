<template>
  <button
    ref="rzut1"
    class="rzut1 my-button anim1"
    @click="console.log('rzut kostką')"
  >
    Rzuć kostką
  </button>
</template>
<script setup lang="ts"></script>
<style scoped>
.rzut1 {
  color: rgb(255, 255, 255);
  font-size: 40px;
  font-style: bold;
  font-weight: 700;
  font-family: "Proxima Nova", sans-serif;
  background-image: url("../assets/rzut_przycisk.png");
  background-size: 333px 86px;
  background-repeat: no-repeat;
  top: 560px;
  left: 1502px;
  height: 88px;
  width: 333px;
  position: absolute;
  z-index: 2;
}
</style>
