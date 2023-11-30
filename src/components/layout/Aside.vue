<template>
  <div
    :class="props.width"
    class="hidden sm:block px-5 py-8 h-full border-2 rounded-lg border-black"
  >
    <div v-if="storeUser.userLoggedIn">
      <button
        type="button"
        class="w-full py-4 border-2 border-solid border-black rounded-lg text-white bg-[#03438D] shadow-3xl"
        @click="$router.push({ path: 'posts' })"
      >
        張貼動態
      </button>
      <div class="flex items-center mt-6">
        <img
          class="w-[45px] h-[45px] mr-4 border-2 border-black rounded-full inline-block"
          :src="storeUser.userProfilePhoto || profilePictureDefault"
          alt=""
        />
        <p>{{ storeUser.userName }}</p>
      </div>
      <div
        class="flex items-center mt-6 cursor-pointer"
        @click="$router.push({ path: '/' })"
      >
        <div
          class="w-[45px] h-[45px] mr-4 border-2 border-black rounded-full flex justify-center items-center"
        >
          <i class="fa-solid fa-house"></i>
        </div>
        <p>首頁</p>
      </div>
      <div
        class="flex items-center mt-6 cursor-pointer"
        @click="$router.push({ path: 'user' })"
      >
        <div
          class="w-[45px] h-[45px] mr-4 border-2 border-black rounded-full inline-block relative"
        >
          <i
            class="fa-solid fa-pen-to-square text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          ></i>
        </div>
        <p>修改個人資料</p>
      </div>
      <div class="flex items-center mt-6 cursor-pointer" @click="signOut">
        <div
          class="w-[45px] h-[45px] mr-4 border-2 border-black rounded-full flex justify-center items-center"
        >
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
        </div>
        <p>登出</p>
      </div>
    </div>
    <div v-else>
      <button
        class="w-full py-4 border-2 border-solid border-black rounded-lg text-white bg-[#03438D] shadow-3xl"
        @click="$router.push({ path: 'login' })"
      >
        登入
      </button>
      <button
        class="w-full mt-2 py-4 border-2 border-solid border-black rounded-lg text-white bg-[#03438D] shadow-3xl"
        @click="$router.push({ path: 'login/register' })"
      >
        註冊
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import profilePictureDefault from '@/assets/images/userDefault.jpg';
import { useUserStore } from '@/stores';
import { watchEffect, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
  width: {
    type: String,
    default: 'sm:w-[30%]',
  },
});

const router = useRouter();
const route = useRoute();
const storeUser = useUserStore();
storeUser.getProfile();

const matchPath = ref(['/user', '/posts']);

watchEffect(() => {
  const currentParams = route.path;
  const userLoggedIn = storeUser.userLoggedIn;
  if (matchPath.value.includes(currentParams) && !userLoggedIn) {
    router.push({ path: '/' });
  }
});

const signOut = () => {
  storeUser.userLoggedIn = false;
  document.cookie = 'id_user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  document.cookie = 'id_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};
</script>
