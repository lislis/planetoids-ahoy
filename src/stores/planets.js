import { defineStore } from 'pinia'

export const usePlanetStore = defineStore('planets', {
    state: () => ({
        planets: [],
        days: [],
    }),
    getters: {
        all(state) {
            return state.planets;
        },
        byDate: (state) => {
            return (date) => state.planets[date];
        },
    },
    actions: {
        reset() {
            this.planets = {};
        },
        initAll(planets) {
            this.planets = planets;
        },
        addMore(planets) {
            let ks = Objects.keys(planets);
            ks.forEach((v,i) => {
                this.planets[v] = planets[v];
            });
        }
    }
});
