<template>
  <section class="bingo-container">
    <div class="bingo">
      <h2>Bingo!</h2>
      <div class="bingo-question">
        {{ playerStore.bingo[playerStore.randomBingo].question }}
      </div>
      <div class="bingo-query">
        <div class="query-item" >Detroit Red Wings</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePlayerStore } from "../../stores/players";
const playerStore = usePlayerStore();
</script>

<style lang="scss" scoped>
.bingo-container {
  width: 60vw;
  height: 40vh;
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  filter: opacity(0.95);
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  .bingo {
    text-align: center;
    padding: 10px;
    width: 100%;
    h2 {
        font-size: 2rem;
    }
    .bingo-question {
        padding: 15px;
        font-size: 2rem;
    }
    .bingo-query {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
        gap: 25px;
        
      .query-item {
        padding: 10px;
        font-size: 1.5rem;
        background-color: aquamarine;
      }
    }
  }
}
</style>
