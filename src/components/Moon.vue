<template>
    <div class="helper" :style="{
                             'transform': distanceCalc }">
        <div class="label">Moon</div>
        <div class="planet moon"
             :style="{
                 'width': widthCalc,
                 'height': widthCalc }">

        </div>
    </div>
</template>
<script>

 export default {
     name: 'Moon',
     props: ['scale'],
     data() {
         return {
             diameter: 3500, // km,
             distance: 385000 // km
         }
     },
     computed: {
         widthCalc() {
             if (Math.round(this.diameter * this.scale) < 1) {
                 return '1px'
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
 .moon {
     background-color: lightgrey;
     transition: transform 200ms ease-in-out;
 }

</style>
