<template>
  <div id="app">

    <h2 class="description">NbfHeader</h2>
    <NbfHeader />

    <h2 class="description">FormKalender</h2>
    <FormKalender />
    
    <h2 class="description">CampaignHeader</h2>
    <CampaignHeader button_text="test" text="Dette er en tekst! den er litt lang!" header="Hellu 2019!!! " image_url="https://source.unsplash.com/featured/1080x720?city"/>
    
    <h2 class="description">NbfTextFloor</h2>
    <NbfTextFloor content="test" header="test" src="https://source.unsplash.com/featured/1080x720?hot" />

    <h2 class="description">RelatedLink</h2>
    <RelatedLink url="https://vg.no"><p>Ring oss for råd om grå stær<br><strong>21 97 70 00</strong></p></RelatedLink>
    <RelatedLink><p>Denne har ingen lenke</p></RelatedLink>

    <h2 class="description">FormMember</h2>
    <FormMember />

    <h2 class="description">NbfTextImageFloor</h2>
    <NbfTextImageFloor />

    <h2 class="description">Divider</h2>
    <Divider />

    <h2 class="description">Header</h2>
    <Header />
    <!--
    <h2 class="description">Menu</h2>
    <Menu />
    -->
    <h2 class="description">PanelCampaign</h2>
    <PanelCampaign :params="PanelCampaignContent" />
    
    <h2 class="description">PanelImagesAndContact</h2>
    <PanelImagesAndContact :params="PanelImagesAndContactContent" />
    
    <h2 class="description">PanelLinkList</h2>
    <PanelLinkList :params="PanelLinkListContent" />
    
    <h2 class="description">PanelNewsListing</h2>
    <PanelNewsListing :params="PanelNewsListingContent" />
    
    <h2 class="description">PanelTriple</h2>
    <PanelTriple :params="PanelTripleContent" />

    <h2 class="description">Footer (forside)</h2>
    <Footer />
    
    <h2 class="description">NbfFooter (Kampanje)</h2>
    <NbfFooter />

    <h2 class="description">PanelGallery</h2>
    <PanelGallery />

    <component-documentation title="FormStottOss">
       <template #code>
<pre>
import FormStottOss from 'nbf-vue-core-components/components/FormStottOss.vue'
</pre>
       </template>

     </component-documentation>
    <FormStottOss />
   

  <h2 class="description">AudioPlayer</h2>
  <AudioPlayer />


<component-documentation title="PanelSummary">
<template v-slot:code>
<pre>
import PanelSummary from './components/PanelSummary.vue'

&lt;PanelSummary black="false" />
&lt;PanelSummary black="true" />

&lt;PanelSummary black="true">
  &lt;template v-slot:text>
    &lt;p>Test&lt;/p>
  &lt;/template>
&lt;/PanelSummary>

</pre>
</template>
</component-documentation>
<PanelSummary />
<PanelSummary black="true">
  <template v-slot:text>
    <p>Slik kan dette panelet se ut med hvit på svart...</p>
  </template>
</PanelSummary>



</div>
</template>

<script>
import NbfHeader from './components/NbfHeader.vue'
import NbfFooter from './components/NbfFooter.vue'
import NbfTextFloor from './components/NbfTextFloor.vue'
import CampaignHeader from './components/CampaignHeader.vue'
import FormMember from './components/FormMember.vue'
import AudioPlayer from './components/AudioPlayer.vue'
import Divider from './components/Divider.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
//import Menu from './components/Menu.vue'
import PanelCampaign from './components/PanelCampaign.vue'
import PanelImagesAndContact from './components/PanelImagesAndContact.vue'
import PanelLinkList from './components/PanelLinkList.vue'
import PanelNewsListing from './components/PanelNewsListing.vue'
import PanelTriple from './components/PanelTriple.vue'
import PanelGallery from './components/PanelGallery.vue'
import NbfTextImageFloor from './components/NbfTextImageFloor.vue'

import PanelSummary from './components/PanelSummary.vue'

// Forms
import RelatedLink from './components/RelatedLink.vue'
import FormStottOss from '@/components/FormStottOss.vue'

// Dummy content:
import PanelTripleContent from '@/dummy_content/PanelTriple.js'
import PanelCampaignContent from '@/dummy_content/PanelCampaign.js'
import PanelLinkListContent from '@/dummy_content/PanelLinkList.js'
import PanelNewsListingContent from '@/dummy_content/PanelNewsListing.js'
import PanelImagesAndContactContent from '@/dummy_content/PanelImagesAndContact.js'

import ComponentDocumentation from '@/components/ComponentDocumentation.vue'
import FormKalender from '@/components/FormKalender.vue'
import "@/assets/scss/blindeforbundet.scss";


export default {
  name: 'app',
  data: function() {
    return {
      counter: 0,
      PanelTripleContent,
      PanelCampaignContent,
      PanelLinkListContent,
      PanelNewsListingContent,
      PanelImagesAndContactContent,
      portal_url: 'https://www.blindeforbundet.no'
    }
  },
  components: {

    NbfHeader,
    NbfFooter,
    NbfTextFloor,
    CampaignHeader,
    RelatedLink,
    FormMember,
    PanelGallery,
    Divider,
    Footer,
    Header,
    //Menu,
    PanelCampaign,
    PanelImagesAndContact,
    PanelLinkList,
    PanelNewsListing,
    PanelTriple,
    
    AudioPlayer,
    NbfTextImageFloor,
    FormStottOss,
    ComponentDocumentation,
    PanelSummary,
    FormKalender
  }
}
</script>

<style lang="scss">
  .description {
      border-bottom: 2px solid #777;
      color: #777;
      font-size: 24px;
      font-weight: normal;
      font-family: "TheSansRegular";
      margin-bottom: 30px;
      padding-top: 30px;
  }
</style>
