<template>
  <div class="flex align-middle items-center min-h-screen">
    <main
      class="flex mx-auto w-[870px] border-black border-2 border-solid px-[48px] py-[96px]"
    >
      <div class="w-1/2">
        <img :src="loginImage" />
      </div>
      <div class="w-1/2">
        <input
          type="text"
          placeholder="Email"
          class="w-full h-[50px] px-6 py-4 border-2 border-solid border-black"
        />
        <input
          type="text"
          placeholder="Password"
          class="w-full h-[50px] mt-4 px-6 py-4 border-2 border-solid border-black"
        />
        <button
          type="button"
          class="w-full mt-9 py-4 border-2 border-solid border-black text-white bg-[#03438D] shadow- "
        >
          登入
        </button>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import loginImage from '@/assets/images/login.jpg';
</script>
