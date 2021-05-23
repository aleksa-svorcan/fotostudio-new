<template>
  <section id="solutions" class="row home-solutions-section text-white">
    <div class="col-12 col-md-6 q-py-xl bg-primary">
      <div class="content-container-half-left">
        <h4 class="text-center q-mb-mb q-mt-none"><span class="section-title">Papir</span></h4>
        <div class="column items-center justify-center">
          <h6 class="q-mb-sm q-mt-none listing-item">Kopiranje</h6>
          <p>Kopiranje A4 I A3 na 80gr/m2 I 200gr/m2 papiru</p>
          <h6 class="q-mb-sm q-mt-none listing-item">Plastificiranje</h6>
          <p>Plastificiranje u A4 i A3 veličinama</p>
          <h6 class="q-mb-sm q-mt-none listing-item">Štampanje</h6>
          <p>Štampanje A4 i A3 na 80gr/m2 I 200gr/m2 papiru</p>
          <h6 class="q-mb-sm q-mt-none listing-item">Isčitavanje</h6>
          <p>Očitavanje lične karte, saobraćajne dozvole, zdravstvene knjižice</p>
          <h6 class="q-mb-sm q-mt-none listing-item">Koričenje</h6>
          <p>Spiralno koričenje vaših seminarskih,diplomskih, matursih i drugih radova</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 q-py-xl bg-primary">
      <div class="content-container-half-right">
        <h4 class="text-center q-mb-mb q-mt-none"><span class="section-title">Izrada fotografija</span></h4>
        <div class="column items-center justify-center full-width">
          <h6 class="q-mb-sm q-mt-none listing-item">Fotografije</h6>
          <p>Formati: 9×13, 10×15, 13×18, 13×19, 15×21, 20×30, 30×40</p>
          <h6 class="q-mb-sm q-mt-none listing-item">Foto book</h6>
          <p>Izrada book-a (knjige sa Vašim odabranim slikama) dimezija od 10×15 do 30×40, od 10 do 40 stranica</p>
          <h6 class="q-mb-sm q-mt-none listing-item">Fotografije za dokumenta</h6>
          <p>Fotografije za vozačku dozvolu, vizu, sanitarnu knjižicu i sva ostala dokumenta u roku od 5 minuta</p>
        </div>
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

</style>
