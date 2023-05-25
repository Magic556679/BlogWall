<template>
  <section class="text-center">
    <img
      :src="form.photo ? form.photo : profilePictureDefault"
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
      @change="ApiUpload($event)"
    />
  </section>
  <section>
    <label>暱稱</label>
    <input
      v-model="form.name"
      type="text"
      placeholder="Password"
      class="w-full h-[50px] mt-1 px-6 py-4 border-2 border-solid border-black"
    />
  </section>
  <section class="mt-4">
    <p>性別</p>
    <label>
      <input type="radio" v-model="form.gender" value="male" />
      男性
    </label>
    <label class="ml-6">
      <input type="radio" v-model="form.gender" value="female" />
      女性
    </label>
  </section>
  <section v-if="errorText">
    <p class="text-red-500">{{ errorText }}</p>
  </section>
  <div class="text-center">
    <Button type="button" class="my-4" size="w-80" @click="ApiUpdateProfile"> 送出更新 </Button>
  </div>
</template>
<script setup lang="ts">
import Button from '@/components/common/Button.vue';
import profilePictureDefault from '@/assets/images/userDefault.jpg';
import { ref } from 'vue';
import { useMainStore } from '@/store/index';
import { uploadImage } from '@/services/api/upload';
import { updateProfile } from '@/services/api/user';

interface FormData {
  name: string;
  gender: string;
  photo: string;
}

const form = ref<FormData>({ name: '', gender: '', photo: '' });
const userStore = useMainStore();
const userId = userStore.userId;
console.log('getUserId', userId);
const fileUpload = ref(null);
const errorText = ref('');

const ApiUpload = async (e: Event) => {
  try {
    const target = e.target as HTMLInputElement;
    const files = target?.files?.[0];
    if (!files) {
      return;
    }
    const checkImageSize = await checkImageResolution(e);
    if (checkImageSize) return;

    const imageFormData = new FormData();
    imageFormData.append('file', files);
    const {
      data: { data },
    } = await uploadImage(imageFormData);
    form.value.photo = data.url;
  } catch (error) {
    console.error(error);
  }
};

const ApiUpdateProfile = async () => {
  try {
    const { data } = await updateProfile(form.value);
    console.log('ApiUpdateProfile' ,data);
  } catch (err) {
    console.error(err);
  }
};

const checkImageResolution = (e: Event): Promise<boolean> => {
  return new Promise((resolve) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      const img = new Image();
      img.onload = () => {
        const resolution = {
          width: img.width,
          height: img.height,
        };
        if (resolution.width !== resolution.height) {
          errorText.value = '圖片寬高比必需為 1:1，請重新輸入請重新輸入';
          resolve(true);
          return;
        }
        if (resolution.width > 1000 || resolution.height > 1000) {
          errorText.value = '解析度寬度至少小於 1000像素以上，請重新輸入';
          resolve(true);
          return;
        }
        errorText.value = '';
        resolve(false);
      };
      img.src = URL.createObjectURL(file);
      img.onerror = () => {
        console.log('Image load error');
      };
    }
  });
};

</script>
