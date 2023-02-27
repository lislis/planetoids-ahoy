<template>
    <div class="helper" :style="{
                             'transform': distanceCalc }">
        <div class="label label--left">Mars</div>
        <div class="planet mars" :style="{ 'width': widthCalc, 'height': widthCalc }"></div>
    </div>
</template>
<script>

 export default {
     name: "Mars",
     props: ['scale'],
     data() {
         return {
             diameter: 6791, // km
             distance: 54600000//km
         }
     },
     computed: {
         widthCalc() {
             if (Math.round(this.diameter * this.scale) < 1) {
                 return '2px';
             } else {
                 return `${Math.round(this.diameter * this.scale)}px`;
             }
         },
          distanceCalc() {
             return `translateY(-${Math.round(this.distance * this.scale)}px)`;
         }
     }
 }
</script>

<style>
 .mars {
     background-color: #c94436;
     transition: transform 200ms ease-in-out;
 }


</style>
