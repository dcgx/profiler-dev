<template>
  <div class="tabs">
    <ul role="tablist" aria-label="Experience tabs" class="tabs-list">
      <li
        v-for="(role, index) in experience"
        :key="role.company"
        role="tab"
        class="tabs-list-li"
      >
        <button
          :id="`tab-${index}`"
          :class="
            role.company === selectedExperience.company
              ? 'tabs-button selected'
              : 'tabs-button'
          "
          type="button"
          @click="selectExperience(role, index, $event)"
        >
          <span>{{ role.company }}</span>
        </button>
      </li>

      <span class="highlight" :style="highlightStyle"></span>
    </ul>

    <div role="tabpanel" class="tabs-panel">
      <h2 class="tabs-roletitle">
        {{ selectedExperience.designation }}
        <a :href="selectedExperience.url" class="tabs-roletitle--company">
          @
          {{ selectedExperience.company }}
        </a>
      </h2>
      <p class="tabs-date">{{ selectedExperience.date }}</p>

      <ul class="tabs-roles">
        <li
          v-for="role in selectedExperience.roles"
          :key="role"
          class="tabs-roles-role"
        >
          {{ role }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// const mq = window.matchMedia('(max-width: 768px)')

export default {
  props: {
    experience: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      // isMobile: mq.matches,
      isMobile: false,
      selectedExperience: this.experience[0],
      activeTabId: 0,
    }
  },
  computed: {
    highlightStyle() {
      const translate = this.isMobile
        ? `translateX(${this.activeTabId > 0 ? this.activeTabId * 150 : 0}px);`
        : `translateY(${this.activeTabId > 0 ? this.activeTabId * 40 : 0}px);`

      return `transform: ${translate}`
    },
  },
  mounted() {
    this.$nextTick(() => {
      mq.addListener(this.updateIsMobile)
    })
  },
  methods: {
    updateIsMobile(e) {
      this.isMobile = e.matches
    },
    selectExperience(experience, tabId, event) {
      const { target } = event
      target.parentElement.parentElement.scrollLeft = target.offsetLeft

      this.selectedExperience = experience
      this.activeTabId = tabId
    },
  },
}
</script>

<style lang="scss" scoped>
.tabs {
  display: block;
  position: relative;
  min-height: 300px;

  &-list {
    display: flex;
    position: relative;
    padding: 0;
    margin: 0;
    margin-left: -#{$padding-sm};
    margin-bottom: $space-md;
    list-style: none;
    overflow-x: scroll;
    scrollbar-width: none;
    z-index: 3;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    &:first-of-type {
      margin-left: 0;
    }

    &-li {
      color: $c-white;
    }
  }

  &-panel {
    min-height: 360px;
  }

  &-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    width: 150px;
    background-color: transparentize($color: $c-dark-accent, $amount: 0.9);
    color: $c-white;
    font-size: 14px;
    height: 40px;
    padding: 0 $space-sm;
    transition: $transition;
    border-style: none;
    border-bottom: 2px solid $c-dark-accent;
    border-radius: 0;
    white-space: nowrap;
    outline: none;
    opacity: 0.6;
    transition: all 250ms $transition 0s;

    * {
      pointer-events: none;
    }

    &:hover,
    &.selected {
      background-color: transparentize($color: $c-dark-accent, $amount: 0.9);
      opacity: 1;
    }
  }

  &-roletitle {
    color: $c-light-shades;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: $space-xs;

    &--company {
      color: $c-white;
      text-decoration: none;
    }
  }

  &-date {
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 0.05em;
    color: $c-dark-accent;
    margin-bottom: $space-md;
  }

  &-roles {
    color: $c-white;
    font-size: 16px;
    font-weight: 300;
    list-style: none;
    padding-left: 0;

    &-role {
      line-height: 20px;
      margin-bottom: $space-sm;
      padding-left: $space-md;
      position: relative;

      &::before {
        content: '▹';
        position: absolute;
        left: 0;
        font-size: 18px;
        line-height: 20px;
      }
    }
  }
}

.highlight {
  display: block;
  background: $c-light-shades;
  height: 2px;
  border-radius: 5px;
  position: absolute;
  left: 0;
  transition: transform 250ms $transition;
  transition-delay: 0.1s;
  z-index: 10;
  width: 100%;
  max-width: 150px;

  top: auto;
  bottom: 0;
  margin-left: 0;
}

@media screen and (min-width: $bp-tablet) {
  .tabs {
    display: flex;

    &-list {
      display: block;
      border-bottom: 0;
      min-width: max-content;
      width: initial;
      margin-right: $space-xxl;
      overflow-x: hidden;
    }

    &-button {
      justify-content: flex-start;
      width: 200px;
      border-bottom: 0;
      border-left: 2px solid $c-dark-accent;
      white-space: normal;
      cursor: pointer;
    }

    &-roletitle--company:hover {
      color: $c-light-shades;
    }

    &-roles {
      font-size: 16px;
      font-weight: 300;
      opacity: 0.8;

      &-role {
        line-height: normal;

        &::before {
          font-size: 16px;
        }
      }
    }
  }

  .highlight {
    display: block;
    background: $c-light-shades;
    width: 2px;
    height: 40px;
    border-radius: 3px;
    left: 0;
    top: 0;
  }
}
</style>
