<template>
  <div :class="className">
    <div class="project-content">
      <h3 class="project-content-name">{{ project.name }}</h3>
      <p class="project-content-description">{{ project.description }}</p>

      <span class="project-content-tag">
        {{ project.tags.join(', ') }}
      </span>

      <div class="project-content-links">
        <a
          :href="project.demo"
          :aria-label="`${project.name} content link`"
          class="project-content-links-link"
        >
          <font-awesome-icon class="icon" :icon="['fa', 'external-link-alt']" />
        </a>
        <a
          :href="project.source"
          :aria-label="`${project.name} source link`"
          class="project-content-links-link"
        >
          <font-awesome-icon class="icon" :icon="['fab', 'github']" />
        </a>
      </div>
    </div>

    <a
      :href="project.demo"
      class="project-image-container"
      :aria-label="`${project.name} Link`"
    >
      <img
        :src="`/images/${project.image}`"
        :alt="`Project ${project.name}'s Screenshot`"
        class="project-image"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
    isFlipped: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    className() {
      return this.isFlipped ? 'project alternate' : 'project'
    },
  },
}
</script>

<style lang="scss" scoped>
$project-height: 450px;

.project {
  background-color: #3b225d1a;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  height: $project-height;
  min-height: $project-height;
  margin: $space-xl 0;
  padding: 0 $space-md;
  position: relative;
  z-index: 0;

  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    color: $c-white;

    &-type {
      font-family: 'Source Code Pro';
      color: $c-light-shades;
      display: block;
      margin: $space-xs 0;
    }

    &-name {
      margin: $space-xs 0;
    }

    &-description {
      color: $c-light-shades;
      margin: $space-sm 0;
      line-height: 28px;
    }

    &-tag {
      display: block;
      font-size: 14px;
      margin: $space-sm 0;
      opacity: 0.8;
      font-style: italic;
    }

    &-links {
      &-link {
        color: $c-light-accent;
        font-size: 24px;
        margin-right: $space-xs;
      }
    }
  }

  &-image {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;

    &-container {
      height: $project-height;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      opacity: 0.1;
    }
  }
}

@media screen and (min-width: $bp-tablet) {
  .project {
    background-color: transparent;
    box-shadow: unset;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    grid-auto-rows: 450px;
    align-items: center;
    min-height: unset;
    height: unset;
    padding: 0;

    &.alternate {
      direction: rtl;
    }

    &.alternate &-image-container {
      transform: perspective(1000px) rotateY(25deg);
    }

    &.alternate &-content-description {
      border-radius: 8px 0 0 8px;
      direction: ltr;
      text-align: right;
      transform: translateX($space-md);
    }

    &-content {
      &-description {
        border-radius: 0 8px 8px 0;
        background-color: rgba(0, 0, 0, 0.2);
        color: $c-white;
        padding: $space-sm $space-md;
        opacity: 1;
        width: 100%;
        transform: translateX(-$space-md);
      }

      &-links-link:hover {
        color: $c-light-shades;
      }
    }

    &-image {
      box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
      object-fit: contain;
      object-position: 0 0;

      &-container {
        height: auto;
        width: auto;
        position: relative;
        opacity: 1;
        transform: perspective(1000px) rotateY(-25deg);

        &::before {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          background-color: transparentize(
            $color: $c-light-accent,
            $amount: 0.6
          );
          position: absolute;
          mix-blend-mode: multiply;
          transition: background-color ease 250ms 50ms;
        }

        &:hover::before {
          background-color: transparent;
        }
      }
    }
  }
}
</style>
