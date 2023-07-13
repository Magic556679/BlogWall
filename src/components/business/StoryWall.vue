<template>
  <div v-if="data.length !== 0">
    <div
    v-for="item in data"
    :key="item._id"
    class="mt-4 p-6 border-2 border-black rounded-lg"
    >
      <section class="flex">
        <img
          class="w-[45px] h-[45px] mr-4 border-2 border-black rounded-full inline-block"
          :src="item.user.photo || userDefault"
          alt=""
        />
        <div>
          <p>{{ item.user.name }}</p>
          <span>{{ item.createAt }}</span>
        </div>
      </section>
      <section class="mt-4">
        <div>
          {{ item.content }}
        </div>
        <img class="mt-4" :src="item.image" alt="" />
        <i class="fa-regular fa-heart mt-5 mr-2"></i>
        <span>{{ item.likes || 0}} 個讚</span>
      </section>
      <section class="flex mt-4 items-center">
        <img
          class="w-[45px] h-[45px] mr-4 border-2 border-black rounded-full inline-block"
          :src="mainStore.userProfilePhoto || userDefault"
          alt=""
        />
        <input
          type="text"
          placeholder="請留言"
          class="grow h-10 px-4 rounded-l-lg border-l-2 border-t-2 border-b-2 border-black"
        />
        <button
          type="button"
          class="h-10 px-2 rounded-r-lg border-2 border-solid border-black text-white bg-[#03438D]"
        >
          留言
        </button>
      </section>
      <section v-for="commentItem in item.comments" :key="commentItem._id"  class="flex px-4 py-[18px]">
        <img
          class="w-[45px] h-[45px] mr-4 border-2 border-black rounded-full inline-block"
          :src="commentItem.user.photo || userDefault"
          alt=""
        />
        <div>
          <div>
            <p>{{ commentItem.user.name }}</p>
            <span>{{ commentItem.createdAt }}</span>
          </div>
          <div>
            <div>
              <p>{{ commentItem.comment }}</p>
            </div>
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
import userDefault from '@/assets/images/userDefault.jpg';
import { useMainStore } from '@/store/index';

const mainStore = useMainStore();

interface commentItem {
  _id: string;
  user: {
    name: string,
    photo: string,
  };
  comment: string,
  createdAt: string
}

interface dataItem {
  _id: string;
  user: {
    name: string
    photo: string,
  };
  content: string;
  comments: commentItem[];
  image: string;
  likes: number;
  createAt: string;
}

defineProps({
  data: {
    type: Array<dataItem>,
    required: true,
  },
});
</script>
