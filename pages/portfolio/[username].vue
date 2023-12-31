<script setup>
const loaderText = ref("Doing the magic 🪄💫 ...");

onMounted(() => {
  setTimeout(() => {
    loaderText.value =
      "I recommend you have the same username on Github, Hashnode and Dev.to 🪄💫 ...";
  }, 1500);
});
</script>

<template>
  <div>
    <h2>Username</h2>
  </div>
</template>
