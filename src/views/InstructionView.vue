<script setup lang="ts">
const textToDisplay = "Znajdujesz się w Wirtualnej Dżungli - aby ją przejść, musisz odpowiedzieć " +
    " prawidłowo na pytania dotyczące internetu. Gra składa się z dwóch" +
    " poziomów. Rzucasz kostką i posuwasz się do przodu o tyle pól, ile oczek" +
    " wyrzuciła kostka. Na początku gry otrzymujesz trzy szanse &nbsp"
const textToDisplay2 = ".  Na polach oznaczonych znakiem zapytania &nbsp"

const textToDisplay3 = "czeka Cię pytanie." + " Każda błędna odpowiedź - to strata 1 szansy. Utrata wszystkich szans" +
    " oznacza zakończenie gry. Dobra odpowiedź - to kolejny rzut kostką." +
    " Po drodze czekają Cię zasadzki, kryjące się na polach oznaczonych" +
    " wykrzyknikiem &nbsp"

const textToDisplay4 = ". Powodzenia!"
</script>

<template>
    <div class="tlo1 flex flex-col items-center justify-center" aria-label="Zasady gry">
        <h1 class="font-['Proxima Nova Condensed'] -mt-10 mb-5 text-8xl text-[#ffffff] font-semibold">Zasady gry</h1>
        <div class="w-[1400px] inline-block px-1 py-1">
            <span class="relative text-[#ffffff] font-['Proxima Nova Condensed'] text-4xl/20"
                v-html="textToDisplay"></span>
            <img class="relative inline -mt-5" src="../assets/ikona1gwiazdka.png" />
            <span class="relative text-[#ffffff] font-['Proxima Nova Condensed'] text-4xl/20"
                v-html="textToDisplay2"></span>
            <img class="relative inline -mt-5 " src="../assets/ikona2question.png" />
            <span class="relative text-[#ffffff] font-['Proxima Nova Condensed'] text-4xl/20"
                v-html="textToDisplay3"></span>
            <img class="relative inline " src="../assets/ikona3wykrzyknik.png" />
            <span class="relative text-[#ffffff] font-['Proxima Nova Condensed'] text-4xl/20"
                v-html="textToDisplay4"></span>
        </div>
        <button class="cursor-pointer my-button w-xs h-28 bg-gray-100  
            font-['Proxima Nova Condensed'] text-6xl text-[#1d3850]
             font-bold border-4 border-[#00bbff]">
            Dalej
        </button>
    </div>
</template>

<style scoped>
.tlo1 {
    background-image: url("../assets/plansza_zasady_gry.png");
    background-size: 1920px 1080px;
    height: 1080px;
    width: 1920px;
    top: 0px;
    left: 0px;
    position: absolute;
}
</style>