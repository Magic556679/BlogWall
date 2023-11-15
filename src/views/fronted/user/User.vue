<template>
  <div class="sm:flex justify-between sm:mt-12 p-4 sm:p-0">
    <section class="sm:w-[65%]">
      <div class="w-full py-4 rounded-lg border-2 border-solid border-black">
        <h1 class="text-xl font-medium text-center">修改個人資料test</h1>
      </div>
      <div class="relative mt-3">
        <div class="grid grid-cols-4 sm:grid-cols-5 px-4">
          <span
            v-for="item in tabs"
            :key="item.id"
            :class="tableStyle(item.value)"
            class="text-center whitespace-nowrap border-t border-l border-r border-solid rounded-t-lg cursor-pointer"
            @click="changeTab(item.value)"
          >
            {{ item.title }}
          </span>
        </div>
        <div class="p-8 rounded-lg border-2 border-solid border-black">
          <keep-alive>
            <component :is="currentTabComponent" />
          </keep-alive>
        </div>
      </div>
    </section>
    <Aside></Aside>
  </div>
</template>
<script setup lang="ts">
import Aside from '@/components/layout/Aside.vue';
import UpdateProfile from '@/views/fronted/user/tabs/UpdateProfile.vue';
import ResetPassWord from '@/views/fronted/user/tabs/ResetPassWord.vue';
import { ref, computed } from 'vue';

const tabs = ref<Array<{ title: string; value: string; id: number }>>([
  { title: '暱稱修改', value: 'editName', id: 0 },
  { title: '重設密碼', value: 'resetPassword', id: 1 },
]);
const currentTab = ref<string>('editName');
const changeTab = (value: string) => {
  currentTab.value = value;
};
const tableStyle = (value: string) => {
  return [
    value === currentTab.value ? 'text-white bg-black' : 'text-black bg-white',
  ];
};
const currentTabComponent = computed(() => {
  return currentTab.value === 'editName' ? UpdateProfile : ResetPassWord;
});
</script>
