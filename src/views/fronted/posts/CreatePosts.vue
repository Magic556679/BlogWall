<template>
  <div class="flex justify-between mt-12">
    <section class="sm:w-[65%]">
      <div class="w-full py-4 rounded-lg border-2 border-solid border-black">
        <h1 class="text-xl font-medium text-center">張貼動態</h1>
      </div>
      <div class="mt-3 p-8 rounded-lg border-2 border-solid border-black">
        <h3 class="text-base">貼文內容</h3>
        <textarea
          v-model="comment"
          name="w3review"
          rows="4"
          cols="50"
          class="mt-1 px-4 py-3 rounded-lg border-2 border-solid border-black"
        >
        </textarea>
      </div>
      <Button class="my-4" size="w-[128px]" bg-color="bg-black">
        上傳圖片
      </Button>
      <div
        class="w-full h-[157px] rounded-lg border-2 border-solid border-black"
      ></div>
      <div class="text-center">
        <Button class="my-4" size="w-80">
          送出貼文
        </Button>
      </div>
    </section>
    <Aside></Aside>
  </div>
</template>
<script setup lang="ts">
import Aside from '@/components/layout/Aside.vue';
import Button from '@/components/common/Button.vue';
import { ref } from 'vue';
const comment = ref('hello');
</script>
