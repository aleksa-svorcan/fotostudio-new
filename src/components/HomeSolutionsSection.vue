<template>
  <section id="solutions" class="row home-solutions-section text-white">
    <div class="col-12 col-md-6 q-py-xl bg-primary">
      <div class="content-container-half-left">
        <h4 class="text-center q-mb-mb q-mt-none"><span class="section-title">Papir</span></h4>
        <div class="column items-center justify-center">
          <h6 class="q-mb-sm q-mt-none listing-item">Kopiranje</h6>
          <p class="text-center">Kopiranje A4 I A3 na 80gr/m2 I 200gr/m2 papiru</p>
          <h6 class="q-mb-sm q-mt-none listing-item">Plastificiranje</h6>
          <p class="text-center">Plastificiranje u A4 i A3 veličinama</p>
          <h6 class="q-mb-sm q-mt-none listing-item">Štampanje</h6>
          <p class="text-center">Štampanje A4 i A3 na 80gr/m2 I 200gr/m2 papiru</p>
          <h6 class="q-mb-sm q-mt-none listing-item">Isčitavanje</h6>
          <p class="text-center">Očitavanje lične karte, saobraćajne dozvole, zdravstvene knjižice</p>
          <h6 class="q-mb-sm q-mt-none listing-item">Koričenje</h6>
          <p class="text-center">Spiralno koričenje vaših seminarskih,diplomskih, matursih i drugih radova</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 q-py-xl bg-primary">
      <div class="content-container-half-right">
        <h4 class="text-center q-mb-mb q-mt-none"><span class="section-title">Izrada fotografija</span></h4>
        <div class="column items-center justify-center full-width">
          <h6 class="q-mb-sm q-mt-none listing-item">Fotografije</h6>
          <p class="text-center">Formati: 9×13, 10×15, 13×18, 13×19, 15×21, 20×30, 30×40</p>
          <h6 class="q-mb-sm q-mt-none listing-item">Foto book</h6>
          <p class="text-center">Izrada book-a (knjige sa Vašim odabranim slikama) dimezija od 10×15 do 30×40, od 10 do 40 stranica</p>
          <h6 class="q-mb-sm q-mt-none listing-item">Fotografije za dokumenta</h6>
          <p class="text-center">Fotografije za vozačku dozvolu, vizu, sanitarnu knjižicu i sva ostala dokumenta u roku od 5 minuta</p>
        </div>
      </div>
    </div>
    <div class="row col-12">
      <div class="col-12 col-md-6 bg-grey-4 visible-col q-pt-xl">
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
      <div class="col-12 col-md-6 relative-position">
      <img class="gift-image" src="~assets/MJL_9025.jpg"/>
    </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HomeSolutionsSection'
}
</script>
<style lang="scss" scoped>
.image-col-left {
  position: relative;
  overflow: hidden;
  margin-left: -100px;
}
.col-image-right {
  position: absolute;
  left: 0;
  top: 0;
}
.home-solutions-section {
  z-index: 2;
  position: relative;
  width: 100%;
  overflow: hidden;

  .shadow-7 {
    z-index: 66;
  }
}

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
