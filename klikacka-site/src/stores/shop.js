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
    hokej: { id: 3, title: "Hokej", price: 19256, earned: 0, img: "puck.png" },
    secret: { id: 4, title: "??????????", price: "???????", earned: 0, img: "ghost.png" },

  });
  const fotball = ref(10);

  function buyItem(item) {
    if (counterStore.count >= item.price) {
      counterStore.count -= item;
      item.earned++
    }
  }
  return { counterStore, shopItems, fotball, buyItem };
});
