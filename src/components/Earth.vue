<template>
    <div class="helper">
        <div class="label label--left">Earth</div>
        <div class="planet earth" :style="{ 'width': widthCalc, 'height': widthCalc }"></div>
    </div>
</template>
<script>

 export default {
     name: "Earth",
     props: ['scale'],
     data() {
         return {
             diameter: 12742, // km
         }
     },
     computed: {
         widthCalc() {
             if (Math.round(this.diameter * this.scale) < 1) {
                 return '4px';
             } else {
                 return `${Math.round(this.diameter * this.scale)}px`;
             }
         }
     }
 }
</script>

<style>
 .earth {
     background-color: #3464f3;
     transition: transform 200ms ease-in-out;
 }


</style>
