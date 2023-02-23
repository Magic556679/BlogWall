<template>
  <input
    type="text"
    placeholder="暱稱"
    class="w-full h-[50px] mt-4 px-6 py-4 border-2 border-solid border-black"
  />
  <input
    name="email"
    type="text"
    placeholder="Email"
    class="w-full h-[50px] mt-4 px-6 py-4 border-2 border-solid border-black"
  />
  <input
    type="text"
    placeholder="Password"
    class="w-full h-[50px] mt-4 px-6 py-4 border-2 border-solid border-black"
  />
  <button
    type="submit"
    class="w-full mt-9 py-4 border-2 border-solid border-black rounded-lg text-white bg-[#03438D] shadow-3xl"
  >
    註冊
  </button>
  <p class="mt-4 text-base text-center">
    <router-link
      :to="{
        name: 'login',
      }"
      >登入</router-link
    >
  </p>
</template>
