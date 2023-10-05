<template>
  <div
    v-if="storeModel.isLoading"
    class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-screen bg-gray-800 bg-opacity-90 flex justify-center items-center"
  >
    <i class="fas fa-spinner fa-spin text-[50px] z-50 text-white"></i>
  </div>
</template>
<script setup lang="ts">
import useStore from '@/store/index';

const storeModel = useStore().load;
</script>
