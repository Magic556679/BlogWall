<template>
  <div
    class="mt-4 p-6 border-2 border-black rounded-lg"
    v-for="item in data"
    :key="item._id"
  >
    <section class="flex">
      <img
        class="w-[45px] h-[45px] mr-4 border-2 border-black rounded-full inline-block"
        :src="userDefault"
        alt=""
      />
      <div>
        <p>tony</p>
        <span>2023/03/08</span>
      </div>
    </section>
    <section class="mt-4">
      <div>
        {{ item.content }}
      </div>
      <img class="mt-4" :src="demo" alt="" />
      <i class="fa-regular fa-heart mt-5 mr-2"></i>
      <span>4444個讚</span>
    </section>
    <section class="flex mt-4 items-center">
      <img
        class="w-[45px] h-[45px] mr-4 border-2 border-black rounded-full inline-block"
        :src="userDefault"
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
    <section class="flex px-4 py-[18px]">
      <img
        class="w-[45px] h-[45px] mr-4 border-2 border-black rounded-full inline-block"
        :src="userDefault"
        alt=""
      />
      <div>
        <div>
          <p>路人甲</p>
          <span>2023/03/08</span>
        </div>
        <div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            delectus assumenda tenetur reprehenderit eveniet possimus nulla
            quasi voluptate consequatur cumque, architecto, excepturi nihil,
            sequi corrupti doloremque necessitatibus totam! In, corporis?
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import userDefault from '@/assets/images/userDefault.jpg';
import demo from '@/assets/images/space.jpg';

interface dataItem {
  _id: string;
  content: string;
}

const props = defineProps({
  data: {
    type: Array<dataItem>,
    required: true,
  },
});
console.log(props);
</script>
