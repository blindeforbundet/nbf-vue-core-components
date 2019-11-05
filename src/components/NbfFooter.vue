<template>
<footer class="footer"> <div class="wrapper"> <div class="l-main-collum">
  <hr>
  <div role="contentinfo" class="footer__addressfield">
    <div class="grid">

      <dl class="l-half">
        <dt class="footer__term">E-post: </dt>
        <dd class="footer__description"><a :href="email">{{email}}</a></dd>
      </dl>

      <dl class="l-half">
        <dt class="footer__term">Telefon: </dt>
        <dd class="footer__description">{{phone}}</dd>
      </dl>

      <dl class="l-half" style="white-space: nowrap;">
        <dt class="footer__term">Besøksadresse: </dt>
        <dd class="footer__description">{{adress_visit}}</dd>
      </dl>

      <dl class="l-half">
        <dt class="footer__term">Post: </dt>
        <dd class="footer__description">{{adress}}</dd>
      </dl>
    </div>
  </div>
  </div>
</div>
</footer>
</template>

<script>
export default {
  props: {
    email: {
      default: "info@blindeforbundet.no"
    },
    phone: {
      default: "23 21 50 00"
    },
    adress: {
      default: "Postboks 5900 Majorstuen, 0354 OSLO"
    },
    adress_visit: {
      default: "Sporveisgata 10"
    }
  }
};
</script>


<style lang="scss" scoped>
.footer {
  background-color: #e6e6e6;
  width: 100%;
}
</style>
