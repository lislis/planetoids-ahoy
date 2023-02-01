<template>
    <main>
        <Renderer ref="renderer" resize="window" orbitCtrl shadow alpha mouse-raycast >
            <Camera :position="{ z: -100 }" />
            <Scene ref="scene">
                <AmbientLight color="#ffffff" :intensity="0.5" />

                <PointLight :position="{ y: 50, z: 50 }" />

                <Earth />
                <Moon distance="385000" />
            </Scene>
        </Renderer>
    </main>
</template>

<script>
 import Earth from '@/components/Earth.vue';
 import Moon from '@/components/Moon.vue';
 import { Box, Sphere, Camera, AmbientLight, PhongMaterial, PointLight, Renderer, Scene } from 'troisjs';
 export default {
     name: 'AhoyView',
     data() {
         return {
             lunarDistance: 385000,
             factorLunarDistanceByEarthDiameter: 30
         }
     },
     components: { Earth,
                   Moon,
                   Box, Sphere, Camera, AmbientLight, PhongMaterial, PointLight, Renderer, Scene },
     mounted() {
         const orbitCtrl = this.$refs.renderer.three.cameraCtrl;


         orbitCtrl.addEventListener('change', () => {
             console.log('change')
             // Do something when the camera has been transformed by the controls.
         })

         orbitCtrl.addEventListener('start', () => {
             // Do something when an interaction was initiated.
         })

         orbitCtrl.addEventListener('end', () => {
             // Do something when an interaction has finished.
         })

     }
 };

</script>
