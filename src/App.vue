<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import MainPage from './views/MainPage.vue';

const scale = ref(1)

function updateScale() {
    const widthRatio = window.innerWidth / 1920
    const heightRatio = window.innerHeight / 1080
    scale.value = Math.min(widthRatio, heightRatio)
}

onMounted(() => {
    updateScale()
    window.addEventListener('resize', updateScale)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateScale)
})

</script>

<template>
    <div :style="{ transform: `scale(${scale})`, transformOrigin: 'top left' }" role="application">
        <MainPage />
    </div>
</template>

<style scoped></style>
