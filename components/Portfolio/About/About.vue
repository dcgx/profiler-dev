<template>
  <section id="about" class="container">
    <div class="content">
      <div>
        <p class="text">
          Hello! I'm Ovie, a frontend developer by day and part-time insomniac
          by night.
          <br /><br />
          I build stuff that can be accessed via the web, from websites, dynamic
          components, or technical articles. I care deeply about performance and
          best practices and sometimes I can spend more time on a feature to get
          it juuuust right.
          <br /><br />
          I can get productive with new technologies in very little time and I
          have a large appetite for learning new things. Just don't ask me to
          solve Gödel's Incompleteness Theorem on a whiteboard with JavaScript
          😃.
          <br /><br />
          I'm currently not looking for new opportunities but if you think you
          have an offer I can't refuse, get in touch! Here are a few
          technologies I've been working with recently:
        </p>

        <ul class="technologies">
          <li class="tech">
            <span class="tech-name">JavaScript (ES6+)</span>
          </li>
          <li class="tech">
            <span class="tech-name">React</span>
          </li>
        </ul>
      </div>

      <a class="photo-container" href="https://github.com/dcgx">
        <img
          src="https://dcgx.vercel.app/img/profile.jpeg"
          class="photo"
          alt="Grayscale photo of XXXXXXX"
        />
      </a>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  margin-top: 200px;
  padding-top: $space-xxl;
}

.text {
  color: $c-light-shades;
  font-family: "Poppins";
}

.technologies {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  padding: 0px;
  margin: 20px 0px 0px;
  list-style: none;
}

.tech {
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-size: 13px;
  color: $c-dark-accent;

  &::before {
    content: "▹";
    position: absolute;
    left: 0;
    color: $c-dark-accent;
    font-size: 14px;
    line-height: 12px;
  }
}

.photo {
  width: 100%;
  height: 100%;
  object-fit: contain;

  &-container {
    display: block;
    width: 250px;
    height: 250px;
    margin: $space-xl 0;
    position: relative;
    z-index: 0;

    &::after {
      content: "";
      display: block;
      width: inherit;
      height: inherit;
      border: 2px solid $c-dark-accent;
      position: absolute;
      top: 25px;
      left: 25px;
      opacity: 0.5;
      z-index: -1;
      transition: top $transition 250ms 50ms, left $transition 250ms 50ms;
    }
  }
}

@media screen and (min-width: $bp-tablet) {
  .container {
    padding-top: $space-xxxl;
  }

  .content {
    display: flex;
  }

  .text {
    margin-right: $space-xl;
  }

  .photo {
    &-container {
      display: block;
      margin: 0;
      min-width: 250px;
      top: 0;
      left: 0;
      transition: top $transition 250ms 50ms, left $transition 250ms 50ms;

      &::before {
        content: "";
        display: block;
        width: inherit;
        height: inherit;
        background-color: transparentize($color: $c-dark-accent, $amount: 0.6);
        position: absolute;
        mix-blend-mode: multiply;
        transition: opacity $transition 250ms 50ms;
      }

      &:hover,
      &:active {
        top: 10px;
        left: 10px;
        transition: top $transition 250ms 35ms, left $transition 250ms 35ms;

        &::before {
          opacity: 0;
          transition: opacity $transition 250ms 75ms;
        }

        &::after {
          border-color: $c-light-shades;
          top: 10px;
          left: 10px;
          opacity: 1;
          transition: top $transition 250ms 50ms, left $transition 250ms 50ms,
            opacity $transition 250ms 50ms, border-color $transition 250ms 50ms;
        }
      }
    }
  }
}
</style>
