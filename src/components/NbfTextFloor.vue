<template>
<div class="wrapper">
  <section class="iamge_text_floor__container">


      <div v-if="src" class="iamge_text_floor__item--third">
        <img  class="image_text_floor__image" :src="src">

      </div>

      <div class="iamge_text_floor__item--half">
        <h2>{{header}}</h2>
        <p>
          <slot>
            {{content}}test
          </slot>
        </p>
            <!-- <a class="button" href="https://www.blindeforbundet.no/icare">Les mer om iCare</a> -->
      </div>


  </section>
</div>
</template>

<script>
export default {
  props: ["src", "header", "content"]
};
</script>


<style lang="scss" scoped>
p {
  background: white;
  padding: 15px;
}
h2 {
  display: inline-block;
  background: white;
  padding: 0 15px;
}

.image_text_floor__image {
  width: 270px;
  height: 270px;
  border: none !important;
  border-radius: 100%;
  display: block;
  margin: auto;
}

.iamge_text_floor__container {
  display: flex;
  align-items: center;
  margin: 15px 0;
}

.iamge_text_floor__item--third {
  flex: 0 0 33.33%;
}
.iamge_text_floor__item--half {
  flex: 1 0 33.33%;
}
</style>
