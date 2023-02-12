<template>
  <h1 class="text-4xl font-bold text-center">Welcome BlogWall</h1>
  <VeeForm fef="form" v-slot="{ errors }" @submit="login">
    <Field
      v-model="formData.mail"
      name="email"
      type="email"
      placeholder="Email"
      rules="required|email"
      class="w-full h-[50px] mt-9 px-6 py-4 border-2 border-solid border-black"
      :class="{ 'border-red-500': errors['email'] }"
    />
    <ErrorMessage name="email" class="text-red-500" />
    <input
      type="text"
      placeholder="Password"
      class="w-full h-[50px] mt-4 px-6 py-4 border-2 border-solid border-black"
    />
    <button
      type="submit"
      class="w-full mt-9 py-4 border-2 border-solid border-black rounded-lg text-white bg-[#03438D] shadow-3xl"
    >
      登入
    </button>
  </VeeForm>
  <p class="mt-4 text-base text-center">註冊帳號</p>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({ mail: '' });
console.log(formData.value.mail);
function login() {
  console.log('submit');
}
</script>
