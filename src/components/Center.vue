<template>
    <div>
        <div>
            <h1>These planetoids are closest to Earth today!</h1>
            <Planet v-for="planet in store.byDate(currentDate)" :planet="planet"></Planet>
        </div>

        <Calendar v-if="store.week.length"
                  :days="store.week"
                  @pickedDate="pickDate"
                  :current="currentDate"></Calendar>
    </div>
</template>
<script>
 import { usePlanetStore } from '@/stores/planets';
 import Calendar from '@/components/Calendar.vue';
 import Planet from '@/components/Planet.vue';

 export default {
     name: "center",
     components: { Calendar, Planet },
     setup() {
         const store = usePlanetStore();
         return { store };
     },
     data() {
         return {
             currentDate: null
         }
     },
     created() {
         const today = new Date();
         const todayStr = today.toISOString().split('T')[0];
         this.currentDate = todayStr;
     },
     methods: {
         pickDate(dateStr) {
             this.currentDate = dateStr;
         },

     }
 }

</script>
