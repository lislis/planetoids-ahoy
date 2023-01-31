<template>
    <ol class="cal">
        <li v-for="day in daysSorted">
            <button type="button" @click="$emit('pickedDate', day)">{{ display(day) }}</button>
        </li>
    </ol>
</template>
<script>
 export default {
     name: 'Calendar',
     props: ['days'],
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
         display(dateStr) {
             const day = new Date(dateStr);
             const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
             return day.toLocaleDateString('en', options);
         }
     }
 }

</script>
