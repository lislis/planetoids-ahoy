<script>
 import { usePlanetStore } from '@/stores/planets';
 import { inject } from 'vue';
 import Center from '@/components/Center.vue';

 export default {
     name: 'HomeView',
     inject: ['apiKey', 'apiUrl'],
     components: { Center },
     data() {
         return {
             isLoading: false,
             error: null,
         }
     },
     setup() {
         const store = usePlanetStore();
         return { store };
     },
     created() {
         this.isLoading = true;

         const today = new Date();
         const todayStr = today.toISOString().split('T')[0];

         fetch(`${this.apiUrl}feed?start_date=${todayStr}&api_key=${this.apiKey}`)
             .then(r => r.json())
             .then(data => {
                 let neos = data.near_earth_objects;
                 this.store.initAll(neos);
                 this.isLoading = false;
             }).catch(e => {
                 this.isLoading = false;
                 this.error = 'Could not fetch data, please refresh and try again.'
             })
     }
 }
</script>

<template>
    <main class="">
        <template v-if="isLoading">
            <p>Gazing at the sky...</p>
        </template>
        <template v-else>
            <Center />
        </template>
        <div v-if="error">
            {{ error }}
        </div>
    </main>
</template>
