import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  // const audio = new Audio("../assets/sounds/click-1.wav");

  const points_per_click = ref(1);
  const base_points_per_click = ref(1);
  const level = ref(1);

  const count = ref(0);
  // Zavedení koeficientů a exponenciometrického zvyšování počtu bodů za kliknutí

  function click() {
    points_per_click.value = Math.round(base_points_per_click.value * Math.sqrt(level.value));
    count.value += points_per_click.value;
    // audio.play();
  }
  return { points_per_click, base_points_per_click, level, count, click };
});
