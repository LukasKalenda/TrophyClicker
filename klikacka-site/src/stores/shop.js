import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import { useCounterStore } from "./counter";

export const useShopStore = defineStore("shop", () => {
  const counterStore = useCounterStore();

  const shopItems = reactive({
    fotbal: {
      id: 1,
      title: "Fotbal",
      price: 30,
      earned: 0,
      img: "football.png",
    },
    basketball: {
      id: 2,
      title: "Basketball",
      price: 1800,
      earned: 0,
      img: "basket.png",
    },
    hokej: { id: 3, title: "Hokej", price: 19256, earned: 0, img: "table-tennis.png" },
    secret: {
      id: 4,
      title: "??????????",
      price: 111155,
      earned: 0,
      img: "ghost.png",
    },
  });
  const fotball = ref(10);

  //   Jeste nefunguje
  function buyItem(item) {
    if (counterStore.count >= shopItems.item.price) {
      counterStore.count -= shopItems.item.price;
      item.earned++;
    }
  }
  return { counterStore, shopItems, fotball, buyItem };
});
