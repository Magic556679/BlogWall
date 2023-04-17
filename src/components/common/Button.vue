<template>
  <button
    :class="style"
    type="button"
    class="py-4 border-2 border-solid border-black rounded-lg text-white"
  >
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: 'w-full',
  },
  bgColor: {
    type: String,
    default: 'bg-[#03438D]',
  },
  shadow: {
    type: Boolean,
    default: false,
  }
});

const style = computed(() => [
  props.size,
  props.bgColor,
  props.shadow ? 'shadow-3xl' : '',
]);
</script>
