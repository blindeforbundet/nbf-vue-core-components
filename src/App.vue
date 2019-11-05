<template>
  <div id="app">

    <NbfHeader />
    <CampaignHeader button_text="test" text="Dette er en tekst! den er litt lang!" header="Hellu 2019!!! " image_url="https://source.unsplash.com/featured/1080x720?city"/>
    <NbfTextFloor content="test" header="test" src="https://source.unsplash.com/featured/1080x720?hot" />


    <RelatedLink url="https://vg.no"><p>Ring oss for råd om grå stær<br><strong>21 97 70 00</strong></p></RelatedLink>
    <RelatedLink><p>Denne har ingen lenke</p></RelatedLink>
    <PanelMember />

    <NbfFooter />
  </div>
</template>

<script>
import NbfHeader from './components/NbfHeader.vue'
import NbfFooter from './components/NbfFooter.vue'
import NbfTextFloor from './components/NbfTextFloor.vue'

import CampaignHeader from './components/CampaignHeader.vue'
import RelatedLink from './components/RelatedLink.vue'
import PanelMember from './components/PanelMember.vue'
 


import "@/assets/scss/blindeforbundet.scss"; 

export default {
  name: 'app',
  components: {

    NbfHeader,
    NbfFooter,
    NbfTextFloor,
    CampaignHeader,
    RelatedLink,
    PanelMember
  }
}
</script>

<style lang="scss">

#app {

}
</style>
