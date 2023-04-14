import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {

 const audio = new Audio("../assets/sounds/click-1.wav");

  const count = ref(0);
  function click() {
    count.value += 2;

    audio.play();
  }
  return { audio, count, click };
});
