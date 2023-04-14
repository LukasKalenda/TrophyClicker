import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  function click() {
    count.value += 2;
  }
  return { count, click };
});
