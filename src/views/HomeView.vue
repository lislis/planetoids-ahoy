<script>
 import Calendar from '@/components/Calendar.vue';
 import Planet from '@/components/Planet.vue';
 import { usePlanetStore } from '@/stores/planets';
 import { inject } from 'vue'

 export default {
     name: 'HomeView',
     inject: ['apiKey', 'apiUrl'],
     components: { Calendar, Planet },
     data() {
         return {
             isLoading: false,
             currentDate: null,
             error: null,
         }
     },
     setup() {
         const store = usePlanetStore();
         console.log(store)
         return { store };
     },
     created() {
         this.isLoading = true;

         const today = new Date();
         const todayStr = today.toISOString().split('T')[0];
         this.currentDate = todayStr;

         fetch(`${this.apiUrl}feed?start_date=${todayStr}&api_key=${this.apiKey}`)
             .then(r => r.json())
             .then(data => {
                 let neos = data.near_earth_objects;
                 this.store.initAll(neos);
                 this.week = Object.keys(neos);
                 this.isLoading = false;
             }).catch(e => {
                 this.isLoading = false;
                 this.error = 'Could not fetch data, please refresh and try again.'
             })
     },
     methods: {
         pickDate(dateStr) {
             //console.log('Go to '+ dateStr);
             this.currentDate = dateStr;
         }
     }
 }
</script>

<template>
    <main class="">
        <template v-if="isLoading">
            <p>Loading...</p>
        </template>
        <template v-else>
            <div>
                <h1>These planetoids are closest to Earth today!</h1>
                <Planet v-for="planet in store.byDate(currentDate)" :planet="planet"></Planet>
            </div>

            <Calendar v-if="week.length" :days="week" @pickedDate="pickDate"></Calendar>
        </template>
        <div v-if="error">
            {{ error }}
        </div>
    </main>
</template>
