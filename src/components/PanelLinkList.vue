<template>
<section class="section section--frontpage">
    <div class="wrapper">
        <div class="l-half section__content-padding section__content-padding--first">
            <div v-html="params.left_panel" />

            <div v-if="!params.left_panel">

                <h2>Synshemminger</h2>
                <p>Vi hjelper deg gjerne med råd om <a :href="this.$parent.portal_url+'/oyehelse-og-synshemninger'">øyehelse og synshemminger</a></p>
                <nav role="navigation">
                <ul class="submenu">
                   <li class="submenu__item">
                    <a :href="this.$parent.portal_url+'/oyehelse-og-synshemninger/gra-staer-katarakt'" class="submenu__link"><span class="submenu__linktext">Grå stær (katarakt)</span></a>
                  </li>
                    <li class="submenu__item">
                    <a :href="this.$parent.portal_url+'/oyehelse-og-synshemninger/gronn-staer-glaukom'" class="submenu__link"><span class="submenu__linktext">Grønn stær (glaukom)</span></a>
                  </li>
                    <li class="submenu__item">
                    <a :href="this.$parent.portal_url+'/oyehelse-og-synshemninger/aldersrelatert-maculadegenerasjon'" class="submenu__link"><span class="submenu__linktext">Forkalkning (AMD)</span></a>
                  </li>
                    <li class="submenu__item">
                    <a :href="this.$parent.portal_url+'/oyehelse-og-synshemninger/retinitis-pigmentosa-rp'" class="submenu__link"><span class="submenu__linktext">Retinitis pigmentosa (RP)</span></a>
                  </li>
                    <li class="submenu__item">
                    <a :href="this.$parent.portal_url+'/oyehelse-og-synshemninger/synsforstyrrelser-etter-hjerneslag'" class="submenu__link"><span class="submenu__linktext">Synsforstyrrelser etter hjerneslag</span></a>
                  </li>
                    <li class="submenu__item">
                    <a :href="this.$parent.portal_url+'/oyehelse-og-synshemninger/diabetes-retinopati'" class="submenu__link"><span class="submenu__linktext">Diabetes retinopati</span></a>
                  </li>
                    <li class="submenu__item">
                    <a :href="this.$parent.portal_url+'/oyehelse-og-synshemninger/fargeblindhet'" class="submenu__link"><span class="submenu__linktext">Fargeblindhet</span></a>
                  </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="l-half section__content-padding">

            <div v-html="params.right_panel" />
            <div v-if="!params.right_panel">
                <section class="bullet__wrapper bullet__wrapper--inline ">
                    <div class="bullet bullet--inline">
                        <div class="bullet__body">
                            <p>Ring oss for råd om din synshemming<br><strong>21 97 70 00</strong></p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</section>

</template>

<script>
export default {
  name: 'PanelLinkList',
  props: {
    msg: String,
    params: Object
  }
}
</script>