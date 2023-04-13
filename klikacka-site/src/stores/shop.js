import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useCounterStore } from './counter'



export const useShopStore = defineStore('shop', () => {
    const counterStore = useCounterStore();

    const fotball = ref(10)

    function buyItem() {
        if (counterStore.count >= fotball.value) {
            fotball.value+=10;
        }
    }
    return { counterStore, fotball, buyItem }
})