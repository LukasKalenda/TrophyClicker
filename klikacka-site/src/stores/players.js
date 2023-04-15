import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useCounterStore } from './counter'

export const usePlayerStore = defineStore('player', () => {
    const counterStore = useCounterStore();
    
    state: () => ({
        players: [
            {id: 1, name: 'Jarda Jágr', attack: 10, defense: 4, description: "Legendární útočník, který tě při sbírání pohárků nenechá ve štychu"},
            {id: 2, name: 'Dominik Hašek', attack: 1, defense: 10, description: "Dominátor svým postřehem zachytí všechny puky, které se mu dostanou do cesty"},
        ]
    })
    return { players, counterStore }
})