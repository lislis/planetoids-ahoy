<template>
    <div class="orbit">
        <Earth :scale="scaleFactor" />
        <Moon :scale="scaleFactor" />
        <Mars :scale="scaleFactor" />

        <Planetoid v-for="(planetoid, index) in planetoidsByDistance"
                   :planetoid="planetoid" :scale="scaleFactor" :index="index"></Planetoid>
    </div>
</template>
<script>
 import Earth from '@/components/Earth.vue';
 import Mars from '@/components/Mars.vue';
 import Moon from '@/components/Moon.vue';
 import Planetoid from '@/components/Planetoid.vue';
 import { usePlanetStore } from '@/stores/planets';

 export default {
     name: 'Orbit',
     props: ['currentDate', 'scale'],
     setup() {
         const store = usePlanetStore();
         return { store };
     },
     data() {
         return {
             lunarDistance: 385000,
             factorLunarDistanceByEarthDiameter: 30,
             scaleFactor: 0.00001,
         }
     },
     components: { Earth, Moon, Planetoid, Mars },
     mounted() {
         console.log(this.store.byDate(this.currentDate))
     },
     computed: {
         planetoidsByDistance() {
             return this.store.byDate(this.currentDate).sort((a, b) => {
                 return a.close_approach_data[0].miss_distance.kilometers - b.close_approach_data[0].miss_distance.kilometers
             })
         }
     }
 };

</script>

<style>
 .orbit {
     position: relative;
     height: 80vh;
 }
 .planet {

     border-radius: 50%;
 }

</style>
