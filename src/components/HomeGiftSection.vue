<template>
  <section id="gift" class="home-gift-section row q-pb-xl">
    <div class="row">
      <div class="col-12">
        <div class="col-12 col-md-6 bg-grey-4 visible-col q-pt-xl q-mb-sm">
          <div class="content-container-half-left column">
            <div class="q-mb-md bg-grey-4 text-primary">
              <div class="column">
                <h4 class="text-center q-mt-md"><span class="section-title">Pokloni</span></h4>
                <div class="row">
                  <div class="col-6 column items-center">
                    <h6 class="q-mb-sm q-mt-none"><span class="listing-item">Jastuk</span></h6>
                    <h6 class="q-mb-sm q-mt-none"><span class="listing-item">Puzle</span></h6>
                    <h6 class="q-mb-sm q-mt-none"><span class="listing-item">Foto šolja</span></h6>
                    <h6 class="q-mb-sm q-mt-none"><span class="listing-item">Podmetači za miš</span></h6>
                    <h6 class="q-mb-sm q-mt-none"><span class="listing-item">Plastični privesci</span></h6>
                  </div>
                  <div class="col-6 column items-center">
                    <h6 class="q-mb-sm q-mt-none listing-item"><span class="listing-item">Magična šolja</span></h6>
                    <h6 class="q-mb-sm q-mt-none listing-item"><span class="listing-item">Piši briši šolja</span></h6>
                    <h6 class="q-mb-sm q-mt-none listing-item"><span class="listing-item">Magične kugle</span></h6>
                    <h6 class="q-mb-sm q-mt-none listing-item"><span class="listing-item">Drveni privesci</span></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <img class="gift-image" src="~assets/img4-min.jpg"/>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeGiftSection'
}
</script>
<style lang="scss" scoped>
.gift-image {
  position: absolute;
  z-index: 1;
  overflow: hidden;
  height: auto;
  width: 100%;
  min-height: 100%;
  bottom: 0;
  left: 0;
}
</style>
