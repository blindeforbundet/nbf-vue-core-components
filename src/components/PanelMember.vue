<template>
<div>
<section class="section section--frontpage">
    <div class="wrapper"><div class="l-half section__content-padding section__content-padding--first">
        <h2>Har du problemer med synet kan du bli medlem i Blindeforbundet</h2>
        <p>For 400 kroner i året er du med å støtter en organisasjon som kjemper for dine rettigheter. I tillegg får du rabatt på produkter, kurs og tilgang til personlige rådgivere som kan gjøre livet ditt bedre.</p></div>
        </div>
        <div class="wrapper">
            <div class="l-main-collum"><h2 class="l-no-margin">
                <button @click="toggle_form()" class="button button--line button--big button--section-toggle" v-bind:class="{open: show_form}" v-bind:aria-expanded="show_form" aria-controls="section_become_member" data-focus="section_become_member_headline">Bli medlem</button></h2>
        </div>
    </div>
</section>

<section v-if="show_form" class="section section--background l-space-3" id="section_become_member" v-bind:aria-hidden="!show_form" style="">
    <div class="wrapper">
        <div class="section__related">
            <h3 id="section_become_member_headline" tabindex="-1">Medlemsfordeler</h3>
            <ul class="largetext"><li>Rabatter</li><li>Aktiviteter</li>
                <li>Personlig rådgivning</li>
                <li><a href="/medlemskap/medlemsfordeler">… og mye mer</a></li>
            </ul>
            <p>Alle som møter utfordringer i hverdagen på grunn av synet, eller har en diagnose som kan gi synshemning, kan bli medlem.</p>
        </div>

        <div class="section__body-with-related">
            <div class="section__text">
                <form method="post" class="form" :action="`${this.$parent.portal_url}/medlemskap/@@innmeldingsskjema`" v-on:submit.prevent="post_form">
                    <h3 class="only-screenreaders">Innmeldingsskjema</h3>
                    <div class="form__fieldset">
                        <label for="member_firstname" class="form__label">Fornavn</label>
                        <div id="member_firstname__error" class="form__message form__message--error" role="alert" v-if="field_has_error('firstname')">Vi trenger fornavnet ditt</div>
                        <input id="member_firstname" type="text" name="firstname" value="" class="form__input" aria-required="true" v-model="firstname" ref="firstname">
                    </div>
                    <div class="form__fieldset">
                        <label for="member_lastname" class="form__label">Etternavn</label>
                        <div id="member_lastname__error" class="form__message form__message--error" role="alert" v-if="field_has_error('lastname')">Vi trenger etternavnet ditt</div>
                        <input id="member_lastname" type="text" name="lastname" value="" class="form__input  form__input--full" aria-required="true" v-model="lastname" ref="lastname">
                    </div>
                    <div class="form__fieldset">
                        <label for="member_address" class="form__label">Adresse</label>
                        <div id="member_address__error" class="form__message form__message--error" role="alert" v-if="field_has_error('address')">Vi trenger adressen din</div>
                        <input id="member_address" type="text" name="address" value="" class="form__input form__input--full" aria-required="true" v-model="address" ref="address">
                    </div>
                    <div class="form__fieldset">
                        <label for="member_postalcode" class="form__label">Postnummer</label>
                        <div id="member_postalcode__error" class="form__message form__message--error" role="alert" v-if="field_has_error('postalcode')">Vi trenger postnummeret ditt</div>
                        <input id="member_postalcode" type="tel" name="postalcode" value="" class="form__input form__input--short" aria-describedby="member_postalcode_tp" v-model="postalcode" ref="postalcode" v-on:keyup="get_postal_code">
                        <span id="member_postalcode_tp" class="form__subtext" aria-live="polite">{{city}}</span>
                    </div>
                    <div class="form__fieldset">
                        <label for="member_telephone" class="form__label">Telefon</label>
                        <div id="member_telephone__error" class="form__message form__message--error" role="alert" v-if="field_has_error('telephone')">Vi trenger telefonnummeret ditt</div>
                        <input id="member_telephone" type="tel" name="telephone" value="" class="form__input" aria-required="true" v-model="telephone" ref="telephone">
                    </div>
                    <div class="form__fieldset">
                        <label for="member_email" class="form__label">E-post (valgfritt)</label>
                        <input id="member_email" type="email" name="email" value="" class="form__input form__input--full" aria-required="false" v-model="email">
                    </div>
                    <p>Opplysningene vil bli behandlet fortrolig</p>
                    <p class="form__footer">
                        <span class="button__wrapper button__wrapper--line button__wrapper--line--big"><input type="submit" class="button button--big button--inside-dark l-no-margin" value="Meld meg inn"></span>
                    </p>
                </form>
            </div>
        </div>
    </div>
</section>
</div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'PanelMember',
  props: {
    msg: String,
    
  },
  data: function() {
    return {
      firstname: '',
      lastname: '',
      address: '',
      telephone: '',
      postalcode: '',
      city: '',
      email: '',
      show_form: false,
      errors: []
    }
  },
  methods: {
      post_form() {
          this.errors = []
          var required_fields = [
            'firstname',
            'lastname',
            'address',
            'postalcode',
            'telephone'
          ]
          required_fields.forEach((v, i)=>{
              if(!this[v]){
                console.log(i)
                this.errors.push(v)
              }
          })

          this.$nextTick(() => {
            if(this.errors.length > 0) {
                this.$refs[this.errors[0]].focus()
            }
          });
      },
      field_has_error(fieldname){
          return (this['errors'].indexOf(fieldname) < 0) ? false : true
      },
      toggle_form: function() {
          this.show_form = !this.show_form
      },
      get_postal_code: function() {
          this.city = ''
          if(this.postalcode.length !== 4)
            return
          if(process.env.NODE_ENV === 'development'){
            var debug_response = {"postal_codes":[{"postal_code":"0771","city":"OSLO","category":"G","primary_county":"OSLO","primary_municipality":"OSLO"}],"status":"ok"}
            this.city = debug_response.postal_codes[0].city + ' development-test response'
            return
          }

          var url = `${this.$parent.portal_url}/@@postcode_lookup?postcode=${this.postalcode}`
          axios.get(url)
            .then(res => {
                if(res.data.hasOwnProperty('status')) {
                    if(res.data.status == 'ok') {
                        this.city = res.data.postal_codes[0].city
                    }
                }
            })
            .catch(err=>this.city=err)
      }
  }
}
</script>

<style scoped>
section {
    overflow: hidden;
}

.form__fieldset {
    max-width: 600px;
    margin-bottom: 30px;
}
</style>

