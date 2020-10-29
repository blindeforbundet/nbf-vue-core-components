<template>
  <section class="section section--background">
    
    <div class="wrapper">


      
      


    <div class="section__body--dis hurtikasse__form" v-if="!show_form">
      
      <div class="item_1">
      <img src="@/assets/kalender_2021.jpg" class="form__image" v-if="true" alt="Bilde av valpekalenderen for 2021.">

      </div>
      <div class="l-space-4 l-space-top-4- item_2">

      <h2>Bestill kalender</h2>  
        
        <p v-if="form_error_message" class="form__message form__message--error form__message--global" aria-live="alert">{{form_error_message}}</p>
        <form @submit.prevent="post_vipps_form">
          <p class="l-space-1">
            <label for="calendar_count" class="form__label form__label--inlisne form__label--texdt">Jeg bestiller<span style="display:inline-block;width:10px;"></span></label>
            <select id="calendar_count" name="calendar_count" class="form__select form__select--inlisne js-toggle-onchange-attr js-toggle-onchange-calendar-button-text-change" data-target="section_calendar_full" v-model="calendar_count">
              <option value="1" selected="">1 kalender</option>
              <option value="2">2 kalendere</option>
              <option value="3">3 kalendere</option>
              <option value="4">4 kalendere</option>
              <option value="5">5 kalendere</option>
            </select>
          </p>

          <p></p>
            <span v-if="Math.round(amount)<30"  class="form__message form__message--error" role="alert"> vi ber om 30 kroner eller mer, for å dekke porto</span>
            <label for="support_amount" class="form__label form__label--inlidne form__label--texdt">og vil gi en gave på kroner&nbsp;</label> &nbsp;
            <input id="support_amount" ref="amount_vipps" name="support_amount" type="number" class="form__input form__input--indline form__input--tiny" min="30" step="1" pattern="[0-9]*" v-model.number="amount">
          <p></p>
          <p>

            <strong>Totalt å betale:</strong> {{ amount}} kr
          </p>

          <!--
            <label for="phone" class="form__label form__label--inline form__label--text">nummeret ditt&nbsp;</label> &nbsp;
            <input type="tel" id="phone" pattern="[0-9]*" class="form__input form__input--inline form__input--tiny" v-model="phone">
            
          <p></p>
          -->
          
          <p class=" l-space-4">
            <button type="submit" aria-label="Vipps Hurtigkasse" class="vipps-button-new" :disabled="vipps_button_disabled"></button>
          </p>
          

          <p><small><a href="" v-on:click.prevent="show_form = true">Betal med kort eller giro</a></small></p>
        </form>
        </div>

      </div>
    

    <div class="section__body" v-if="show_form">
      <div class="l-space-4 l-space-top-4">              
        <p><small><a href="" v-on:click.prevent="show_form = false">Jeg vil bestille med Vipps Hurtigkasse</a></small></p>
    
        <form @submit="post_form">
          <!-- /${view/__name__} -->
          <h2 id="bestill-kalender" tabindex="0">Bestill kalender</h2>
          
          <p v-if="form_error_message" class="form__message form__message--error form__message--global" aria-live="alert">{{form_error_message}}</p>

          <fieldset v-show="!button_disabled">
            <p>For å kunne sende kalenderen, trenger vi navn og adresse.</p>
            <label for="support_firstname" class="form__label">Fornavn</label>
            <div class="form__message form__message--error" role="alert" v-if="field_has_error('firstname')">Vi trenger navnet ditt for å få sendt deg kalender</div>          
            <input id="support_firstname" ref="firstname" type="text" name="firstname" class="form__input" v-bind:class="{ 'form__input--error': field_has_error('firstname') }" aria-required="true" v-model="firstname">
            <p></p>

            <label for="support_lastname" class="form__label">Etternavn</label>
            <div class="form__message form__message--error" role="alert" v-if="field_has_error('lastname')">Vi trenger etternavnet ditt for å få sendt deg kalender</div>   
            <input id="support_lastname" ref="lastname" type="text" name="lastname" class="form__input  form__input--full" v-bind:class="{ 'form__input--error': field_has_error('lastname') }" aria-required="true"  v-model="lastname">
            <p></p>

            <label for="support_address" class="form__label">Adresse</label>
            <div class="form__message form__message--error" role="alert" v-if="field_has_error('address')">Vi trenger adressen din for å få sendt deg kalender</div>
            <input id="support_address" ref="address" type="text" name="address" class="form__input form__input--full" v-bind:class="{ 'form__input--error': field_has_error('address') }" aria-required="true"  v-model="address">
            <p></p>

            <label for="support_postalcode" class="form__label">Postnummer</label>
            <div class="form__message form__message--error" role="alert" v-if="field_has_error('postalcode')">Vi trenger postnummeret ditt for å få sendt deg kalender</div>
            <input @keyup="get_postal_code()" id="support_postalcode" ref="postalcode" type="text" name="postalcode" class="form__input form__input--short js-postalcode" v-bind:class="{ 'form__input--error': field_has_error('postalcode') }" aria-required="true" aria-describedby="support_postalcode_tp"  v-model="postalcode">
            {{city}}
            <input type="hidden" value="" name="city" id="city">

            <span id="support_postalcode_tp" class="form__subtext" aria-live="polite"></span>

            <p></p>

            <label for="support_email" class="form__label">E-post <small>(valgfritt)</small></label>
          

            <input id="support_email" type="email" name="email" class="form__input form__input--full"  v-model="email">
            <p></p>
          
            <p>
              <input type="checkbox" id="checkbox1" class="form__checkbox js-toggle-onchange-attr" data-target="section_support_personalnumber" name="contact_via_email"  v-model="contact_via_email">
              <label for="checkbox1" class="form__label form__label--inline">Blindeforbundet kan holde meg oppdatert på e-post</label>
            </p>

          

            
            <p class="l-space-1">
              <label for="calendar_count" class="form__label form__label--inline form__label--text">Jeg bestiller<span style="display:inline-block;width:10px;"></span></label>
              <select id="calendar_count" name="calendar_count" class="form__select form__select--inline js-toggle-onchange-attr js-toggle-onchange-calendar-button-text-change" data-target="section_calendar_full" v-model="calendar_count">
                <option value="1" selected="">1 kalender</option>
                <option value="2">2 kalendere</option>
                <option value="3">3 kalendere</option>
                <option value="4">4 kalendere</option>
                <option value="5">5 kalendere</option>
              </select>
            </p>

            <p></p>
              <span v-if="Math.round(amount)<30"  class="form__message form__message--error" role="alert"> vi ber om minimum 30 kroner for å dekke porto</span>
              <label for="support_amount" class="form__label form__label--inline form__label--text">og gir en gave på kr&nbsp;</label>
              <input id="support_amount" ref="amount" name="support_amount" type="number" class="form__input form__input--inline form__input--tiny" min="30" step="1" pattern="[0-9]*" v-model.number="amount"><br>
              <small>(Beløpet kan endres)</small>
            <p></p>
          </fieldset> 
          <fieldset class="form__fieldset" v-if="!button_disabled">
            <legend class="form__legend">Jeg vil betale med</legend>
            <input type="radio" name="payment_method" value="invoice" id="invoice" class="form__radio js-toggle-payment" checked="checked" v-model="payment_method">
            <label for="invoice" class="form__label">Giro som sendes med kalenderen</label>
            

            
            <input type="radio" name="payment_method" value="netaxept" id="netaxept" class="form__radio js-toggle-payment" v-model="payment_method">
            <label for="netaxept" class="form__label">Jeg vil betale med kort</label>
            
  
          </fieldset>
            

          <p class="form__footer"><span class="button__wrapper button__wrapper--line button__wrapper--line--big">
            
            <button :disabled="button_disabled" class="button button--big button--inside-dark l-no-margin" v-on:click.prevent="post_form">
              <span v-if="!button_disabled">{{submit_label}}</span>
              <span v-if="button_disabled">Jobber </span>
              <img height="20" src="@/assets/graphics/spinner-transparent.gif" v-if="button_disabled">
              </button>
            </span></p>
          <input type="hidden" name="do" value="1">
            
          <input type="hidden" name="_authenticator" value="2d99dd297423752d218b95701858024b4832c0be">
          <!-- <a v-on:click="button_disabled = false; form_error_message = 'Å nei! Noe gikk galt, forsøk gjerne igjen'">gakk</a> -->
        </form>

      </div>
    </div>
    </div>
          <!--
          {{errors}}
          {{Math.round(amount)}}
          <a :href=redirect_url>{{redirect_url}}</a>
          base_url:{{context_url}}
          -->
  </section>
  
</template>


<script>
import axios from 'axios';
import { isMobile } from 'mobile-device-detect';
//import d  from '@/dummy_content/donation_targets.js';

var DEFAULT_ERROR_MSG = "Å nei! Noe gikk galt, forsøk gjerne igjen"

export default {
  name: 'FormKalender',
  data () {
    return {
      //msg: isMobile ? 'Welcome to Your Vue.js mobile App!' : 'Welcome to Your Vue.js App',
      // d: d.data,
      //selected_target: 'default',
      //support_schedule: 'permonth',
      amount: 250,
      //toggle_next: true,
      mobile: isMobile ? "1" : "0",
      firstname: '',
      lastname: '',
      address: '',
      postalcode: '',
      city: '',
      phone: undefined,
      email: '',
      contact_via_email: false,
      skattefradrag: false,
      payment_method: 'netaxept',
      errors: [],
      show_form: false,
      calendar_count: 1,
      redirect_url: undefined,
      context_url: undefined,
      button_disabled: false,
      vipps_button_disabled: false,
      form_error_message: undefined
    }
  },
  computed: {
      submit_label: function () {
          if(this.payment_method == 'netaxept') {
              return 'Gå til betaling'
          }
          else {
              return 'Send bestilling'
          }
      }
  },
  mounted () {
    this.context_url = window.context_url || '/Plone/testkampanje/bestill-kalender';
  },
  methods: {
      post_vipps_form() {
        this.errors = []
        this.redirect_url = undefined
        if(this.amount < 30) {
          this.errors.push('amount');
          this.$nextTick(() => {
            this.$refs["amount_vipps"].focus()
          });
        }

        if(this.errors.length < 1) {
          this.vipps_button_disabled = true;
          axios.post(`${this.context_url}/vipps_initiate`, {
            "phone": this.phone,
            "calendar_count": this.calendar_count,
            "amount": this.amount
          }).then(res => {
                           console.log(res.data);
                           
                           if(res.data.status == 'OK') {
                             window.location = res.data.redirect_url;
                           }
                           else {
                             this.form_error_message = DEFAULT_ERROR_MSG;
                             this.vipps_button_disabled = false;
                           }
                           }
                   )
                   /*eslint-disable */
              .catch(res => {this.vipps_button_disabled = false; this.form_error_message = DEFAULT_ERROR_MSG;});
        }

      },
      post_form() {
          this.redirect_url = undefined
          this.errors = []
          var required_fields = [
            'firstname',
            'lastname',
            'address',
            'postalcode',

          ]
          
          required_fields.forEach((v, i)=>{
              if(!this[v]){
                console.log(i)
                this.errors.push(v)
              }
          })

          if ( Math.round(this.amount)<30 ) {
            this.errors.push('amount')
          }

          this.$nextTick(() => {
            if(this.errors.length > 0) {
                this.$refs[this.errors[0]].focus()
            }
          });

          if(this.errors.length < 1) {
            var fullfill_url;
            if(this.payment_method == 'netaxept') {
              fullfill_url = "/Plone/testkampanje/bestill-kalender/nets_order";
            }
            else if (this.payment_method == 'invoice') {
              fullfill_url = "/Plone/testkampanje/bestill-kalender/invoice_order";
            }
            
            /*eslint-disable */
            this.button_disabled = true;

            axios.post(fullfill_url, {
              "firstname": this.firstname,
              "lastname": this.lastname,
              "address": this.address,
              "postalcode": this.postalcode,
              "calendar_count": this.calendar_count,
              "support_amount": this.amount
            })
            .then(res => {window.location = res.data.redirect_url})
            .catch(res => {this.button_disabled = false; this.form_error_message = DEFAULT_ERROR_MSG});

          }
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

<style lang="scss" scoped>
.vipps-button {
    
    background: #ef5a25 !important;
    color: white !important;
    img {
        vertical-align: middle;
        height: 1.3em;
        color: white;
        filter: invert(100%) !important;
        margin-left: -10px;
        
    }
}

.vipps-button-new {
  border: 0;
  background: url("~@/assets/vipps_hurtigkasse_rect_210_EN.svg") no-repeat top left;
  width: 210px;
  height: 44px;
  cursor: pointer;
}

.button:disabled {
  border-bottom: 0;
  opacity: 0.6; /* Real browsers */
  filter: alpha(opacity = 60); /* MSIE */
  &:hover {
    border-bottom: 0;
    transform: none;
  }
}


.form__image {

max-width: 100%;
}

@media only screen and (min-width: 1050px) {
  .hurtikasse__form {
    padding-top: 60px;
    display: flex;
    align-items: center;
     align-items: flex-start;
    //justify-content: center;
    div {
      //border: 1px solid red;
    }
  }

  .item_1 {
    //padding-left: 10px;
    //padding-right: 60px;
    width: 33.33%;
    padding-right: 20px;
    text-align: right;
    .form__image {
      //max-width: 100%;
      max-width: 317px;
      
    }
  }
  .item_2 {
    width: 66.66%;
    padding-left: 30px;
  }
  }
@media only screen and (max-width: 1050px) {
    .item_1 {
      img {
        display: block;
        max-width: 60%;
        //margin: 0 auto;
      }
      margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 40px;


  }
}



</style>