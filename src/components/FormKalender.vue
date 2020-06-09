<template>
    <section class="section section--padding-below section--background">

<div class="section__body-with-related section--" v-if="!show_form">
                <div class="l-space-4 l-space-top-4">

    <h2>Bestill kalender</h2>
<p class="l-space-1">
    <label for="calendar_count" class="form__label form__label--inline form__label--text">Jeg bestiller<span style="display:inline-block;width:10px;"></span></label>
    <select id="calendar_count" name="calendar_count" class="form__select form__select--inline js-toggle-onchange-attr js-toggle-onchange-calendar-button-text-change" data-target="section_calendar_full" v-model="selected">
    <option value="1" selected="">1 kalender</option>
    <option value="2">2 kalendere</option>
    <option value="3">3 kalendere</option>
    <option value="4">4 kalendere</option>
    <option value="5">5 kalendere</option>
    </select>



</p>

<p>
    <label for="support_amount" class="form__label form__label--inline form__label--text">og vil gi en gave på kr&nbsp;</label> &nbsp;
    <input id="support_amount" name="support_amount" type="number" class="form__input form__input--inline form__input--tiny" min="30" step="1" pattern="[0-9]*" v-model="amount">

</p>

<p class=" l-space-2">
<button
    type="submit" id="support__submit"
    class="button button--big l-no-margin vipps-button" 
    >Betal med <img src="@/assets/vipps-rgb-black.svg"></button>
    </p>

    <p><small><a href="" v-on:click.prevent="show_form = true">Har du ikke Vipps? klækk her</a></small></p>

</div>
</div>

            <div class="section__body-with-related" v-if="show_form">
                <div class="l-space-4 l-space-top-4">
                    
<p><small><a href="" v-on:click.prevent="show_form = false">Nei vent! Gi meg Vipps tilbake!</a></small></p>
  
<form method="post" action="https://www.blindeforbundet.no/kalender">
        <!-- /${view/__name__} -->
          <h2 id="bestill-kalender" tabindex="0">Bestill kalender</h2>
          
          <p>For å kunne sende kalenderen, trenger vi navn og adresse.</p>

          

          

          <label for="support_firstname" class="form__label">Fornavn</label>
          
          <input id="support_firstname" type="text" name="firstname" class="form__input" aria-required="true">
          <p></p>

          <label for="support_lastname" class="form__label">Etternavn</label>
          
          <input id="support_lastname" type="text" name="lastname" class="form__input  form__input--full" aria-required="true">
          <p></p>

          <label for="support_address" class="form__label">Adresse</label>
          
          <input id="support_address" type="text" name="address" class="form__input form__input--full" aria-required="true">
          <p></p>

          <label for="support_postalcode" class="form__label">Postnummer</label>
          
          <input id="support_postalcode" type="tel" name="postalcode" class="form__input form__input--short js-postalcode" aria-required="true" aria-describedby="support_postalcode_tp">

          <input type="hidden" value="" name="city" id="city">

          <span id="support_postalcode_tp" class="form__subtext" aria-live="polite"></span>

          <p></p>

          <label for="support_email" class="form__label">E-post <small>(valgfritt)</small></label>
          

          <input id="support_email" type="email" name="email" class="form__input form__input--full">
          <p></p>
          <p>
            <input type="checkbox" id="checkbox1" class="form__checkbox js-toggle-onchange-attr" data-target="section_support_personalnumber" name="contact_via_email">
            <label for="checkbox1" class="form__label form__label--inline">Blindeforbundet kan holde meg oppdatert på e-post</label>
          </p>

          

          
            <p class="l-space-1">
              <label for="calendar_count" class="form__label form__label--inline form__label--text">Jeg bestiller<span style="display:inline-block;width:10px;"></span></label>
              <select id="calendar_count" name="calendar_count" class="form__select form__select--inline js-toggle-onchange-attr js-toggle-onchange-calendar-button-text-change" data-target="section_calendar_full" v-model="selected">
                <option value="1" selected="">1 kalender</option>
                <option value="2">2 kalendere</option>
                <option value="3">3 kalendere</option>
                <option value="4">4 kalendere</option>
                <option value="5">5 kalendere</option>
              </select>
            </p>

            <p>
              <label for="support_amount" class="form__label form__label--inline form__label--text">og gir en gave på kr&nbsp;</label>
              <input id="support_amount" name="support_amount" type="number" class="form__input form__input--inline form__input--tiny" min="30" step="1" pattern="[0-9]*" v-model="amount"><br>
              <small>(Beløpet kan endres)</small>
            </p>

            <fieldset class="form__fieldset">
              <legend class="form__legend">Jeg vil betale med</legend>
              <input type="radio" name="payment_method" value="invoice" id="invoice" class="form__radio js-toggle-payment" checked="checked">
              <label for="invoice" class="form__label">Giro som sendes med kalenderen</label>
              <br>

              
                <input type="radio" name="payment_method" value="netaxept" id="netaxept" class="form__radio js-toggle-payment">
                <label for="netaxept" class="form__label">Jeg vil betale med kort</label>
                <br>
              

              
    
                <div class="payments">
                  <div id="section_payment_vipps" class="js-toggle-section" aria-hidden="true" style="display: none;">
                    <label for="vipps_phone" type="number" class="form__label">Telefon</label>
                    <div class="vipps-error-message-wrapper" style="display: none;">
                      <div id="support_phone__error" class="form__message form__message--error" role="alert"></div>
                    </div>
                    <input id="vipps_phone" type="tel" name="phone" class="form__input" aria-required="true" pattern="[0-9]{8}">
                  </div>
                </div>
              

            </fieldset>
          

          <p class="form__footer"><span class="button__wrapper button__wrapper--line button__wrapper--line--big"><input type="submit" id="support__submit" class="button button--big button--inside-dark l-no-margin" value="Send bestilling"></span></p>
          <input type="hidden" name="do" value="1">
          
          <input type="hidden" name="_authenticator" value="2d99dd297423752d218b95701858024b4832c0be">
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
  name: 'FormKalender',
  data () {
    return {
      msg: isMobile ? 'Welcome to Your Vue.js mobile App!' : 'Welcome to Your Vue.js App',
      d: d.data,
      selected_target: 'default',
      support_schedule: 'permonth',
      amount: 250,
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
      errors: [],
      show_form: false,
      selected: 1
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

<style lang="scss">
.vipps-button {
    
    background: #ef5a25 !important;
    color: white !important;
    img {
        vertical-align: middle;
        width: 110px;
        color: white;
        filter: invert(100%) !important;
        margin-left: -10px;
        
    }
}
</style>