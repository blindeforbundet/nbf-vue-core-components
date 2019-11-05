<template>
<div>
<!-- <div class="circle-background circle-background--frontpage"></div> -->
<div class="wrapper">
    <nav role="navigation" class="navigation l-mainmenu-wrapper">
      <div id="mainmenu" class="mainmenu__wrapper mainmenu__wrapper--inline">
        <ul class="mainmenu">
        <li class="mainmenu__item"><a class="mainmenu__link" id="mainmenu_first_item" :href="this.$parent.portal_url+'/oyehelse-og-synshemninger'" title="">Øyehelse og synshemninger</a></li>
        <li class="mainmenu__item"><a class="mainmenu__link" :href="this.$parent.portal_url+'/rad-tips-og-rettigheter'" title="">Råd, tips og rettigheter</a></li>
        <li class="mainmenu__item"><a class="mainmenu__link" :href="this.$parent.portal_url+'/hjelpemidler-og-produkter'" title="">Hjelpemidler og produkter</a></li>
        <li class="mainmenu__item"><a class="mainmenu__link" :href="this.$parent.portal_url+'/tilbud-kurs-og-arrangementer'" title="">Tilbud, kurs og arrangementer</a></li>
        <li class="mainmenu__item"><a class="mainmenu__link" :href="this.$parent.portal_url+'/universell-utforming'" title="">Universell utforming</a></li>
        <li class="mainmenu__item"><a class="mainmenu__link" :href="this.$parent.portal_url+'/medlemskap'" title="">Medlemskap</a></li>
        <li class="mainmenu__item"><a class="mainmenu__link" :href="this.$parent.portal_url+'/om-blindeforbundet'" title="">Om Blindeforbundet</a></li>
        <li class="mainmenu__item"><a class="mainmenu__link" :href="this.$parent.portal_url+'/fylkeslag'" title="">Fylkeslag</a></li>
        <li class="mainmenu__item"><a class="mainmenu__link mainmenu__link--sub" :href="this.$parent.portal_url+'/stott-blindeforbundet'" title="">Støtt Blindeforbundet</a></li>
        <li class="mainmenu__item"><a class="mainmenu__link mainmenu__link--sub" :href="this.$parent.portal_url+'/for-bedrifter'" title="">For bedrifter</a></li>
        </ul>
      </div>
    </nav>
  </div>
</div>
</template>

<script>
export default {
  name: 'TestComp',
  props: {
    msg: String
  }
}
</script>