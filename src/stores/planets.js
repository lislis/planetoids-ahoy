import { defineStore } from 'pinia'

export const usePlanetStore = defineStore('planets', {
    state: () => ({
        planets: [],
        currentSelected: null
    }),
    getters: {
        all(state) {
            return state.planets;
        },
        byDate: (state) => {
            return (date) => state.planets[date];
        },
        week(state) {
            return Object.keys(state.planets);
        }
    },
    actions: {
        reset() {
            this.planets = [];
        },
        initAll(planets) {
            this.planets = planets;
        },
        addMore(planets) {
            let ks = Objects.keys(planets);
            ks.forEach((v,i) => {
                this.planets[v] = planets[v];
            });
        },
        select(planetoid) {
            this.currentSelected = planetoid;
        }
    }
});
