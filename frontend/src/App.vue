

<template>
  <header>
    <navBar></navBar>
  </header> 
  
  <RouterView id="main" />
  
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

</style>