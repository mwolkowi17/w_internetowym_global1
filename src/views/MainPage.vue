<script setup lang="ts">
import StartView from './StartView.vue';
import InstructionView from './InstructionView.vue';
import {useMainViewStore} from '../stores/mainViewStore'

const storeMainView = useMainViewStore();

</script>

<template>
<StartView v-if="storeMainView.ifStartView"/>
<InstructionView v-if="storeMainView.ifInstructionView"/>
</template>

<style scoped>
</style>