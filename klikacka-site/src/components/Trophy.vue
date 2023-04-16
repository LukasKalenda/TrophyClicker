<template>
  <div class="trophy">
    <div class="text-back"><span>Továrna na pohárky</span></div>
    <aside>
      <span id="points">{{ counterStore.count }}</span>
      <span id="earned">{{ counterStore.units }} pohárků</span>
      <span id="earned-seconds">za sekundu: {{ counterStore.points_per_click}}</span>
    </aside>

    <section>
        <img @click="counterStore.click" src="../assets/icons/trophy-main.png" alt="Main Trophy/Cup">
    </section>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter.js";
const counterStore = useCounterStore();


</script>

<style lang="scss" scoped>

</style>
