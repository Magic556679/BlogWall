<template>
  <div>
    <input
      type="text"
      class="border-blue-500 border-2 mt-2"
      v-model="firstName"
    />
    <input
      type="text"
      class="border-blue-500 border-2 mt-2"
      v-model="lastName"
    />
    <input
      type="text"
      class="border-blue-500 border-2 mt-2"
      v-model="computedName"
    />
  </div>
</template>
<script setup lang="ts">
import axios from 'axios';
import { ref, computed } from 'vue';
const api = import.meta.env.VITE_SERVER_BASE_API;
const apiData = ref([]);
axios
  .get(`${api}/posts`)
  .then((res) => {
    const {
      data: { data },
    } = res;
    apiData.value = data;
  })
  .catch((err) => {
    console.error(err);
  });
const firstName = ref('Li');
const lastName = ref('tony');
const computedName = computed({
  get() {
    return firstName.value + ' ' + lastName.value;
  },
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(' ');
  },
});
</script>
