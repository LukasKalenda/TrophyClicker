import { ref, watch } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from '@vueuse/core';

import { usePlayerStore } from "./players";

export const useCounterStore = defineStore("counter", () => {
  const playerStore = usePlayerStore();

  const audio = new Audio("../assets/sounds/click-1.wav");

  const points_per_click = ref(1);
  const base_points_per_click = ref(1);
  const level = ref(15);

  const count = ref(0);
  const units = ref("");

  // Zavedení koeficientů a exponenciometrického zvyšování počtu bodů za kliknutí
  function click() {
    points_per_click.value = Math.round(
      base_points_per_click.value * Math.sqrt(level.value)
    );
    count.value += points_per_click.value;
    // audio.play();

    //spusteni nahodne binga
    if(Math.floor(Math.random() * 5) == 3) {
      let display = document.querySelector(".bingo-container");
      display.style.display = "block";
      playerStore.randomBingo();
    }
  }

  // Jednotky za kliknutí
  // Chybí dělitelnost
  watch(count, () => {
    if (count.value < 1000) {
      units.value = "";
    } else if (count.value < 1000000) {
      units.value = "tisíc";
    } else if (count.value < 1000000000) {
      units.value = "milión";
    } else if (count.value < 1000000000000) {
      units.value = "miliard";
    } else if (count.value < 1000000000000000) {
      units.value = "biliónů";
    }
  });

  //LocalStorage

  //AFK currency
  
  return {
    playerStore,
    audio,
    points_per_click,
    base_points_per_click,
    level,
    count,
    units,
    click,
  };
});
