<template>
  <div
    v-if="storeModel.isLoginModel"
    class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/12 bg-white p-5 border border-solid border-black text-right"
  >
    <span @click="closeModel" class="cursor-pointer"
      ><i class="fa fa-times" aria-hidden="true"></i
    ></span>
    <Login />
  </div>
</template>
<script setup lang="ts">
import Login from '@/views/fronted/login/Login.vue';
import useStore from '@/store/index';

const storeModel = useStore().model;
const closeModel = () => {
  storeModel.closeModel();
};
</script>
