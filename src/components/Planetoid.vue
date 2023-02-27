<template>
    <div class="helper" :style="{
                        'bottom': distanceCalc }"
    @click="selectPlanetoid">
    <div class="label" :class="{'label--left': evenOdd }">
        {{ this.planetoid.name}}
    </div>
    <div class="planet planetoid" :style="{
                                  'width': widthCalc,
                                  'height': widthCalc }"></div>
    </div>
</template>
<script>
 import { usePlanetStore } from '@/stores/planets';

 export default {
     name: 'Planetoid',
     props: ['scale', 'planetoid', 'index'],
     data() {
         return {

         }
     },
     setup() {
         const store = usePlanetStore();
         return { store };
     },
     methods: {
         selectPlanetoid() {
             this.store.select(this.planetoid);
         }
     },
     computed: {
         evenOdd() {
             return parseInt(this.index, 10) % 2 === 0;
         },
         diameter() {
             return this.maxDiameter;
         },
         distance() {
             return this.missDistance;
         },
         widthCalc() {
             if (Math.round(this.diameter * this.scale) < 1) {
                 return '1px';
             } else {
                 return `${Math.round(this.diameter * this.scale)}px`;
             }
         },
         distanceCalc() {
             return `${Math.round(this.distance * this.scale)}px`;
         },

         minDiameter() {
             let km = this.planetoid.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2);
             return km;

         },
         maxDiameter() {
             let km = this.planetoid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2);
             return km;

         },
         missDistance() {
             let km = Math.round(this.planetoid.close_approach_data[0].miss_distance.kilometers);
             return km;
         }
     }
 }
</script>

<style>
 .planetoid {
     background-color: white;
     transition: transform 200ms ease-in-out;
 }
 .planetoid:hover {

 }
 .helper {
     position: absolute;
     bottom: 0;
     right: 0;
     left: 50%;
     margin: auto;
 }

 .label {
     cursor: pointer;
     width: 15rem;
     padding: 1rem 2rem 0;
     text-align: left;
 }
 .label--left {
     text-align: right;
     transform: translateX(-15rem);
 }
 .label:hover ~ .planetoid,
 .label:hover ~ .planet {
     transform: scale(20);
 }

</style>
