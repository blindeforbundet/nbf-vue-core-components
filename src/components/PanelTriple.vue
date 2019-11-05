<template>
<section class="section">
    <div class="wrapper flex">

        <div class="l-half l-third section__content-padding section__content-padding--first" v-for="i in params.panels" v-bind:key="i">
            <a class="img-link" :href="i.panel_image_link">
                <img :src="i.panel_image" :alt="i.panel_alt_text" class="full_width">
                <h2>{{i.panel_title}}</h2></a>
                <div v-html="i.panel_text"></div>
        </div>

    </div>

    <!-- <tal:block tal:replace="structure context/@@panel_context_menu" /> -->
</section>

</template>

<script>
export default {
  name: 'PanelTriple',
  props: {
    msg: String,
    params: Object
  }
}
</script>

<style scoped>
h2 {
    color: black;
}


</style>