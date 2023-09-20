<template>
  <div class="relative">
    <router-view></router-view>
    <Model></Model>
  </div>
</template>
<script setup lang="ts">
import Model from '@/components/common/Model.vue';
</script>
