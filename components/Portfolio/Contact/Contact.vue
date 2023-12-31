<template>
  <section id="contact" class="container">
    <Heading text="Get in touch" :index="5" />
    <div class="form-container">
      <h2 class="form-intro">Have a question or want to work together?</h2>

      <p class="form-description">
        Whether you have a question or just want to say hi, I'll try my best to
        get back to you!
      </p>

      <a href="mailto:example@example.test" class="form-button">Say Hello</a>
    </div>
  </section>
</template>

<script>
export default {
  props: {},
};
</script>

<style lang="scss" scoped>
.container {
  font-family: "Poppins";
  margin-top: 200px;
  padding-top: $space-xxl;

  &-header {
    font-size: 14px;
    color: $c-dark-accent;
    font-weight: 300;
  }
}

.form {
  &-intro {
    color: $c-light-shades;
    margin: $space-sm 0;
    margin-bottom: $space-xl;
  }

  &-description {
    color: $c-white;
    opacity: 0.7;
    margin: $space-md 0;
  }

  &-button {
    text-decoration: none;
    display: block;
    color: $c-light-shades;
    border: 1px solid $c-light-shades;
    padding: $space-xs $space-md;
    text-align: center;
    max-width: 200px;
    margin: $space-md 0;
    margin-top: $space-xl;
  }
}

@media screen and (min-width: $bp-tablet) {
  .container {
    padding-top: $space-xxxl;

    &-header {
      text-align: center;
    }
  }

  .form {
    &-intro,
    &-description {
      text-align: center;
    }

    &-container {
      max-width: 500px;
      margin: auto;
    }

    &-button {
      margin: $space-md auto;
      margin-top: $space-xl;
      max-width: 40%;
      transition: background-color ease 200ms 50ms, border-color ease 250ms 50ms,
        color ease 300ms;

      &:hover {
        border-color: $c-light-shades;
        background-color: $c-light-shades;
        color: $c-background;
        cursor: pointer;
      }
    }
  }
}
</style>
