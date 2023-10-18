<template>
  <div>
    <img
      :src="pageError"
      class="object-cover w-2/4 mx-auto h-screen"
      alt="404"
    />
  </div>
</template>
<script setup lang="ts">
import pageError from '@/assets/images/404.jpg';
</script>
