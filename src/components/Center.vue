<template>
    <div >
        <div class="layout">
            <div class="layout__info">
                <Info :currentDate="currentDate" />
            </div>
            <div class="layout__orbit">
                <Orbit :currentDate="currentDate" />
            </div>
        </div>

        <div class="layout__calendar">
            <Calendar v-if="store.week.length"
                      :days="store.week"
                      @pickedDate="pickDate"
                      :current="currentDate"></Calendar>
        </div>
    </div>
</template>
<script>
 import { usePlanetStore } from '@/stores/planets';
 import Calendar from '@/components/Calendar.vue';
 import Orbit from '@/components/Orbit.vue';
 import Info from '@/components/Info.vue';

 export default {
     name: "center",
     components: { Calendar, Orbit, Info },
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
             this.store.currentSelected = null;
             this.currentDate = dateStr;
         },

     }
 }

</script>

<style>

 @media (min-width: 1024px) {
     .layout {
         display: flex;
         flex-wrap: nowrap;
         max-width: 960px;
         margin: auto;
     }
 }
 .layout__orbit,
 .layout__info {
     position: relative;
     flex-basis: 50vw;
 }
 .layout__info {
     height: 80vh;
     overflow: scroll;
 }
 .layout__calendar {
     width: 100vw;
     padding: 2rem 3rem;
     overflow-x: scroll;
     flex-grow: 1;
     flex-basis: 100vw;
 }

</style>
