<template>
  <q-layout view="lHh Lpr lFf">
<!--    <div id="animatedCover" class="full-width window-height absolute-top-left bg-white animated-cover flex items-center justify-center">-->
<!--      <span>logo</span>-->
<!--    </div>-->
    <q-header elevated>
      <div class="content-container">
        <q-toolbar class="q-px-none">
          <q-toolbar-title class="flex items-center justify-center q-px-none lt-sm">
            <img class="logo" src="">
          </q-toolbar-title>
          <q-toolbar-title class="flex items-center q-px-none gt-sm">
            <img class="logo" src="">
          </q-toolbar-title>
          <div class="row gt-sm">
            <a class="q-mr-md cursor-pointer" @click="scrollToElement('work')">How It Works</a>
            <a class="q-mr-md cursor-pointer" @click="scrollToElement('technologies')">Solutions</a>
            <a class="q-mr-md cursor-pointer" @click="scrollToElement('clients')">Resources</a>
            <a class="q-mr-md cursor-pointer" @click="scrollToElement('about')">About</a>
            <a class="q-mr-md cursor-pointer" @click="scrollToElement('contact')">Contact</a>
            <a class="q-ml-xl text-weight-bold cursor-pointer" @click="scrollToElement('contact')">Log In</a>
          </div>
        </q-toolbar>
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <div class="bg-grey-4 text-primary q-py-lg footer">
      <div class="content-container row justify-between items-start text-weight-bold">
        <div class="column gt-sm">
          <h4 class="q-mt-none">Foto studio</h4>
          <h6 class="q-ma-none">Pilota Mihaila Petrovića 65, Vidikovac (studio)</h6>
          <h6 class="q-ma-none">Bulevar Milutina Milankovića 120b, Novi Beograd (office)</h6>
          <h6 class="q-ma-none">Email: fotoexpressbg@gmail.com</h6>
          <h6 class="q-ma-none">Telefon: 011 2321 338 / 063 340 100</h6>
        </div>
        <div class="column gt-sm">
          <h4 class="q-mt-none">Foto / Video dogadjaji</h4>
          <h6 class="q-ma-none">Email: info@fotostudio.co.rs</h6>
          <h6 class="q-ma-none">Telefon: 066 922 3663</h6>
        </div>
        <div class="q-mt-md flex items-center justify-center full-width">
          <span>© {{new Date().getFullYear()}} Foto Studio Express</span>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll
import { TweenLite, Power2 } from 'gsap'
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  mounted () {
    TweenLite.to('#animatedCover', 2, { delay: 2, opacity: 0, ease: Power2.easeInOut })
  },
  methods: {
    scrollToElement (id) {
      const element = document.getElementById(id)
      const target = getScrollTarget(element)
      const offset = element.offsetTop
      const duration = 400
      setScrollPosition(target, offset, duration)
    }
  }
}
</script>
<style lang="scss">
.logo {
  max-height: 30px;
}
.filler {
  height: 50px;
  width: 100%;
}

.animated-cover {
  z-index: 2002;
  opacity: 1;
  pointer-events: none;
}

.footer {
  position: relative;
  z-index: 2;
}
</style>
