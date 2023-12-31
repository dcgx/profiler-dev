<template>
  <svg
    class="loader"
    width="259"
    height="201"
    viewBox="0 0 259 201"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      id="big-circle"
      cx="110"
      cy="107"
      r="89"
      stroke="#FF6464"
      stroke-width="10"
    />
    <circle
      id="small-circle"
      cx="175"
      cy="127"
      r="69"
      fill="#0b1a2e"
      stroke="#FF6464"
      stroke-width="10"
    />
    <circle
      id="dot"
      cx="229"
      cy="188"
      r="10"
      fill="#FF6464"
      stroke="#FF6464"
      stroke-width="3"
    />
  </svg>
</template>

<style lang="scss" scoped>
.loader {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  #big-circle {
    animation: fadeBigCircle 1500ms ease infinite alternate;
  }

  #small-circle {
    animation: moveSmallCircle 1500ms ease infinite alternate 50ms;
  }

  #dot {
    animation: moveDot 1500ms ease infinite alternate 100ms;
  }
}

@keyframes fadeBigCircle {
  0% {
    stroke: $c-brand;
  }
  100% {
    stroke: transparent;
  }
}

@keyframes moveSmallCircle {
  0% {
    cx: 175px;
    cy: 127px;
    fill: $c-brand;
    stroke: $c-brand;
  }
  100% {
    cx: 111px;
    cy: 107px;
    fill: $c-background;
    stroke: $c-background;
  }
}

@keyframes moveDot {
  0% {
    cx: 229px;
    cy: 188px;
    fill: $c-brand;
    stroke: $c-background;
  }
  100% {
    cy: 165px;
    cx: 193px;
    fill: $c-background;
    stroke: $c-background;
  }
}
</style>
