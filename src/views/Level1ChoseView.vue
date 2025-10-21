<script setup lang="ts">

</script>

<template>
    <div class="tlo-level1 flex flex-row items-center justify-center">
        <button class="cursor-pointer my-button w-[595px] h-[200px] mr-54 bg-gray-100  
            font-['Proxima Nova Condensed'] text-[100px] text-[#1d3850]
             font-bold border-4 border-[#00bbff]">Poziom 1</button>
        <button class="cursor-pointer w-[595px] h-[200px] bg-gray-100  
            font-['Proxima Nova Condensed'] text-[100px] text-[#1d3850]
             font-bold border-4 border-[#00bbff]" disabled>Poziom 2</button>
    </div>
</template>

<style scoped>
.tlo-level1 {
    background-image: url("../assets/plansza_poziom1_wybor.png");
    background-size: 1920px 1080px;
    height: 1080px;
    width: 1920px;
    top: 0px;
    left: 0px;
    position: absolute;
}
</style>