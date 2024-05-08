

<template>
  <header>
    <navBar></navBar>
  </header> 
  
  <Suspense>
  <RouterView id="main" />
  </Suspense>
  <footer > 
    <footBar></footBar>
  </footer>


</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

import navBar from './components/modules/nav-bar.vue'
import footBar from './components/modules/foot-bar.vue'










</script>

<style >
 #main{
  background-image: url('/images/7971.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  
 }
 .dropdown-menu{

        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    
 }
 .dropdown-item:hover{
    background-color: #1e1f21;
 }

</style>