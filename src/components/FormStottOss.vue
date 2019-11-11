<template>
    <section class="section section--padding-below">



            <div class="section__body-with-related">
                <div class="l-space-4">
                    <h1 id="stott-oss-skjema-embedded">Støtt vårt arbeid</h1>
                    <!-- <form method="post" class="form"  tal:attributes="action string:${context/absolute_url}/@@donateterminal"> -->
                    <form method="post" class="form" :action="`${this.$parent.portal_url}/@@donateterminal`" v-on:submit.prevent="post_form">
                        <input type="hidden" name="_authenticator" value="6e69eba0fee376643b2d489471649ad0e76c5778">
                        <input type="hidden" name="mobile" value="0" id="mobile_term">
                        <input type="hidden" name="sms_keyword">
                        <p>
                            <label for="support_target" class="form__label">Hva vil du at din gave skal gå til?</label>
                            <select id="support_target" name="description" v-model="selected_target" class="form__select">
                                <option value="default" >Bruk min gave der den trengs mest</option>
                                <option v-for="i in d" v-bind:key="i.UUID" v-bind:value="{UUID: i.UUID, data: i}">{{i.title}}</option>
                            </select>
                        </p>
                        
                        <div class="l-related-in-form-section">
                            <div class="js-toggle-section section-support-preview" id="section-support-preview__dog" v-if="selected_target.data">
                                <div class="flag flag--no-break">
                                    <div class="flag__image flag__image--round">
                                        <img :src="selected_target.data.image_url" :alt="selected_target.data.alt">
                                    </div>
                                    <div class="flag__body" v-html="selected_target.data.tekst">
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <p></p>
                        
                        <p class="l-space-1"></p>

                        <fieldset class="form__fieldset">
                            <legend class="form__legend">Jeg vil gi</legend>
                            
                            <input v-model="support_schedule" type="radio" name="support_schedule" value="permonth" id="permonth" class="form__radio" checked="checked">
                            <label for="permonth" class="form__label">et månedlig beløp</label>
                            
                            <input v-model="support_schedule" type="radio" name="support_schedule" value="once" id="once" class="form__radio">
                            <label for="once" class="form__label">et engangsbeløp</label>
                        </fieldset>

                        <p>
                            <label for="support_amount" class="form__label form__label--inline form__label--text">Jeg vil gi kroner&nbsp; </label>
                            <input id="support_amount" type="number"
                                class="form__input form__input--inline form__input--tiny" name="amount" min="50" step="1"
                                pattern="[0-9]*" required="True" v-model="amount">
                        </p>

                        <button type="button" class="button button--inside-dark js-toggle-aria js-toggle-aria--hide open"
                            aria-expanded="false" aria-controls="section_support-next"
                            data-focus="section_support-next-firstline" v-on:click="toggle_next = true" v-if="!toggle_next">Neste</button>

                        <div class="js-toggle-section" id="section_support-next" :aria-hidden="!toggle_next" v-if="toggle_next">

                            <div id="section_support_full" style="">

                                <p><label for="support_phone" class="form__label">Telefon</label><input id="support_phone"
                                        type="tel" name="phone" class="form__input" aria-required="false" pattern="[0-9]{8}"
                                        title="For automatisk adresseoppslag kreves norsk telefonnummer, kun 8 siffer."><input
                                        type="button" value="Fyll inn"
                                        class="button button--inside-dark l-no-margin matchit_form_fill"></p>

                                <div class="form__fieldset">
                                    <label for="support_firstname" class="form__label">Fornavn</label>
                                    <div class="form__message form__message--error" role="alert" v-if="field_has_error('firstname')">Vi trenger fornavnet ditt</div>
                                    <input
                                        id="support_firstname" type="text" name="firstname" class="form__input"
                                        aria-required="true" v-model="firstname">
                                </div>
                                
                                <div class="form__fieldset">
                                    <label for="support_lastname" class="form__label">Etternavn</label>
                                    <div class="form__message form__message--error" role="alert" v-if="field_has_error('lastname')">Vi trenger etternavnet ditt</div>

                                    <input
                                        id="support_lastname" type="text" name="lastname"
                                        class="form__input  form__input--full" aria-required="true" v-model="lastname">
                                </div>

                                <div class="form__fieldset">
                                    <label for="support_address" class="form__label">Adresse</label>
                                    <div class="form__message form__message--error" role="alert" v-if="field_has_error('address')">Vi trenger adressen din</div>

                                    <input
                                        id="support_address" type="text" name="address"
                                        class="form__input form__input--full" aria-required="true" v-model="address">
                                </div>

                                <div class="form__fieldset">
                                    <label for="support_postalcode" class="form__label">Postnummer</label>
                                    <div class="form__message form__message--error" role="alert" v-if="field_has_error('postalcode')">Vi trenger postnummeret ditt</div>

                                    <input
                                        id="support_postalcode" type="tel" name="postalcode"
                                        v-on:keyup="get_postal_code"
                                        class="js-postalcode form__input form__input--short" aria-required="true"
                                        aria-describedby="support_postalcode_tp" v-model="postalcode">
                                        <span id="support_postalcode_tp" class="form__subtext" aria-live="polite">{{city}}</span>

                                </div>
                            </div>
                            
                            <div class="form__fieldset">
                                <label for="support_email" class="form__label">E-post <small>(for
                                        kvittering)</small></label>
                                <div class="form__message form__message--error" role="alert" v-if="field_has_error('email')">Vi trenger e-postadressen din</div>

                                        <input id="support_email" type="email" name="email"
                                    value="" class="form__input form__input--full" v-model="email">
                            </div>
                            
                            <div class="form__fieldset">
                                <input name="skattefradrag" type="checkbox" id="checkbox1"
                                    v-model="skattefradrag"
                                    class="form__checkbox js-toggle-onchange-attr"
                                    data-target="section_support_personalnumber"><label for="checkbox1"
                                    class="form__label form__label--inline">Jeg ønsker skattefradrag</label>
                            </div>

                            <div id="section_support_personalnumber" v-if="skattefradrag">
                                <p>For å gi deg skattefradrag trenger vi fødselsnummeret ditt.</p>
                                <div class="form__fieldset">
                                    <label for="support_personalnumber" class="form__label">Fødselsnummer <small>(11
                                            siffer)</small></label><input id="support_personalnumber" type="number"
                                        name="support_personalnumber" value="" class="form__input  form__input--full">
                                </div>
                            </div>

                            <p class="form__footer"><span
                                    class="button__wrapper button__wrapper--line button__wrapper--line--big">
                                    <button
                                        type="submit" id="support__submit"
                                        class="button button--big button--inside-dark l-no-margin"
                                        >{{submit_label}}</button></span>
                            </p>
                        </div>
{{errors}}

                    </form>


            </div>
        </div>
    </section>
</template>


<script>
import axios from 'axios';
import { isMobile } from 'mobile-device-detect';
import d  from '@/dummy_content/donation_targets.js';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: isMobile ? 'Welcome to Your Vue.js mobile App!' : 'Welcome to Your Vue.js App',
      d: d.data,
      selected_target: 'default',
      support_schedule: 'permonth',
      amount: 301,
      toggle_next: true,
      mobile: isMobile ? "1" : "0",
      firstname: 'firrst',
      lastname: 'last',
      address: 'address',
      postalcode: 'post',
      city: '',
      phone: 'phone',
      email: 'email@test.com',
      skattefradrag: false,
      errors: []
    }
  },
  computed: {
      submit_label: function () {
          if(this.support_schedule == 'permonth') {
              return 'Gi hver måned'
          }
          else {
              return 'Til betaling'
          }
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
            'phone'
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