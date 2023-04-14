<template>
  <div class="trophy">
    <div class="text-back"><span>Továrna na pohárky</span></div>
    <aside>
      <span id="points">{{ counterStore.count }}</span>
      <span id="earned">tisíc pohárků</span>
      <span id="earned-seconds">za sekundu: 4,256</span>
    </aside>

    <section>
        <img @click="counterStore.increment" src="../assets/icons/trophy-main.png" alt="Main Trophy/Cup">
    </section>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter.js";
const counterStore = useCounterStore();


</script>

<style lang="scss" scoped>
.trophy {
    border: 3px solid black;
}
section img {
    width: 256px;
    height: 256px;
}
</style>
