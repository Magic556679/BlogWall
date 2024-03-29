<template>
  <div v-if="data.length !== 0">
    <div
      v-for="(item, index) in computedPostData"
      :key="item.uuid"
      class="mt-4 p-6 border-2 border-black rounded-lg"
    >
      <section class="flex">
        <img
          class="w-[45px] h-[45px] mr-4 border-2 border-black rounded-full"
          :src="item.user.photo || userDefault"
          alt="posterLogo"
        />
        <div>
          <p>{{ item.user.name }}</p>
          <span>{{ formatData(item.createAt) }}</span>
        </div>
      </section>
      <section class="mt-4">
        <p>{{ item.content }}</p>
        <div
          v-if="item.image"
          class="mt-4 w-full h-52 bg-cover bg-center"
          :style="{ backgroundImage: `url(${item.image})` }"
        ></div>
        <span @click="toggleLike(item._id, item.likes)">
          <button v-if="checkoutLogin" type="button">
            <i
              class="fa-regular fa-heart cursor-pointer mt-5 mr-2"
              :class="{ 'text-red-500': isLiked(item.likes) }"
            ></i>
          </button>
          <button v-else type="button">
            <i class="fa-regular fa-heart cursor-pointer mt-5 mr-2"></i>
          </button>
        </span>
        <span>{{ item.likes.length || 0 }} 個讚</span>
      </section>
      <section class="flex mt-4 items-center">
        <img
          class="w-[45px] h-[45px] mr-4 border-2 border-black rounded-full"
          :src="
            userStore.userProfilePhoto
              ? userStore.userProfilePhoto
              : userDefault
          "
          alt="loggedInUserLogo"
        />
        <input
          v-model="commons[index]"
          type="text"
          placeholder="請留言"
          class="h-10 px-4 rounded-l-lg border-l-2 border-t-2 border-b-2 border-black sm:flex-grow min-w-0"
        />
        <button
          @click="submitCommons(index, item._id)"
          type="button"
          class="h-10 px-2 rounded-r-lg border-2 border-solid border-black text-white bg-[#03438D] whitespace-nowrap"
        >
          <span>留言</span>
        </button>
      </section>
      <section
        v-for="commentItem in item.comments"
        :key="commentItem._id"
        class="flex px-4 py-[18px]"
      >
        <img
          class="w-[45px] h-[45px] mr-4 border-2 border-black rounded-full"
          :src="commentItem.user.photo || userDefault"
          alt="commenterLogo"
        />
        <div>
          <div>
            <p>{{ commentItem.user.name }}</p>
            <span>{{ formatData(commentItem.createdAt) }}</span>
          </div>
          <div>
            <p class="break-words">{{ commentItem.comment }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
  <div v-else class="mt-4 p-6 border-2 border-black rounded-lg">
    <p>目前尚無動態，新增一則貼文吧！</p>
  </div>
</template>
<script setup lang="ts">
import { nanoid } from 'nanoid';
import userDefault from '@/assets/images/userDefault.jpg';
import { useUserStore } from '@/stores';
import { ApiAddLike, ApiUnLike, createComment } from '@/services/api/post';
import { reactive, computed } from 'vue';
import unLoginError from '@/hooks/unLoginError';

const userStore = useUserStore();
const emits = defineEmits(['getAllPosts']);

const computedPostData = computed(() => {
  return props.data.map((item) => {
    return { ...item, uuid: nanoid() };
  });
});

const formatData = (date: string) => {
  return date.split('T')[0];
};

const checkoutLogin = computed(() => {
  return userStore.checkLogin;
});

const isLiked = (items: string[]) => {
  return items.includes(userStore.userId);
};

let commons = reactive([]);

const submitCommons = async (commonIndex: number, postId: string) => {
  try {
    const getCommon = commons[commonIndex];
    const params = {
      postId,
      comment: getCommon,
      user: userStore.userId,
    };
    await createComment(params);
    commons = [];
    emits('getAllPosts');
  } catch (err) {
    unLoginError(err as Error);
  }
};

const toggleLike = (_id: string, items: string[]) => {
  const liked = isLiked(items);
  if (liked) {
    unLike(_id);
  } else {
    addLike(_id);
  }
};

const addLike = async (_id: string) => {
  try {
    const data = {
      postId: _id,
    };
    await ApiAddLike(data);
    emits('getAllPosts');
  } catch (err) {
    unLoginError(err as Error);
  }
};

const unLike = async (_id: string) => {
  try {
    const data = {
      postId: _id,
    };
    await ApiUnLike(data);
    emits('getAllPosts');
  } catch (err) {
    unLoginError(err as Error);
  }
};

interface commentItem {
  _id: string;
  user: {
    name: string;
    photo: string;
  };
  comment: string;
  createdAt: string;
}

interface dataItem {
  _id: string;
  user: {
    name: string;
    photo: string;
  };
  content: string;
  comments: commentItem[];
  image: string;
  likes: Array<string>;
  createAt: string;
}

const props = defineProps({
  data: {
    type: Array<dataItem>,
    required: true,
  },
});
</script>
