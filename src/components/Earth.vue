<template>
    <Sphere :position="{ y: 0, z: 0 }" :radius="13" >
        <PhongMaterial color="#2288FF" />
    </Sphere>
</template>
<script>
 import { Sphere, PhongMaterial } from 'troisjs';

 export default {
     data() {
         return {
             diameter: 12742, // km
         }
     }
 }
</script>
