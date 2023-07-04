<script setup>
import { toLowerCase } from "../utils";

const username = ref("");

const onSubmit = (e) => {
  e.preventDefault();
  console.log(username.value, "submit");
  const validUsername = toLowerCase(username.value);
  if (window !== undefined) window.location = `/portfolio/${validUsername}`;
};
</script>

<template>
  <div
    class="flex items-center justify-center flex-col gap-3 h-screen border border-red-50"
  >
    <h1 class="text-6xl text-slate-900 font-bold my-2">profiler/DEV</h1>
    <p class="text-5xl font-extrabold text-orange-500">
      Get your profiler dev write your Github username
    </p>
    <form @submit="onSubmit" class="flex items-center justify-center mt-5">
      <input
        v-model="username"
        placeholder="Github username"
        class="px-8 pt-2 text-lg rounded-xl border border-slate-800"
      />
      <button
        class="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-3 mx-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </form>
    <span class="text-red-500 font-medium my-0 py-0"
      >Error message example</span
    >
    <div>
      <p>Available request 60/60</p>
    </div>
  </div>
</template>

<style></style>
