<template>
  <p>暱稱</p>
  <input
    v-model="form.name"
    name="name"
    type="text"
    placeholder="Password"
    class="w-full h-[50px] px-6 py-4 border-2 border-solid border-black"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const form = ref<{ name: string }>({ name: '' });
console.log(form.value);
</script>
