<template>
  <section id="work" class="container">
    <Heading text="My work" :index="3" />

    <div>
      <div v-for="(project, index) in user.projects" :key="index">
        <Project
          :key="project.source"
          :project="project"
          :is-flipped="index % 2 === 0"
        />
      </div>

      <a href="https://github.com/ovieokeh" class="more-projects">
        All publicly available projects
      </a>
    </div>
  </section>
</template>

<script>
import Project from "./Project.vue";

export default {
  components: {
    Project,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLoading: true,
      pageData: {},
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  font-family: "Poppins";
  margin-top: 200px;
  padding-top: $space-xxl;
}

.more-projects {
  display: inline-block;
  background-color: transparent;
  color: $c-light-shades;
  border: 1px solid $c-light-shades;
  border-radius: 4px;
  font-size: 14px;
  text-decoration: none;
  margin: $space-xs 0;
  padding: $space-xs $space-sm;
}

.posts {
  display: flex;
  flex-wrap: wrap;

  &-header {
    margin-top: $space-xxl;
  }
}

.all-posts {
  display: inline-block;
  background-color: transparent;
  color: $c-light-shades;
  border: 1px solid $c-light-shades;
  border-radius: 4px;
  font-size: 14px;
  text-decoration: none;
  margin: $space-sm 0;
  padding: $space-xs $space-sm;
}

@media screen and (min-width: $bp-tablet) {
  .container {
    padding-top: $space-xxxl;
  }

  .more-projects {
    margin: 0;
    margin-right: $space-xs;
    transition: background-color ease 250ms 50ms, color ease 300ms;

    &:hover {
      background-color: $c-light-shades;
      color: $c-dark-shades;
    }
  }

  .all-posts {
    margin-right: $space-xs;
    transition: background-color ease 250ms 50ms, color ease 300ms;

    &:hover {
      background-color: $c-light-shades;
      color: $c-dark-shades;
    }
  }
}
</style>
