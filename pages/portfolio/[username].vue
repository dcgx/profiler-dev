<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { useUserBuilder } from "@/composables/useUserBuilder";
import PortfolioNotFound from "@/components/Portfolio/PortfolioNotFound.vue";
import Portfolio from "@/components/Portfolio/Portfolio.vue";

const userStore = useUserStore();
const { buildUser } = useUserBuilder();
const { params } = useRoute();
const { username, isPreview } = params;

const loading = ref(false);
const loaderText = ref("Doing the magic 🪄💫 ...");

const user = {
  name: "Sourav Mondal",
  username: "souravmondaldev",
  email: "",
};

onMounted(async () => {
  setTimeout(() => {
    loaderText.value =
      "I recommend you have the same username on Github, Hashnode and Dev.to 🪄💫 ...";
  }, 1500);
  try {
    const user = await buildUser({
      username: username.toString(),
      isPreview: !!isPreview,
    });
    userStore.setUser(user);
  } catch (error) {
    console.log(error);
  }
  setTimeout(() => {
    loaderText.value =
      "I am fetching your data from Github, Hashnode and Dev.to 🪄💫 ...";
  }, 3000);
  setTimeout(() => {
    loading.value = false;
  }, 4500);
});
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
