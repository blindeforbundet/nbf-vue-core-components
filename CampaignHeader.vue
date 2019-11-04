<template>
  <section class="campaign-header">
    <div class="campaign-header__image" :style="`background-image: url(${image_url}); margin-bottom: 0;`"></div>
    <div class="wrapper">
      <div class="campaign-header__body">
        <div class="campaign-header__title-wrapper">
          <h1 class="campaign-header__title">
            <span class="campaign-header__title-backgorund">{{header}}</span>
          </h1>
        </div>
        <div class="campaign-header__description"><span>{{text}}</span></div>
          <a class="campaign-header__button button button--line button--big" :href="button_url">{{button_text}}</a>
          <a class="campaign-header__button button  button--big button--secondary" :href="button_url">{{button_text}}</a>
      </div>
    </div>
  </section>
</template>

<script>
import '@/assets/scss/campaign.scss';

export default {
  name: 'CampaignHeader',
  props: {
    header: String,
    text: String,
    button_text: String,
    button_url: String,
    image_url: String
  }
}

</script>

<style scoped>
.button--secondary {
  background: transparent;
  background: white;
}

</style>