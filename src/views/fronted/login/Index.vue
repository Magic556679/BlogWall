<template>
  <div class="flex align-middle items-center min-h-screen ">
    <main
      class="flex mx-auto w-[870px] border-black border-2 border-solid shadow-4xl px-[48px] py-[96px]"
    >
      <div class="w-1/2">
        <img :src="loginImage" />
      </div>
      <div class="w-1/2">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import loginImage from '@/assets/images/login.jpg';
</script>
