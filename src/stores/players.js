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
      src: "jagr.png",
    },
    hasek: {
      id: 2,
      name: "Dominik Hašek",
      attack: 1,
      position: "Brankář",
      defense: 10,
      description:
        "Dominátor svým postřehem zachytí všechny puky, které se mu dostanou do cesty",
      src: "hasek.jpeg",
    },
    kvitova: {
      id: 3,
      name: "Petra Kvitova",
      attack: 9,
      defense: 4,
      description: "Její údery jsou smrtící pro zachytávání herní měny.",
      src: "kvitova.jpg"
    },
    rosicky: {
      id: 4,
      name: "Tomáš Rosický",
      position: "Útočník",
      attack: 8,
      defense: 3,
      description: "Nejsem jen hráč z papíru",
      src: "rosicky.jpeg"
    },
    berdych: {
      id: 5,
      name: "Tomáš Berdych",
      attack: 8,
      defense: 5,
      description: "Můj servis ti získá všechny možné odměny",
      src: "berdych.jpg"
    },
    pastrnak: {
      id: 6,
      name: "David Pastrňák",
      attack: 9,
      defense: 4,
      description: "Budu mít tolik pohárků, jako bodů v NHL",
      src: "pastrnak.jpg"
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
        console.log("Rosicky");
        break;
      case 5:
        activePlayers.value.push(this.players.berdych);
        console.log("Berdych");
        break;
      case 6:
        activePlayers.value.push(this.players.pastrnak);
        console.log("Pastrnak");
        break;
    }
  }
  let bingoNumber = ref(0);
  const bingo = ref([
    {
      question: "V jakém klubu NHL hrál největší část své kariéry Jaromir Jagr?",
      correct: 3,
      query: [
        "New York Rangers",
        "New Jersey Devils",
        "Washington Capitals",
        "Pittsburgh Penguins",
      ],
    },
    {
      question: "V jakém klubu NHL hrál největší část své kariéry Dominik Hašek?",
      correct: 0,
      query: [
        "Detroit Red Wings",
        "Buffalo Sabres",
        "New York Rangers",
        "Boston Bruins",
      ],
    },
    {
      question:
        "Kterou soutěž v tenise Petra Kvitova vyhrála dvakrát, v roce 2011 a 2014?",
      correct: 0,
      query: ["Wimbledon", "Australian Open", "US Open", "French Open"],
    },
  ]);
  
  function randomBingo() {
      bingoNumber.value = Math.floor(Math.random() * bingo.value.length);
  }

  return { players, counterStore, getCard, activePlayers, bingo, bingoNumber, randomBingo};
});
