<template>
  <section>
    <label>輸入新密碼</label>
    <input
      v-model="formData.newPassword"
      type="password"
      placeholder="請輸入新密碼"
      class="w-full h-[50px] mt-1 px-6 py-4 border-2 border-solid border-black"
    />
  </section>
  <section>
    <label class="pt-4 block">再次輸入</label>
    <input
      v-model="formData.password"
      type="password"
      placeholder="請再次輸入密碼"
      class="w-full h-[50px] mt-1 px-6 py-4 border-2 border-solid border-black"
    />
  </section>
  <div class="text-center">
    <Button class="my-4" size="w-80">重設密碼</Button>
  </div>
</template>
<script setup lang="ts">
import Button from '@/components/common/Button.vue';
import { ref } from 'vue';
interface form {
  newPassword: string;
  password: string;
}
const formData = ref<form>({ newPassword: '', password: '' });
console.log(formData);
</script>
