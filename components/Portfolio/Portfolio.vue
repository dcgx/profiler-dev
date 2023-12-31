<template>
  <main class="home">
    <transition name="fade">
      <div v-if="!loading">
        <PortfolioHero v-if="userData" :user="userData" />
        <PortfolioAbout v-if="userData" :user="userData" />
        <PortfolioExperience v-if="userData" :user="userData" />
        <PortfolioProjects v-if="userData" :user="userData" />
        <PortfolioBlog v-if="userData" :user="userData" />
        <PortfolioContact v-if="userData" :user="userData" />
      </div>
    </transition>

    <transition name="fade">
      <Loader v-if="loading" />
    </transition>
  </main>
</template>

<script setup>
import Loader from "@/components/Loader/Loader.vue";

const userData = ref({
  name: "Sourav Mondal",
  username: "souravmondaldev",
  email: "",
  experience: [
    {
      company: "Google",
      role: "Software Engineer",
      startDate: "2020-01-01",
      endDate: "2020-01-01",
      description: "I am a software engineer at Google.",
    },
    {
      company: "Facebook",
      role: "Software Engineer",
      startDate: "2020-01-01",
      endDate: "2020-01-01",
      description: "I am a software engineer at Facebook.",
    },
    {
      company: "Microsoft",
      role: "Software Engineer",
      startDate: "2020-01-01",
      endDate: "2020-01-01",
      description: "I am a software engineer at Microsoft.",
    },
  ],
  projects: [
    {
      name: "Project 1",
      description: "This is project 1.",
      url: "",
      tags: ["React", "JavaScript"],
    },
  ],
});
</script>

<style lang="scss">
.home {
  min-height: 100vh;
  position: relative;
  padding-top: 90px;
  padding-bottom: $space-lg;
}

@media screen and (min-width: $bp-tablet) {
  .home {
    display: flex;
    flex-direction: column;
    padding: 120px $padding-lg;
    max-width: $site-width;
    margin: 0 auto;
  }
}
</style>
