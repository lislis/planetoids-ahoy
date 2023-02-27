<template>
    <div class="calendar">
        <ol class="cal">
            <li v-for="day in daysSorted">
                <CalendarDay @click="$emit('pickedDate', day)"
                             :day="day"
                             :current="current" />
            </li>
        </ol>
    </div>
</template>
<script>
 import CalendarDay from '@/components/CalendarDay.vue';

 export default {
     name: 'Calendar',
     props: ['days', 'current'],
     components: { CalendarDay },
     created() {

     },
     computed: {
         daysSorted() {
             return this.days.sort((a, b) => {
                 const date1 = new Date(a);
                 const date2 = new Date(b);

                 return date1 - date2;
             })
         }
     },
     methods: {

     }
 }

</script>

<style>
 .calendar {

 }
 .cal {
     display: flex;
     justify-content: center;
     padding: 0;
     list-style: none;
     margin: 2rem 0 2rem;
 }
 .cal li {
     width: 5.5rem;
     line-height: 1.2;
     margin-right: 1rem;
     cursor: pointer;
 }

</style>
