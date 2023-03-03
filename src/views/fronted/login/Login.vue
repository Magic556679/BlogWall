<template>
  <!-- @submit="login" -->
  <VeeForm v-slot="{ errors }">
    <Field
      v-model="formData.email"
      name="email"
      type="email"
      placeholder="Email"
      rules="required|email"
      class="w-full h-[50px] mt-9 px-6 py-4 border-2 border-solid border-black"
      :class="{ 'border-red-500': errors['email'] }"
    />
    <ErrorMessage name="email" class="text-red-500" />
    <!-- <Field
      v-model="formData.password"
      name="password"
      type="password"
      placeholder="Password"
      :rules="rulesPassword"
      class="w-full h-[50px] mt-4 px-6 py-4 border-2 border-solid border-black"
      :class="{ 'border-red-500': errors['password'] }"
    />
    <ErrorMessage name="password" class="text-red-500" /> -->
    <input
      v-model="formData.password"
      name="password"
      type="password"
      placeholder="Password"
      class="w-full h-[50px] mt-4 px-6 py-4 border-2 border-solid border-black"
    />
    <p class="text-red-500">{{ errorMessage }}</p>
    <button
      @click="login"
      type="button"
      class="w-full mt-9 py-4 border-2 border-solid border-black rounded-lg text-white bg-[#03438D] shadow-3xl"
    >
      登入
    </button>
  </VeeForm>
  <p class="mt-4 text-base text-center">
    <router-link
      :to="{
        name: 'register',
      }"
      >註冊帳號</router-link
    >
  </p>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { login as loginApi } from '@/services/api/user';
import { AxiosError } from 'axios';

const formData = ref({ email: '', password: '' });
const errorMessage = ref('');

const login = async () => {
  try {
    await loginApi(formData.value);
    errorMessage.value = ''
  } catch (error) {
    if (error instanceof AxiosError) {
      errorMessage.value = error.response?.data?.message;
    }
    console.error(error)
  }
};
// const rulesPassword = (value: string): string | boolean => {
//   if (value) {
//     return true;
//   }
//   return '不得為空';
// };
</script>
