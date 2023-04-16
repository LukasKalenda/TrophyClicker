import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import { useCounterStore } from "./counter";

export const usePlayerStore = defineStore("players", () => {
  const counterStore = useCounterStore();
  
  const activePlayers = ref([]);
  const players = reactive({
    jagr: {
      id: 1,
      name: "Jarda Jágr",
      attack: 10,
      position: "Útočník",
      defense: 4,
      description:
        "Legendární útočník, který tě při sbírání pohárků nenechá ve štychu",
      // src: "../../assets/players-image/jagr.png",
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
      description: "Její údery jsou smrtící pro zachytávání herní měny.",
    },
    rosicky: {
      id: 4,
      name: "Tomáš Rosický",
      position: "Útočník",
      attack: 8,
      defense: 3,
      description: "Nejsem jen hráč z papíru",
    },
    berdych: {
      id: 5,
      name: "Tomáš Berdych",
      attack: 8,
      defense: 5,
      description: "Můj servis ti získá všechny možné odměny",
    },
    pastrnak: {
      id: 6,
      name: "David Pastrňák",
      attack: 9,
      defense: 4,
      description: "Budu mít tolik pohárků, jako bodů v NHL",
    },
  });

  function getCard() {
    const random = Math.floor(Math.random() * 5 + 1);
    switch (random) {
      case 1:
        activePlayers.value.push(this.players.jagr);
        console.log(this.players.jagr);
        break;
      case 2:
        activePlayers.value.push(this.players.hasek);
        console.log("Hasek");
        break;
      case 3:
        activePlayers.value.push(this.players.kvitova);
        console.log("Kvitova");
        break;
      case 4:
        activePlayers.value.push(this.players.rosicky);
        console.log("Kvitova");
        break;
      case 5:
        activePlayers.value.push(this.players.berdych);
        console.log("Kvitova");
        break;
      case 6:
        activePlayers.value.push(this.players.pastrnak);
        console.log("Kvitova");
        break;
    }
  }
  
  return { players, counterStore, getCard, activePlayers };
});
