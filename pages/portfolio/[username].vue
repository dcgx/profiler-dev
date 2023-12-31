<script setup>
import PortfolioNotFound from "@/components/Portfolio/PortfolioNotFound.vue";
import Portfolio from "@/components/Portfolio/Portfolio.vue";

const loading = ref(false);
const loaderText = ref("Doing the magic 🪄💫 ...");

const user = {
  name: "Sourav Mondal",
  username: "souravmondaldev",
  email: "",
};

// onMounted(() => {
//   setTimeout(() => {
//     loaderText.value =
//       "I recommend you have the same username on Github, Hashnode and Dev.to 🪄💫 ...";
//   }, 1500);
//   setTimeout(() => {
//     loaderText.value =
//       "I am fetching your data from Github, Hashnode and Dev.to 🪄💫 ...";
//   }, 3000);
//   setTimeout(() => {
//     loading.value = false;
//   }, 4500);
// });
</script>

<template>
  <div v-if="loading">
    <h2>{{ loaderText }}</h2>
  </div>

  <div v-else>
    <div v-if="!user">
      <PortfolioNotFound />
    </div>

    <div v-else>
      <Portfolio :user="user" />
    </div>
  </div>
</template>
