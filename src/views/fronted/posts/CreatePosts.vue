<template>
  <div class="flex justify-between sm:mt-12 p-4 sm:p-0">
    <section class="sm:w-[65%]">
      <div class="w-full py-4 rounded-lg border-2 border-solid border-black">
        <h1
          class="text-xl font-medium text-center"
          @click="$router.push({ path: '' })"
        >
          張貼動態
        </h1>
      </div>
      <div class="mt-3 p-8 rounded-lg border-2 border-solid border-black">
        <h3 class="text-base">貼文內容</h3>
        <textarea
          v-model="comment"
          name="userComment"
          rows="4"
          cols="50"
          class="mt-1 px-4 py-3 w-full rounded-lg border-2 border-solid border-black"
        >
        </textarea>
      </div>

      <!-- upload image -->
      <div>
        <label
          for="fileUpload"
          class="inline-block my-4 px-8 py-4 border-2 border-solid border-black rounded-lg text-white bg-black cursor-pointer"
          >上傳圖片</label
        >
        <input
          id="fileUpload"
          ref="fileUpload"
          type="file"
          class="hidden"
          @change="upload($event)"
        />
      </div>

      <div
        class="w-full h-[157px] rounded-lg border-2 border-solid border-black bg-cover bg-center"
        :style="{ backgroundImage: `url(${imageUrl})` }"
      ></div>
      <div class="text-center">
        <Button class="my-4" size="w-80" @click="submitData"> 送出貼文 </Button>
      </div>
    </section>
    <Aside></Aside>
  </div>
</template>
<script setup lang="ts">
import { createPosts } from '@/services/api/post';
import { uploadImage } from '@/services/api/upload';
import Aside from '@/components/layout/Aside.vue';
import Button from '@/components/common/Button.vue';
import { ref } from 'vue';
// import useStore from '@/store/index';
import { useUserStore } from '@/stores';

const mainStore = useUserStore();
console.log(mainStore.userId);
const comment = ref('');
const imageUrl = ref('');
const submitData = async (): Promise<void> => {
  try {
    const data = {
      image: imageUrl.value,
      content: comment.value,
      user: mainStore.userId,
    };
    await createPosts(data);
  } catch (error) {
    console.error(error);
  }
};
const upload = async (e: Event) => {
  try {
    const target = e.target as HTMLInputElement;
    const files = target?.files?.[0];
    if (!files) {
      return;
    }
    const imageFormData = new FormData();
    imageFormData.append('file', files);
    const {
      data: { data },
    } = await uploadImage(imageFormData);
    imageUrl.value = data.url;
  } catch (error) {
    console.error(error);
  }
};
</script>
