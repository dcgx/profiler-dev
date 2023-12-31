<template>
  <div class="b-container">
    <Heading text="My latest blog posts" />

    <div class="section">
      <template v-for="(post, index) in pageData" :key="index">
        <nuxt-link>
          <span class="p-date">{{ new Date(post.date).toDateString() }}</span>
          <h2 class="p-title">{{ post.title }}</h2>
          <h3 class="p-description">{{ post.description }}</h3>

          <svg width="100%" height="100%" v-html="makeRects(700, 350)" />
        </nuxt-link>
      </template>
    </div>
    <nuxt-link to="/blog" class="all-posts"> All blog posts </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      pageData: []
    };
  },
};
</script>

<style lang="scss" scoped>
.b-container {
  margin-top: $space-xxl;
}

.section {
  display: flex;
  flex-wrap: wrap;
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
