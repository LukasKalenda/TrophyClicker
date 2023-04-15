import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import { useCounterStore } from "./counter";

export const usePlayerStore = defineStore("players", () => {
  const counterStore = useCounterStore();

  const players = reactive({
    jagr: {
      id: 1,
      name: "Jarda Jágr",
      attack: 10,
      position: "Útočník",
      defense: 4,
      description:
        "Legendární útočník, který tě při sbírání pohárků nenechá ve štychu",
    },
    hasek: {
      id: 2,
      name: "Dominik Hašek",
      position: "Obránce",
      attack: 1,
      defense: 10,
      description:
        "Dominátor svým postřehem zachytí všechny puky, které se mu dostanou do cesty",
    },
  });
  return { players, counterStore };
});