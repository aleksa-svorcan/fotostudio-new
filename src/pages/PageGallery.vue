<template>
  <q-page class="q-pt-xl">
    <h4 class="text-center"><span class="section-title">{{galleryTitle}}</span></h4>
    <div>
      <q-tabs v-model="tab">
        <q-tab name="images" icon="image" label="Slike"></q-tab>
        <q-tab name="videos" icon="movie" label="Video"></q-tab>
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="images">
          <q-carousel
            class="relative-position window-height"
            animated
            v-model="imageSlide"
            navigation
            infinite
            :autoplay="autoplay"
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true">
            <q-carousel-slide v-for="(image, index) in galleryImages"  :key="index" :name="index + 1">
              <p>something</p>
              <img class="carousel-image" :src="'/img/' + image"  v-bind:alt="image"/>
            </q-carousel-slide>
          </q-carousel>
        </q-tab-panel>

        <q-tab-panel name="videos">
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageGallery',
  data () {
    return {
      tab: 'images',
      imageSlide: 1,
      autoplay: false
    }
  },
  computed: {
    galleryTitle () {
      switch (this.$route.path) {
        case '/vencanja':
          return 'Venčanja'
        case '/krstenja':
          return 'Krštenja'
        case '/rodjendani':
          return 'Rođendani'
        case '/punoletstva':
          return 'Punoletstva'
        case '/korporativne-fotografije':
          return 'Korporativa'
        default:
          return ''
      }
    },
    galleryImages () {
      switch (this.$route.path) {
        case '/vencanja':
          return ['/vencanja/01.jpg', '/vencanja/02.jpg', '/vencanja/07.jpg', '/vencanja/_MG_0286.5b3ae5a3.jpg', '/vencanja/_MG_1476.38c31d44.jpg', '/vencanja/_MG_1673.320ddadc.jpg']
        default:
          return ''
      }
    }
  }
}
</script>

<style lang="scss">
.q-carousel__slide {
  max-height: 100%;
  position: relative;
  max-width: 100%;
  overflow: hidden;
}
.carousel-image {
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 100%;
  width: auto;
  object-position: center center;
}
</style>
