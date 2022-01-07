<template>
  <q-page class="q-pt-md">
    <h4 class="text-center q-mt-sm"><span class="section-title">{{galleryTitle}}</span></h4>
    <div>
      <q-tabs v-model="tab">
        <q-tab name="images" icon="image" label="Slike"></q-tab>
        <q-tab name="videos" icon="movie" label="Video"></q-tab>
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="images">
          <q-carousel
            ref="carousel"
            class="relative-position window-height"
            animated
            :fullscreen="fullscreen"
            v-model="imageSlide"
            infinite
            :autoplay="autoplay"
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true">
            <q-carousel-slide v-for="(image, index) in galleryImages"  :key="index" :name="index + 1">
              <div class="carousel-image-container">
                <q-img class="carousel-image" :src="'img/' + image"/>
              </div>
            </q-carousel-slide>
            <template v-slot:control>
              <q-carousel-control class="full-height column justify-center" position="left" :offset="[30, 0]">
                <q-btn
                  push round color="black" text-color="white" icon="arrow_left"
                  @click="$refs.carousel.previous()"></q-btn>
              </q-carousel-control>
              <q-carousel-control class="full-height column justify-center" position="right" :offset="[30, 0]">
                <q-btn
                  push round color="black" text-color="white" icon="arrow_right"
                  @click="$refs.carousel.next()"></q-btn>
              </q-carousel-control>
              <q-carousel-control
                position="bottom-right"
                :offset="[18, 18]"
              >
                <q-btn
                  push round dense color="white" text-color="primary"
                  :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                  @click="fullscreen = !fullscreen"
                ></q-btn>
              </q-carousel-control>
            </template>
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
      autoplay: false,
      fullscreen: false
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
          return ['/vencanja/01.jpg', '/vencanja/02.jpg', '/vencanja/07.jpg', '/vencanja/_MG_0286.5b3ae5a3.jpg', '/vencanja/_MG_1476.38c31d44.jpg', '/vencanja/_MG_1673.320ddadc.jpg',
            '/vencanja/_MG_1695.cf02e300.jpg', '/vencanja/_MG_4532.84ed4b6f.jpg', '/vencanja/_MG_4538.c9a5200c.jpg', '/vencanja/_MG_4544.cdac3d3d.jpg', '/vencanja/_MG_4555.8582c457.jpg',
            '/vencanja/_MG_4559.a5bb4c4e.jpg', '/vencanja/_MG_4570.c915cb43.jpg', '/vencanja/_MG_4644.a7c80b8d.jpg', '/vencanja/_MG_4654.1fed7aa3.jpg', '/vencanja/_MG_6948.7aa35d7a.jpg',
            '/vencanja/_MG_7151.b9d2aa39.jpg', '/vencanja/_MG_7314.9a664d7d.jpg', '/vencanja/_MG_8855.52e294f3.jpg', '/vencanja/_MG_8867.ce4c68a0.jpg', '/vencanja/_MG_8961.de66cc6c.jpg',
            '/vencanja/_MG_8974.dee04875.jpg', '/vencanja/IMG_1286.d0e20c71.jpg', '/vencanja/IMG_6897.f0293b3d.jpg', '/vencanja/IMG_6958.f6e28fa3.jpg', '/vencanja/IMG_6959.9ffe9354.jpg',
            '/vencanja/JAR_1471.jpg', '/vencanja/JAR_1595.jpg', '/vencanja/JAR_1642.jpg', '/vencanja/JAR_1852.jpg', '/vencanja/JAR_1988.jpg', '/vencanja/JAR_2054.jpg', '/vencanja/JAR_2074.jpg',
            '/vencanja/JAR_2149.jpg', '/vencanja/JAR_2158.jpg', '/vencanja/JAR_2203.jpg', '/vencanja/JAR_2422.jpg', '/vencanja/JAR_2547.jpg', '/vencanja/JAR_2631.jpg', '/vencanja/JAR_2819.jpg',
            '/vencanja/JAR_2869.jpg', '/vencanja/JAR_2932.jpg', '/vencanja/JAR_6087.jpg', '/vencanja/JAR_6114.jpg', '/vencanja/JAR_6984.JPG', '/vencanja/JAR_7027.jpg', '/vencanja/JAR_7272.JPG',
            '/vencanja/JAR_7276.JPG', '/vencanja/JAR_7310.JPG', '/vencanja/JAR_7315.jpg', '/vencanja/MJL_0011.jpg', '/vencanja/MJL_0027.jpg', '/vencanja/MJL_0105.jpg', '/vencanja/MJL_0129.jpg',
            '/vencanja/MJL_0476.jpg', '/vencanja/MJL_9570.jpg', '/vencanja/MJL_9670.jpg', '/vencanja/MJL_9758.jpg', '/vencanja/MJL_9826.jpg', '/vencanja/MJL_9870.jpg', '/vencanja/MJL_9925.jpg',
            '/vencanja/MJL_9941.jpg', '/vencanja/MJL_9953.jpg', '/vencanja/MJL_9981.jpg', '/vencanja/NIKI1314.cc3bbda6.jpg', '/vencanja/WPI_1880.19f1f47f.jpg', '/vencanja/WPI_2129.ef5fc603.jpg',
            '/vencanja/WPI_2900.76c3839d.jpg', '/vencanja/WPI_3158.dff77990.jpg']
        case '/krstenja':
          return []
        case '/rodjendani':
          return ['/rodjendani/NEC_0830.57582a8b.jpg', '/rodjendani/NEC_0875.17065532.jpg', '/rodjendani/NEC_0944.0bb7a6a1.jpg', '/rodjendani/NEC_1026.b75189c9.jpg', '/rodjendani/NEC_3158.5f3a9246.jpg',
            '/rodjendani/NEC_3174.23985309.jpg', '/rodjendani/NEC_3182-2.539363c2.jpg', '/rodjendani/NEC_8265.69c79611.jpg', '/rodjendani/NEC_8411.a912700e.jpg', '/rodjendani/NEC_8564-1.69730838.jpg']
        case '/punoletstva':
          return ['/rodjendani-18/MJL_2690.jpg', '/rodjendani-18/MJL_2692.jpg', '/rodjendani-18/MJL_2694.jpg', '/rodjendani-18/MJL_2785.jpg', '/rodjendani-18/MJL_3500.jpg', '/rodjendani-18/MJL_5885.jpg',
            '/rodjendani-18/MJL_5906.jpg', '/rodjendani-18/MJL_5907.jpg', '/rodjendani-18/MJL_5920.jpg', '/rodjendani-18/MJL_5922.jpg', '/rodjendani-18/MJL_5933.jpg', '/rodjendani-18/MJL_6016.jpg',
            '/rodjendani-18/MJL_6019.jpg', '/rodjendani-18/MJL_9470.jpg', '/rodjendani-18/MJL_9478.jpg', '/rodjendani-18/MJL_9561.jpg', '/rodjendani-18/MJL_9562.jpg']
        case '/korporativne-fotografije':
          return 'Korporativa'
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
}
.carousel-image-container {
  height: 100%;
  width: 100%;

  .carousel-image {
    max-height: 100%;

    .q-img__image {
      background-size: auto 100% !important;
    }
  }
}
</style>
