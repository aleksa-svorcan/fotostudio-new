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
            <router-link to="/" v-if="$route.path !== '/'"><span class="text-white text-weight-bold cursor-pointer">Početna</span></router-link>
            <a v-if="$route.path === '/'" class="q-mr-md cursor-pointer" @click="scrollToElement('home-hero-section')">O nama</a>
            <a v-if="$route.path === '/'" class="q-mr-md cursor-pointer" @click="scrollToElement('work')">Portfolio</a>
            <a v-if="$route.path === '/'" class="q-mr-md cursor-pointer" @click="scrollToElement('solutions')">Usluge</a>
            <a v-if="$route.path === '/'" class="q-mr-md cursor-pointer" @click="scrollToElement('contact')">Kontakt</a>
          </div>
        </q-toolbar>
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <div class="bg-grey-4 text-primary q-py-lg footer q-px-lg">
      <div class="row text-weight-bold">
        <div class="col-12 col-md-6">
          <h4 class="q-mt-none text-center">Fotostudio Express</h4>
          <h6 class="q-ma-none text-center">Pilota Mihaila Petrovića 65, Vidikovac (studio)</h6>
          <h6 class="q-ma-none text-center">Bulevar Milutina Milankovića 120b, Novi Beograd (office)</h6>
          <h6 class="q-ma-none text-center">Email: fotoexpressbg@gmail.com</h6>
          <h6 class="q-ma-none text-center">Telefon: 011 2321 338 / 063 340 100</h6>
        </div>
        <div class="col-12 col-md-6">
          <h4 class="q-mt-none text-center">Foto/Video događaji</h4>
          <h6 class="q-ma-none text-center">Email: info@fotostudio.co.rs</h6>
          <h6 class="q-ma-none text-center">Telefon: 066 922 3663</h6>
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
