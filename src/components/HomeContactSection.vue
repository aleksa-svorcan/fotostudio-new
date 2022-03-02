<template>
  <section id="contact" class="bg-grey-4 home-contact-section full-width">
    <h4 class="text-center contact-us-title"><span class="section-title">Kontaktirajte nas</span></h4>
    <div class="row q-px-lg">
      <div class="col-12 col-md-6 justify-center form-left-column">
        <h5 class="text-center">Fotostudio Express</h5>
        <q-form
          @submit="onSubmit1"
          class="contact-form">
          <q-input
            ref="input1"
            :readonly="loading1"
            outlined
            bg-color="white"
            v-model="name"
            label="Ime i prezime *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || '']"/>
          <q-input
            ref="input2"
            :readonly="loading1"
            outlined
            bg-color="white"
            type="email"
            v-model="email"
            label="Email *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || '']"/>
          <q-input
            ref="input3"
            :readonly="loading1"
            outlined
            bg-color="white"
            type="text"
            v-model="subject"
            label="Tema *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || '']"/>
          <q-input
            ref="input4"
            :readonly="loading1"
            outlined
            bg-color="white"
            type="textarea"
            v-model="message"
            label="Poruka *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || '']"/>
          <div class="flex justify-center q-mb-xl">
            <q-btn :loading="loading1" class="q-px-xl q-py-xs text-weight-bold" no-caps label="POŠALJI" type="submit" color="secondary" text-color="white"></q-btn>
          </div>
        </q-form>
        <div class="map-container">
          <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=pilota%20mihajla%20petrovica%2065&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
        </div>
      </div>
      <div class="col-12 col-md-6 justify-center form-right-column">
        <h5 class="text-center">Foto/video događaji</h5>
        <q-form
          @submit="onSubmit2"
          class="contact-form">
          <q-input
            ref="input12"
            :readonly="loading2"
            outlined
            bg-color="white"
            v-model="name2"
            label="Ime i prezime *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || '']"/>
          <q-input
            ref="input22"
            :readonly="loading2"
            outlined
            bg-color="white"
            type="email"
            v-model="email2"
            label="Email *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || '']"/>
          <div class="row">
            <div class="col-12 col-md-6 q-pr-sm">
              <q-input
                ref="input32"
                :readonly="loading2"
                outlined
                bg-color="white"
                type="text"
                v-model="location2"
                label="Lokacija *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || '']"/>
            </div>
            <div class="col-12 col-md-6 q-pl-sm">
              <q-input bg-color="white" label="Datum događaja *" ref="input52" filled v-model="date2" mask="date" :rules="['date']">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                      <q-date v-model="date2">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat></q-btn>
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>
          <q-input
            ref="input42"
            :readonly="loading2"
            outlined
            bg-color="white"
            type="textarea"
            v-model="message2"
            label="Poruka *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || '']"/>
          <div class="flex justify-center items-end q-mb-xl">
            <q-btn :loading="loading2" class="q-px-xl q-py-xs text-weight-bold" no-caps label="POŠALJI" type="submit" color="secondary" text-color="white"></q-btn>
          </div>
        </q-form>
        <div class="map-container">
          <div class="mapouter"><div class="gmap_canvas2"><iframe width="100%" height="500" id="gmap_canvas2" src="https://maps.google.com/maps?q=Bulevar%20Milutina%20Milankovi%C4%87a%20120b&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { Notify } from 'quasar'
import { init } from '@emailjs/browser'
init('4T0nzsh6kOgYIUnFl')
export default {
  name: 'HomeContactSection',
  data () {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      loading1: false,
      name2: '',
      email2: '',
      location2: '',
      date2: null,
      message2: '',
      loading2: false
    }
  },
  methods: {
    onSubmit1 () {
      this.loading1 = true
      const that = this
      // eslint-disable-next-line no-undef
      emailjs.send('service_o5gmerl', 'template_wxzz2vt', {
        name: this.name,
        subject: this.subject,
        email: this.email,
        message: this.message
      }, '4T0nzsh6kOgYIUnFl').then(() => {
        that.name = ''
        that.subject = ''
        that.email = ''
        that.message = ''
        Notify.create({
          type: 'positive',
          position: 'center',
          message: 'Poruka je poslata! Kontaktiraćemo Vas uskoro!'
        })
        that.loading1 = false
        this.$refs.input1.resetValidation()
        this.$refs.input2.resetValidation()
        this.$refs.input3.resetValidation()
        this.$refs.input4.resetValidation()
      }).catch(error => {
        Notify.create({
          type: 'negative',
          position: 'center',
          message: 'Naša kontakt služba trenutno ne radi. Pokušajte drugi vid kontakta!'
        })
        console.log('error', error)
      })
    },
    onSubmit2 () {
      this.loading2 = true
      const that = this
      // eslint-disable-next-line no-undef
      emailjs.send('service_o5gmerl', 'template_aeeeym1', {
        name: this.name2,
        location: this.location2,
        email: this.email2,
        message: this.message2,
        date: this.date2
      }, '4T0nzsh6kOgYIUnFl').then(() => {
        that.name2 = ''
        that.location2 = ''
        that.email2 = ''
        that.message2 = ''
        that.date2 = ''
        Notify.create({
          type: 'positive',
          position: 'center',
          message: 'Poruka je poslata! Kontaktiraćemo Vas uskoro!'
        })
        that.loading2 = false
        this.$refs.input12.resetValidation()
        this.$refs.input22.resetValidation()
        this.$refs.input32.resetValidation()
        this.$refs.input42.resetValidation()
        this.$refs.input52.resetValidation()
      }).catch(error => {
        Notify.create({
          type: 'negative',
          position: 'center',
          message: 'Naša kontakt služba trenutno ne radi. Pokušajte drugi vid kontakta!'
        })
        console.log('error', error)
      })
    }
  }
}

</script>

<style lang="scss" scoped>
.home-contact-section {
  position: relative;
  z-index: 1;
}

.form-left-column {
  padding-right: 0;
  @media only screen and (min-width: 600px) {
    padding-right: 15px;
  }
}

.form-right-column {
  padding-left: 0;
  @media only screen and (min-width: 600px) {
    padding-left: 15px;
  }
}

.mapouter {position:relative;text-align:right;height:500px;width:100%;}
.gmap_canvas {overflow:hidden;background:none!important;height:500px;}
.gmap_canvas2 {overflow:hidden;background:none!important;height:500px;}
</style>
