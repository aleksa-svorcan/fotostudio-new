<template>
  <section id="contact" class="home-contact-section row q-pb-xl">
    <parallax class="home-contact-image">
      <img src="~assets/img4-min.jpg"/>
    </parallax>
    <div class="row col-12">
      <div class="col-12 col-md-6 bg-grey-4 visible-col q-pt-xl rounded-col shadow-2 q-mb-sm">
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
      <div class="col-12 col-md-6 shadow-4 inset-shadow shadow-col"></div>
    </div>
    <div class="row col-12">
      <div class="col-12 col-md-6 q-py-lg text-white contact-col">
        <div class="content-container-half-left">
          <h4 class="text-center q-mt-none contact-us-title"><span class="section-title">Kontaktirajte nas</span></h4>
          <div class="row justify-center">
            <q-form
              @submit="onSubmit"
              class="contact-form full-width">
              <q-input
                ref="input1"
                :readonly="loading"
                outlined
                bg-color="white"
                v-model="name"
                label="Ime i prezime *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || '']"/>
              <q-input
                ref="input2"
                :readonly="loading"
                outlined
                bg-color="white"
                type="email"
                v-model="email"
                label="Email *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || '']"/>
              <q-input
                ref="input3"
                :readonly="loading"
                outlined
                bg-color="white"
                type="text"
                v-model="subject"
                label="Tema *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || '']"/>
              <q-input
                ref="input4"
                :readonly="loading"
                outlined
                bg-color="white"
                type="textarea"
                v-model="message"
                label="Poruka *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || '']"/>
              <div class="flex justify-center">
                <q-btn :loading="loading" class="q-px-xl q-py-xs text-weight-bold" no-caps label="POŠALJI" type="submit" color="secondary" text-color="white"></q-btn>
              </div>
            </q-form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Parallax from 'vue-parallaxy'

(function () {
  // eslint-disable-next-line no-undef
  emailjs.init('user_A6Ay0vMPffsKgyKzHVzTp')
})()
import { Notify } from 'quasar'
export default {
  name: 'HomeOurClientsSection',
  components: {
    Parallax
  },
  data () {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      loading: false
    }
  },
  methods: {
    onSubmit () {
      this.loading = true
      const that = this
      // eslint-disable-next-line no-undef
      emailjs.send('service_yi50tmp', 'template_iugjtrc', {
        name: this.name,
        subject: this.subject,
        email: this.email,
        message: this.message
      }).then(() => {
        that.name = ''
        that.subject = ''
        that.email = ''
        that.message = ''
        Notify.create({
          type: 'positive',
          position: 'center',
          message: 'Email sent! We will contact you as soon as possible!'
        })
        that.loading = false
        this.$refs.input1.resetValidation()
        this.$refs.input2.resetValidation()
        this.$refs.input3.resetValidation()
        this.$refs.input4.resetValidation()
      }).catch(error => {
        Notify.create({
          type: 'negative',
          position: 'center',
          message: 'Something went wrong with our contact service. Try again later or contact us manually!'
        })
        console.log('error', error)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.home-contact-section {
  opacity: 1;
  position: relative;
  width: 100%;
  overflow: hidden;
  background: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) );
  .contact-form {
    max-width: 600px
  }

  .contact-col {
    z-index: 5;
  }
}

.home-contact-image {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  opacity: 1;
  height: 100% !important;
  width: 100%;
  display: block;
}

.rounded-col {
  border-bottom-right-radius: 0;

  @media only screen and (min-width: 600px) {
    border-bottom-right-radius: 5px;
  }
}

.shadow-col {
  z-index: 3;
}

.contact-us-title {
  text-shadow: 1px 1px black;
}
</style>
