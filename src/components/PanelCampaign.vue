<template>
<section class="section section--frontpage kampanje-tekst" v-bind:class="{private: params.review_state == 'private'}">
    <div class="wrapper"><div class="l-half l-small section__content-padding section__content-padding--first" >
        <img class="img-kampanje" :src="params.image" :alt="params.alt_text">
        <div class="wrapper"><div class="l-main-collum"></div></div></div>
        
        <div class="l-half l-big section__content-padding">
            <h2>{{params.title}}</h2>
            <p v-html="params.text"></p>
            <a class="button" :href="params.button_link">{{params.button_text}}</a>
        </div>
</div>

</section>
</template>

<script>
export default {
  name: 'PanelCampaign',
  props: {
    msg: String,
    params: Object
  }
}
</script>

<style scoped>

.private {
  border-style: dashed;
  border-width: 4px;
  border-color: rgba(255, 0,0, 0.5);
  background:  rgba(255, 0,0, 0.1);
}

</style>