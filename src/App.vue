<template>
  <div id="app">

    <h2 class="description">NbfHeader</h2>
    <NbfHeader />
    
    <h2 class="description">CampaignHeader</h2>
    <CampaignHeader button_text="test" text="Dette er en tekst! den er litt lang!" header="Hellu 2019!!! " image_url="https://source.unsplash.com/featured/1080x720?city"/>
    
    <h2 class="description">NbfTextFloor</h2>
    <NbfTextFloor content="test" header="test" src="https://source.unsplash.com/featured/1080x720?hot" />

    <h2 class="description">RelatedLink</h2>
    <RelatedLink url="https://vg.no"><p>Ring oss for råd om grå stær<br><strong>21 97 70 00</strong></p></RelatedLink>
    <RelatedLink><p>Denne har ingen lenke</p></RelatedLink>

    <h2 class="description">PanelMember</h2>
    <PanelMember />

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
    <PanelImagesAndContact />
    
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


    <FormStottOss />
    <AudioPlayer />
  </div>
</template>

<script>
import NbfHeader from './components/NbfHeader.vue'
import NbfFooter from './components/NbfFooter.vue'
import NbfTextFloor from './components/NbfTextFloor.vue'
import CampaignHeader from './components/CampaignHeader.vue'
import RelatedLink from './components/RelatedLink.vue'
import PanelMember from './components/PanelMember.vue'

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

import NbfTextImageFloor from './components/NbfTextImageFloor.vue'
 
import FormStottOss from '@/components/FormStottOss.vue'


import "@/assets/scss/blindeforbundet.scss"; 

import PanelTripleContent from '@/dummy_content/PanelTriple.js'
import PanelCampaignContent from '@/dummy_content/PanelCampaign.js'
import PanelLinkListContent from '@/dummy_content/PanelLinkList.js'
import PanelNewsListingContent from '@/dummy_content/PanelNewsListing.js'



export default {
  name: 'app',
  data: function() {
    return {
      counter: 0,
      PanelTripleContent,
      PanelCampaignContent,
      PanelLinkListContent,
      PanelNewsListingContent,
      portal_url: 'https://www.blindeforbundet.no'
    }
  },
  components: {

    NbfHeader,
    NbfFooter,
    NbfTextFloor,
    CampaignHeader,
    RelatedLink,
    PanelMember,

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
    FormStottOss

  }
}
</script>

<style lang="scss">

#app {

}

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
