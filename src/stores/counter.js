import { ref, watch, onBeforeUnmount } from "vue";
import { defineStore } from "pinia";
import { set, useLocalStorage } from '@vueuse/core';

import { usePlayerStore } from "./players";

export const useCounterStore = defineStore("counter", () => {
  const playerStore = usePlayerStore();

  const audio = new Audio("../assets/sounds/click-1.wav");

  // Hodně se mi to sekalo, ale tohle by měla být ta localStorage
  // const points_per_click = ref(useLocalStorage("pps", 0));
  // const base_points_per_click = ref(useLocalStorage("bps", 0));
  // const level = ref(useLocalStorage("level", 1));

  // const count = ref(useLocalStorage("count", 0));
  // const units = ref(useLocalStorage("units", ''));
  const points_per_click = ref(0);
  const base_points_per_click = ref(10);
  const level = ref(6);

  const count = ref(0);
  const units = ref("");
  // Zavedení koeficientů a exponenciometrického zvyšování počtu bodů za kliknutí
  function click() {
    points_per_click.value = Math.floor(
      base_points_per_click.value * Math.sqrt(level.value)
    );
    count.value += points_per_click.value;
    // audio.play();
    // localStorage.setItem('count', JSON.stringify(count.value))
    //spusteni nahodne binga
    if(Math.floor(Math.random() * 100) == 0) {
      callBingo();
    }
  }
  //automatické pocitani bodu za sekundu
  setInterval(() => {
    count.value += Math.round(points_per_click.value / 10);
    playerStore.activePlayers.forEach((player) => {
      count.value += (player.attack + player.defense) / 100;
    });
    level.value += 0.05;
  }, 1000);

  //volání binga
  function callBingo() {
    let display = document.querySelector(".bingo-container");
    display.style.display = "block";
    playerStore.randomBingo();
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
  setInterval(() => {
    localStorage.setItem('count', JSON.stringify(count.value));
    localStorage.setItem('pps', JSON.stringify(points_per_click.value));
    localStorage.setItem('bps', JSON.stringify(base_points_per_click.value));
    localStorage.setItem('units', JSON.stringify(units.value));
    localStorage.setItem('level', JSON.stringify(level.value));
  }, 1000);
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
