<template>
  <div :class="props.width" class="hidden sm:block px-5 py-8 h-full border-2 rounded-lg border-black">
    <button
      type="button"
      class="w-full py-4 border-2 border-solid border-black rounded-lg text-white bg-[#03438D] shadow-3xl"
    >
      張貼動態
    </button>
    <div class="flex mt-6">
      <img
        class="w-[45px] h-[45px] mr-4 border-2 border-black rounded-full inline-block"
        :src="profilePictureDefault"
        alt=""
      />
      <p>tony</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import profilePictureDefault from '@/assets/images/userDefault.jpg';
const props = defineProps({
  width: {
    type: String,
    default: 'sm:w-[30%]'
  }
})


</script>
