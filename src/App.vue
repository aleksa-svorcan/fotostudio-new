<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import Vue from 'vue'
import Parallax from 'vue-parallaxy'

// add vue-parallax-js to vue
Vue.use(Parallax)
export default {
  name: 'App'
}
</script>
<style lang="scss">
body {
  font-family: 'Lato', sans-serif;
  p {
    font-size: 17px;
  }
}
.content-container {
  z-index: 2;
  opacity: 1;
  position: relative;
  max-width: 1560px;
  margin: 0 auto;
  width: 100%;
  padding: 0 10px;

  @media only screen and (min-width: 600px) {
    padding: 0;
  }
}
.content-container-half {
  z-index: 2;
  opacity: 1;
  position: relative;
  max-width: 780px;
  margin: 0 auto;
  width: 100%;
  padding: 0 10px;

  @media only screen and (min-width: 600px) {
    padding: 0;
  }
}

.content-container-half-left {
  z-index: 2;
  opacity: 1;
  position: relative;
  max-width: 780px;
  margin-left: auto;
  margin-right: 0;
  width: 100%;
  padding: 0 10px;
}

.content-container-half-right {
  z-index: 1;
  opacity: 1;
  position: relative;
  max-width: 780px;
  margin-left: 0;
  margin-right: auto;
  width: 100%;
  padding: 0 10px;

  @media only screen and (min-width: 600px) {
    padding: 0;
  }
}

.visible-col {
  z-index: 2;
  min-height: 50vh;
}

.absolute-title {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
}

.content-col {
  padding: 10px;
}

.section-title {
  position: relative;
}

.listing-item {
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: -10px;
    height: 2px;
    width: 5px;
    background: #f23030;
    top: 50%;
    transform: translateX(-50%);
  }
  &:after {
    content: '';
    position: absolute;
    right: -15px;
    height: 2px;
    width: 5px;
    background: #f23030;
    top: 50%;
    transform: translateX(-50%);
  }
}

.section-title::before {
  content: '';
  position: absolute;
  bottom: -10px;
  height: 4px;
  width: 100%;
  background: #f23030;
  left: 0;
}
</style>
