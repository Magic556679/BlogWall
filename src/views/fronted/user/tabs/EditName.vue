<template>
  <section class="text-center">
    <img
      :src="headshot ? headshot : profilePictureDefault"
      class="w-[107px] h-[107px] border-1 border-black rounded-full mx-auto"
      alt=""
    />
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
  </section>
  <section>
    <label>暱稱</label>
    <input
      v-model="form.name"
      name="name"
      type="text"
      placeholder="Password"
      class="w-full h-[50px] px-6 py-4 border-2 border-solid border-black"
    />
  </section>
  <section class="mt-4">
    <label>
      男性
      <input type="radio" v-model="gender" value="male" />
    </label>
    <label>
      女性
      <input type="radio" v-model="gender" value="female" />
    </label>
  </section>
  <div class="text-center">
    <Button class="my-4" size="w-80"> 送出更新 </Button>
  </div>
</template>
<script setup lang="ts">
import { uploadImage } from '@/services/api/upload';
import Button from '@/components/common/Button.vue';
import profilePictureDefault from '@/assets/images/userDefault.jpg';
import { ref } from 'vue';

const form = ref<{ name: string }>({ name: '' });
const headshot = ref(''); // headshot 大頭貼
const gender = ref('');

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
    headshot.value = data.url;
  } catch (error) {
    console.error(error);
  }
};
</script>
