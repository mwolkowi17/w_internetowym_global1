<template>
  <div
    class="kostka1"
    :class="{
      kostka1image1: storeKostka.isSet1,
      kostka1image2: storeKostka.isSet2,
      kostka1image3: storeKostka.isSet3,
      kostka1image4: storeKostka.isSet4,
      kostka1image5: storeKostka.isSet5,
      kostka1image6: storeKostka.isSet6,
    }"
    :style="{ top: props.topPosition, left: props.leftPosition }"
  ></div>
</template>
<script setup lang="ts">
import { useKostkaStore } from "../stores/kostkaStore";

const storeKostka = useKostkaStore();

const props = defineProps({ topPosition: String, leftPosition: String });
</script>
<style scoped>
.kostka1 {
  background-size: 250px 250px;
  background-repeat: no-repeat;
  height: 250px;
  width: 250px;
  position: absolute;
  z-index: 2;
}

.kostka1:focus {
  outline: 5px solid #000000;
  outline-offset: 10px;
}

.kostka1image1 {
  background-image: url("../assets/kostka_1oczko.png");
}

.kostka1image2 {
  background-image: url("../assets/kostka_2oczka.png");
}

.kostka1image3 {
  background-image: url("../assets/kostka_3oczka.png");
}

.kostka1image4 {
  background-image: url("../assets/kostka_4oczka.png");
}

.kostka1image5 {
  background-image: url("../assets/kostka_5oczek.png");
}

.kostka1image6 {
  background-image: url("../assets/kostka_6oczek.png");
}
</style>
