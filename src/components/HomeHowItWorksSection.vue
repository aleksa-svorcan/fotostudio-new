<template>
  <section id="work" class="page-section row q-px-sm home-how-it-works-section">
    <div class="col-12 col-md-6">
      <div class="content-container-half-left q-py-xl flex items-center full-height justify-center">
        <h4 class="text-white q-mt-none"></h4>
      </div>
    </div>
    <div class="col-12 col-md-6 bg-primary visible-col q-py-xl">
      <div class="content-container-half-right column">
        <div class="q-mb-md bg-primary text-white q-px-lg">
          <h6 class="text-center q-mb-md">Od 1995. godine se trudimo da idemo u korak sa vremenom i odgovorimo na sve zadatke savremene tehnologije I napredka fotografskih usluga. Trud i iscrpan rad su nas doveli do velikogг broja stalnih i zadovoljnih mušterija bilo u našoj radnji – bilo na terenu. Ono po čemu se izdvajamo od ostalih jeste veoma saradljiv odnos sa našim vernim klijentima, čijim smo sugestijama i pohvalama vremenom postajali sve bolji i opravdali očekivanja.</h6>
          <h6 class="text-center q-mb-md">Među ponudama na sajtu možete videti sve naše usluge i kontaktirati nas ukoliko ste zainteresovani da i za Vas preuzmemo odgovornost čuvara najlepših životnih uspomena.</h6>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 bg-grey-4 visible-col q-py-xl row items-center">
      <div class="content-container-half-left column">
        <div class="q-mb-md bg-grey-4 text-primary">
          <div>
            <h4 class="text-center q-mt-md"><span class="section-title">Venčanja</span></h4>
            <h6 class="text-center q-mb-md q-px-lg">Dugogodišnja tradicija,preko 1000 venčanja koje smo fotografisali za Vas kao i ekipa ljudi koja ima veliko iskustvo i znanje su garant da će Vaši nezaboravni trenutci ostati zabeleženi kako dolikuje. Svesni smo da je za mladence ovaj dan jedan od najbitnijih I na sebe preuzimamo kompletnu timsku odgovornost za najvernije i najbolje očuvanje sećanja.</h6>
            <div class="row justify-center">
              <router-link class="route-link" to="/vencanja">Pogledajte galeriju</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 relative-position parallax-col">
      <img class="how-it-works-image" src="~assets/vencanje.jpg"/>
    </div>
    <div class="col-12 col-md-6 relative-position parallax-col">
      <img class="how-it-works-image" src="~assets/korporativa.jpg"/>
    </div>
    <div class="col-12 col-md-6 bg-grey-4 visible-col q-py-xl row items-center">
      <div class="content-container-half-right column">
        <div class="q-mb-md bg-grey-4 text-primary">
          <div>
            <h4 class="text-center q-mt-md"><span class="section-title">Korporativne fotografije</span></h4>
            <h6 class="text-center q-mb-md q-px-lg">Svaka firma želi da predstavi sebe i svoje poslovanje u najboljem mogućem svetlu. Jedan od bitnijih koraka na tom putu je vizuelni utisak koji se ostavlja kod klijenata. S tim u vezi, nudimo širok dijapazon usluga.</h6>
            <div class="row justify-center">
              <router-link class="route-link" to="/korporativne-fotografije">Pogledajte galeriju</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 bg-grey-4 visible-col q-py-xl row items-center">
      <div class="content-container-half-left column">
        <div class="q-mb-md bg-grey-4 text-primary">
          <div>
            <h4 class="text-center q-mt-md"><span class="section-title">Rodjendani</span></h4>
            <h6 class="text-center q-mb-md q-px-lg">Umesto da trčkarate sa fotoaparatom po igraonici,restoranu ili kući i trudite se da uhvatite sve bitne i zanimljive momente slavlja, prepustite nama da za Vas to kvalitetno i profesionalno uradimo a Vi možete sa prijateljima da uživate u jedinstvenom trenutku. Nudimo Vam profesionalnu uslugu fotografisanja i snimanja rođendana Vaših najmilijih.</h6>
            <div class="row justify-center">
              <router-link class="route-link" to="/rodjendani">Pogledajte galeriju</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 relative-position parallax-col">
      <img class="how-it-works-image" src="~assets/rodjendan.jpg"/>
    </div>
    <div class="col-12 col-md-6 relative-position parallax-col">
      <img class="how-it-works-image" src="~assets/krstenje.jpg"/>
    </div>
    <div class="col-12 col-md-6 bg-grey-4 visible-col q-py-xl row items-center">
      <div class="content-container-half-right column">
        <div class="q-mb-md bg-grey-4 text-primary">
          <div>
            <h4 class="text-center q-mt-md"><span class="section-title">Krštenja</span></h4>
            <h6 class="text-center q-mb-md q-px-lg">Fotografisanje krštenja Vaše dece prepustite profesionalcima koji će zabeležiti taj  sveti čin. Ipak je krštenje jedan svečani trenutak koji se samo jednom u životu dešava i ne treba rizikovati da ostanete bez fotografija koje će jasno zabeležiti svaki bitni trenutak.</h6>
            <div class="row justify-center">
              <router-link class="route-link" to="/krstenja">Pogledajte galeriju</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  name: 'HomeHowItWorksSection'
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

.home-how-it-works-section {
  padding: 0;
  position: relative;
  width: 100%;
  overflow: hidden;
}

.how-it-works-image {
  position: absolute;
  z-index: 1;
  overflow: hidden;
  height: auto;
  width: 100%;
  top: -100px;
  left: 0;
}

.parallax-col {
  height: 450px;
  @media only screen and (min-width: 600px) {
    height: auto;
  }
}

.route-link {
  font-size: 20px;
  color: $secondary;
  font-weight: bold;
}
</style>
