<template>
  <div
    class="mt-4 p-6 border-2 border-black"
    v-for="item in data"
    :key="item._id"
  >
    <div class="flex">
      <img
        class="w-[45px] h-[45px] mr-4 border-2 border-black rounded-full inline-block"
        :src="userDefault"
        alt=""
      />
      <div>
        <p>tony</p>
        <span>2023/03/08</span>
      </div>
    </div>
    <div class="mt-4">
      <div>
        {{ item.content }}
      </div>
      <img :src="demo" alt="" />
    </div>
  </div>
</template>
<script setup lang="ts">
import userDefault from '@/assets/images/userDefault.jpg';
import demo from '@/assets/images/space.jpg';

interface dataItem {
  _id: string;
  content: string;
}

const props = defineProps({
  data: {
    type: Array<dataItem>,
    required: true,
  },
});
console.log(props)
</script>
