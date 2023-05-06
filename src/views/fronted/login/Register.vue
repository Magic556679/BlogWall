<template>
  <VeeForm ref="form">
    <input
      v-model="formData.name"
      name="name"
      type="text"
      placeholder="暱稱"
      class="w-full h-[50px] mt-4 px-6 py-4 border-2 border-solid border-black"
    />
    <input
      v-model="formData.email"
      name="mail"
      type="mail"
      placeholder="Email"
      class="w-full h-[50px] mt-4 px-6 py-4 border-2 border-solid border-black"
    />
    <input
      v-model="formData.password"
      name="password"
      type="password"
      placeholder="Password"
      class="w-full h-[50px] mt-4 px-6 py-4 border-2 border-solid border-black"
    />
    <p class="text-red-500">{{ errorMessage }}</p>
    <ErrorMessage name="password" class="text-red-500" />
  </VeeForm>

  <button
    @click="login"
    type="button"
    class="w-full mt-9 py-4 border-2 border-solid border-black rounded-lg text-white bg-[#03438D] shadow-3xl"
  >
    註冊
  </button>
  <p class="mt-4 text-base text-center">
    <router-link
      :to="{
        name: 'login',
      }"
      >登入</router-link
    >
  </p>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { register } from '@/services/api/user';
import { AxiosError } from 'axios';

const formData = ref({ name: '', email: '', password: '' });
const errorMessage = ref('');
const form = ref(null);
const login = async () => {
  try {
    await register(formData.value);
    errorMessage.value = '';
  } catch (error) {
    if (error instanceof AxiosError) {
      errorMessage.value = error.response?.data?.message;
    }
    console.error(error);
  }
};
</script>
