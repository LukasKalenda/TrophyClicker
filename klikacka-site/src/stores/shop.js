import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useCounterStore } from './counter'

export const useShopStore = defineStore('shop', () => {
    const counterStore = useCounterStore();
    
    state: () => ({
        items: [
            {id: 1, title: 'Fotbal', price: 30, earned: 0, img: "football.png"},
            {id: 2, title: 'Basketball', price: 1800, earned: 0, img: "basket.png"},
            {id: 3, title: 'Hokej', price: 19256, earned: 0, img: "puck.png"}
        ]
    })
    const fotball = ref(10)

    function buyItem() {
        if (counterStore.count >= fotball.value) {
            fotball.value+=10;
        }
    }
    return { counterStore, fotball, buyItem }
})