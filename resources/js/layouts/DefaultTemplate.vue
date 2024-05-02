<template>
  <HeaderTemplate/>
  <div class="container">
      <router-view />
      <div>Laravel 11 + Docker + Vue 3 + Bootstrap </div>
  </div>    
  <FooterTemplate/>
</template>

<script setup>
import HeaderTemplate from './HeaderTemplate.vue'
import FooterTemplate from './FooterTemplate.vue'
</script>