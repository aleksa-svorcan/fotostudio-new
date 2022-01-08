<template>
  <section id="home-hero-section" class="home-hero-section">
    <div class="row">
      <div class="col-12 col-md-6">
        <parallax class="home-hero-image" :fixed="true">
          <img src="~assets/hero-image.jpg"/>
        </parallax>
      </div>
      <div class="col-12 col-md-6 home-hero-content bg-white text-primary">
        <div class="content-container-half-right full-height">
          <div class="column full-height q-pb-md-xl">
            <h3 class="text-center">
              <span class="section-title">Fotostudio Express</span></h3>
            <div class="column q-px-lg home-hero-text-container justify-end q-pb-md-xl">
              <h4 class="gt-sm text-weight-bold text-center">
                <span class="section-title">O nama</span></h4>
              <h6 class="q-mt-md q-mb-xl text-center">Porodična tradicija duga 26 godina najbolja je preporuka za naše učešće u Vašim intimnim proslavama i
                događajima, U samom srcu Skojevskog naselja smeštena je naša fotografska laboratorija opremljena
                najsavremenijom opremom i tehnologijom, što nam omogućava izradu materijala najboljeg kvaliteta,
                putem fotografija i snimaka.</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { TweenLite, Power2 } from 'gsap'
import Parallax from 'vue-parallaxy'
export default {
  name: 'HomeHeroSection',
  data () {
    return {
      isMobile: false
    }
  },
  components: {
    Parallax
  },
  mounted () {
    TweenLite.to('#home-hero-section', 2, { delay: 2.5, opacity: 1, ease: Power2.easeInOut })
    if (window.innerWidth <= 600) {
      this.isMobile = true
    } else if (window.innerWidth > 600) {
      this.isMobile = false
    }
  }
}
</script>
<style lang="scss" scoped>
.home-hero-section {
  width: 100%;
  .home-hero-content {
    position: relative;
    z-index: 3;
  }
  .Masthead {
    min-height: 60vh;
  }
  .Masthead__image.is-fixed>img {
    max-width: 100vw;
    object-position: bottom;
    @media only screen and (min-width: 600px) {
      max-width: 50vw;
    }
  }
  .home-hero-image {
    height: 100%;
    width: auto;
    position: relative;
    z-index: 1;
  }

  .home-hero-text-container {
    flex: 1;
  }
}
</style>
