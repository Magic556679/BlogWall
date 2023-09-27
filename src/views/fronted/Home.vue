<template>
  <div class="flex justify-between sm:mt-12 p-4 sm:p-0">
    <div class="sm:w-[65%]">
      <div class="flex justify-between">
        <!-- <select
          name="最新貼文"
          class="mr-3 rounded-lg border-2 border-solid border-black w-[156px] h-11"
        >
          <option value="最新貼文">最新貼文</option>
        </select> -->
        <div class="relative grow">
          <input
            v-model="searchContent"
            @keyup.enter="getAllPosts"
            type="text"
            class="p-2 pl-8 w-full rounded-lg border-2 border-solid border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
            placeholder="搜尋文章內容..."
          />
          <svg
            class="w-4 h-4 absolute left-2.5 top-3.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <main>
        <StoryWallContent
          :data="postsData"
          @get-all-posts="getAllPosts"
        ></StoryWallContent>
      </main>
    </div>
    <Aside></Aside>
  </div>
</template>
<script setup lang="ts">
import StoryWallContent from '@/components/business/StoryWall.vue';
import Aside from '@/components/layout/Aside.vue';
import { fetchAllPosts } from '@/services/api/post';
import { ref } from 'vue';

const postsData = ref([]);
const searchContent = ref('');

const getAllPosts = async () => {
  try {
    const {
      data: { data },
    } = await fetchAllPosts({ search: searchContent.value });
    postsData.value = data;
  } catch (err) {
    console.error(err);
  }
};
getAllPosts();
</script>
