<template>
    <div class="calendar__sheet" :class="{'is-active': current === day}">
        <div class="calendar__header">{{ currentMonth }}</div>
        <div class="calendar__body">

            <div class="calendar__week">{{ currentWeekday }}</div>
            <div class="calendar__day">{{ currentDay }}</div>
        </div>
    </div>
</template>
<script>
 export default {
     name: 'CalendarDay',
     props: ['day', 'current'],
     data() {
         return {
             currentMonth: null,
             currentDay: null,
             currentWeekday: null,
         }
     },
     created() {
         const date = new Date(this.day);
         this.currentMonth = date.toLocaleString('default', { month: 'long' });
         this.currentDay = date.toLocaleString('default', { day: 'numeric' });
         this.currentWeekday = date.toLocaleString('default', { weekday: 'short' });
     },
     methods: {

     }
 }

</script>
<style>

 .calendar__sheet {
     transform: scale(0.6);
     transition: transform 200ms ease-in-out;
 }
 .calendar__sheet.is-active {
     transform: scale(1);
 }

 .calendar__header {
     background-color: #d32a2a;
     color: #eee;
     font-size: 1rem;
     padding: .5rem;
     font-weight: 500;
 }
 .calendar__body {
     background-color: #eee;
     color: #333;
     display: flex;
     justify-content: space-between;
     align-items: flex-start;
     padding: .5rem;
 }
 .calendar__day {
     font-size: 2rem;
     font-weight: 600;
 }
 .calendar__week {
     font-size: 0.8rem;
 }

</style>
