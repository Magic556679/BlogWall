<template>
    <button
      :class="props.size"
      type="button"
      class="py-4 border-2 border-solid border-black rounded-lg text-white bg-[#03438D] shadow-3xl"
    >
      張貼動態
    </button>
</template>
<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: 'w-full'
  }
})

</script>