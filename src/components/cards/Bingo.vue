<template>
  <section class="bingo-container">
    <div class="bingo">
      <h2>Bingo!</h2>
      <div class="bingo-question">
        {{ playerStore.bingo[playerStore.bingoNumber].question }}
      </div>
      <div class="bingo-query">
        <div
          class="query-item"
          @click="
            handleItemClick(index)"
          v-for="(item, index) in playerStore.bingo[playerStore.bingoNumber]
            .query"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePlayerStore } from "../../stores/players";
const playerStore = usePlayerStore();

function handleItemClick(index) {
  let element = document.querySelector(
    ".query-item:nth-child(" + (index + 1) + ")"
  );
  let display = document.querySelector(".bingo-container");
  let rightElement = document.querySelector(
    ".query-item:nth-child(" +
      (playerStore.bingo[playerStore.bingoNumber].correct + 1) +
      ")"
  );
  if (index == playerStore.bingo[playerStore.bingoNumber].correct) {
    playerStore.getCard();
    element.style.backgroundColor = "green";
  } else if (index != playerStore.bingo[playerStore.bingoNumber].correct) {
    element.style.backgroundColor = "red";
    rightElement.style.backgroundColor = "green";
  } else console.log("Chyba v kartickach");

  setTimeout(() => {
    display.style.display = "none";
    element.style.backgroundColor = "rgb(82, 172, 172)";
    rightElement.style.backgroundColor = "rgb(82, 172, 172)";
  }, 2000);
}

//coundown timer
// startCountdown(
//                 Math.floor(
//                   playerStore.bingo[playerStore.bingoNumber].question.length / 8
//                 )
//               )

function startCountdown(seconds) {
  let countdownInterval = setInterval(function() {
    if (seconds <= 0) {
      clearInterval(countdownInterval);
      console.log("Časový odpočet skončil!");
      console.log("Další obsah po odpočtu...");
    } else {
      console.log("Zbývá " + seconds + " sekund.");
      seconds--;
    }
    let display = document.querySelector(".bingo-container");
    display.style.display = "none";
  }, 1000);
}
</script>

<style lang="scss" scoped>
.bingo-container {
  display: none;
  width: 60vw;
  height: 40vh;
  background-color: #fff;
  color: #000;
  border: 6px solid #805015;
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
      font-size: calc(0.8rem + 1vw);
    }
    .bingo-query {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 25px;

      .query-item {
        padding: 10px;
        font-size: calc(0.6rem + 1vw);
        background-color: rgb(82, 172, 172);
        width: 30%;
      }
    }
  }
}
</style>
