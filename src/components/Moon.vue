<template>
    <Sphere :position="{ y: 0, z: 385 }" :radius="4" >
        <PhongMaterial color="#cccccc" />
    </Sphere>
</template>
<script>
 import { Sphere, PhongMaterial } from 'troisjs';

 export default {
     name: 'Moon',
     props: ['distance'],
     data() {
         return {
             diameter: 3500, // km
         }
     }
 }
</script>
