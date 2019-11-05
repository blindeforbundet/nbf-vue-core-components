<template>
<div>
  <header role="banner" class="header header--frontpage">
      <div class="circle-backgrounds circle-background--frontpage-disable"></div>
    <div class="header__topbar l-header-related">
      <a :href="this.$parent.portal_url" class="header__logo"><img src="../assets/logo_simple.svg" alt="Norges Blindeforbund" class="header__logo-image"></a>
      <a href="#mainmenu_first_item" id="header-menu-toggle" class="header__menu js-menu-toggle" aria-controls="mainmenu" data-focus="mainmenu_first_item" role="button" aria-expanded="false">Meny</a>
    </div>

    <div id="breadcrumbs"
      class="l-header-main l-header-main--navigation"
      v-if="this.$parent.show_breadcrumbs">
      <div class="header__breadcrumb">
          <span id="breadcrumbs-home">
              <a id="header-breadcrumb" tal:attributes="href portal_url">Forside</a><span class="breadcrumbSeparator"></span></span>
          <h1 class="page-title-crumb" tal:content="context/title">For bedrifter</h1>
      </div>
    </div>

    <div class="header__topbar-wrapper"></div>

    <div v-bind:style="{ backgroundImage: 'url(' + params.image + ')'}" style="margin-bottom: 0;" class="header__img" v-bind:class="{ 'header__img--bedrifter': this.$parent.show_breadcrumbs}">
      <div class="campaign-header__title-wrapper">
        <h2 class="campaign-header__title"><span class="campaign-header__title-backgorund">{{params.title}}</span></h2>
      </div>
    </div>
    
  </header>

  <section class="section section--frontpage section--frontpage-top">
    <div class="wrapper">
      <div class="l-small section__content-padding section__content-padding--first section--quote nbf__float">
        <div class="header__quote" v-if="params.quote_text">
          <div class="bullet__body--header">
            <blockquote><span>{{params.quote_text}}</span></blockquote>
          </div>
        </div>
      </div>
        
      <div class="l-big section__content-padding section__content-padding--first nbf__float">
          <p>{{params.lead_text}}</p>
          <a class="button" id="main_campaign__button" :href="params.button_link">{{params.button_text}}</a>
      </div>
    </div>
  </section>
</div>

</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
    params: Object
  }
}
</script>

<style scoped>

.circle-backgrounds {
  background: url('../assets/ball-CROPPED.svg');
  position: absolute;
  width: 536px;
  height: 536px;
  top: 90px;
  left: -130px;
  z-index: -99999999;
  
}

header {
  background-clip: content-box;
}
</style>
