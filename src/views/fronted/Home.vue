<template>
  <main
    class="sm:w-[860px] flex justify-between mx-auto mt-12"
  >
    <div class="sm:w-[65%] flex justify-between">
      <select
        name="最新貼文"
        class="mr-3 border-2 border-solid border-black w-[156px] h-11"
      >
        <option value="最新貼文">最新貼文</option>
        <option value="2">2</option>
      </select>
      <div class="relative grow">
        <input
          type="text"
          class="p-2 pl-8 w-full border-2 border-solid border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
          placeholder="search..."
          value="Gar"
        />
        <svg
          class="w-4 h-4 absolute left-2.5 top-3.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
    <div class="sm:w-[30%] px-5 py-8 border-2 border-black">
      <button
        type="button"
        class="w-full py-4 border-2 border-solid border-black rounded-lg text-white bg-[#03438D] shadow-3xl"
      >
        張貼動態
      </button>
    </div>
  </main>
</template>
<script setup lang="ts">

</script>
