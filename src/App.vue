<template>
  <div class="relative">
    <router-view></router-view>
    <Model />
    <load />
  </div>
</template>
<script setup lang="ts">
import Model from '@/components/common/Model.vue';
import load from '@/components/common/Load.vue';
</script>
