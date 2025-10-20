<script setup lang="ts">

</script>

<template>
    <div class="tlo flex items-center justify-center">
        <h1 class="sr-only">W interntowym labiryncie</h1>
        <button
            class="cursor-pointer my-button w-104 h-40 bg-gray-100 transform translate-y-35 font-['Proxima Nova Condensed'] text-8xl text-[#1d3850] font-bold border-4 border-[#00bbff]">
            Start
        </button>
    </div>
</template>

<style scoped>
.tlo {
    background-image: url("../assets/plansza_start.png");
    background-size: 1920px 1080px;
    height: 1080px;
    width: 1920px;
    top: 0px;
    left: 0px;
    position: absolute;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
</style>