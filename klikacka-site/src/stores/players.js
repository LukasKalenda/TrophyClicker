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
        src: "../../assets/players-image/jagr.png",
    },
    hasek: {
      id: 2,
      name: "Dominik Hašek",
      attack: 1,
      position: "Brankář",
      defense: 10,
      description:
        "Dominátor svým postřehem zachytí všechny puky, které se mu dostanou do cesty",
    },
    kvitova: {
        id: 3,
        name: "Petra Kvitova",
        attack: 9,
        defense: 4,
        description: "Její údery jsou smrtící pro zachytávání herní měny."
    }
  });

  function getCard() {
    const random = Math.floor(Math.random() * 3 + 1)
    switch(random) {
        case 1:
        activePlayers.value.push(this.players.jagr)
        console.log(this.players.jagr) 
        break
        case 2:
        activePlayers.value.push(this.players.hasek)
        console.log("Hasek") 
        break
        case 3:
        activePlayers.value.push(this.players.kvitova)
        console.log("Kvitova") 
        break
    }
  }
  const activePlayers = ref([
  ])
  return { players, counterStore, getCard, activePlayers};
});
