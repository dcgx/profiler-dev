<template>
  <section id="experience" class="container">
    <Heading text="Where I've worked" :index="2" />
    <ExperienceTab :experience="user.experience" />
  </section>
</template>

<script>
import Heading from "@/components/Heading/Heading.vue";
import ExperienceTab from "./ExperienceTab.vue";

export default {
  components: {
    Heading,
    ExperienceTab,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.container {
  font-family: "Poppins";
  margin-top: 200px;
  padding-top: $space-xxl;
}
@media screen and (min-width: $bp-tablet) {
  .container {
    padding-top: $space-xxxl;
  }
}
</style>
