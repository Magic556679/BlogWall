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
      <div>
        <Button size="w-[128px]"></Button>
      </div>
    </section>
    <Aside></Aside>
  </div>
</template>
<script setup lang="ts">
import Aside from '@/components/layout/Aside.vue';
import Button from '@/components/common/button.vue'
import { ref } from 'vue';
const comment = ref('hello');

</script>
