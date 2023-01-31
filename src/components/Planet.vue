<template>
    <div>
        <h2>{{ planet.name }}</h2>
        <p>{{ minDiameter }} - {{ maxDiameter }} </p>
        <p v-if="orbitingBody !== 'Earth'">orbits {{ orbitingBody }}</p>
        <p>misses Earth by {{ missDistance }} km</p>
    </div>
</template>
<script>
 export default {
     name: 'Planet',
     props: ['planet'],
     created() {

     },
     computed: {
         minDiameter() {
             let km = this.planet.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2);
             return `${km}km`;

         },
         maxDiameter() {
             let km = this.planet.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2);
             return `${km}km`;

         },
         missDistance() {
             let km = Math.round(this.planet.close_approach_data[0].miss_distance.kilometers);
             km = `${km}`.split('');
             km.splice(-6, 0, ' ');
             km.splice(-3, 0, ' ');
             return km.join('');
         },
         orbitingBody() {
             return this.planet.close_approach_data[0].orbiting_body;
         }
     }
 }
</script>
