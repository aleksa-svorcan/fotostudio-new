<template>
  <section id="contact" class="bg-grey-4 home-contact-section full-width">
    <h4 class="text-center contact-us-title"><span class="section-title">Kontaktirajte nas</span></h4>
    <div class="row q-px-lg">
      <div class="col-12 col-md-6 justify-center form-left-column">
        <h5 class="text-center">Fotostudio Express</h5>
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
      <div class="col-12 col-md-6 justify-center form-right-column">
        <h5 class="text-center">Foto/video događaji</h5>
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

  </section>
</template>

<script>
import { Notify } from 'quasar'
(function () {
  // eslint-disable-next-line no-undef
  emailjs.init('user_A6Ay0vMPffsKgyKzHVzTp')
})()
export default {
  name: 'HomeContactSection',
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
</style>
