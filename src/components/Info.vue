<template>
    <div class="info">
        <h1 class="info__title">On {{dateString}}, these {{store.byDate(currentDate).length }} planetoids are closest to Earth!</h1>

        <div v-if="store.currentSelected" class="info__sheet">
            <h2>Ahoy, {{store.currentSelected.name}}!</h2>
            <ul>
            <li>Is between {{diameter_m_min}}m and {{diameter_m_max}}m large</li>
            <li>Moves at about {{ vel_km_s }} km/s (or {{vel_km_h}} km/h)</li>
            <li>Even at its closest it's {{ distance_km}}km away. That's about {{ distance_lunar }} times the distance from Earth to the Moon.</li>

            <li v-if="orbits !== 'Earth'">Orbits {{orbits}} and not Earth</li>
            <li v-if="store.currentSelected.is_potentially_hazardous_asteroid">is potentially hazardous!</li>

            <li><a :href="store.currentSelected.nasa_jpl_url" target="_blank">Read more here</a></li>
            </ul>
        </div>
        <div  class="info__sheet" v-else>Click on a name to learn more!</div>
    </div>
</template>

<script>
 import { usePlanetStore } from '@/stores/planets';

 export default {
     name: "Info",
     props: ['currentDate'],
     setup() {
         const store = usePlanetStore();
         return { store };
     },
     computed: {
         dateString() {
             const date = new Date(this.currentDate);
             return date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });
         },
         vel_km_s() {
             return Math.round(this.store.currentSelected.close_approach_data[0].relative_velocity.kilometers_per_second);
         },
         vel_km_h() {
             return Math.round(this.store.currentSelected.close_approach_data[0].relative_velocity.kilometers_per_hour);
         },
         diameter_m_max() {
             return Math.round(this.store.currentSelected.estimated_diameter.meters.estimated_diameter_max);
         },
         diameter_m_min() {
             return Math.round(this.store.currentSelected.estimated_diameter.meters.estimated_diameter_min);
         },
         distance_km() {
             return Math.round(this.store.currentSelected.close_approach_data[0].miss_distance.kilometers);
         },
         distance_lunar() {
             return Math.round(this.store.currentSelected.close_approach_data[0].miss_distance.lunar);
         },
         orbits() {
             return this.store.currentSelected.close_approach_data[0].orbiting_body;
         }
     },
     methods: {

     }
 }

</script>
<style>
 .info {
     padding: 2rem;
 }
 .info__sheet  {
     max-width: 22rem;
     margin-top: 5rem;
 }
 .info__title {
     max-width: 26rem;
 }

</style>
