<template>

<!-- <div class="wrapper section__border-top" v-if="params.show_top_border"><div class="l-main-collum"></div></div> -->
    <section class="section section--frontpage section--samarbeidsformer">
        <div class="wrapper section__border-top" v-if="params.show_top_border"><div class="l-main-collum l-space-4 "></div></div>
         <div class="wrapper">

        <div class="l-half l-small section__content-padding section__content-padding--first"
             v-html="params.left_content">
        </div>

            <div class="l-half l-big section__content-padding">

                <h2 tal:content="context/title">{{params.title}}</h2>
                <span v-html="params.right_prolog" />

                <div class="samarbeidsformer">
                    <div v-for="i in params.panels" v-bind:key="i">
                        <a class="img-link" :href="i.url || '#'">
                            <img v-if="i.img_src" :src="i.img_src" alt="i.alt_text || ''">
                            <h5>{{i.title}}</h5>
                            <span v-html="i.text" />
                        </a>
                    </div>


                </div>
                <span v-html="params.right_epilog"></span>

            </div>
        </div>
        <!-- <tal:block tal:replace="structure context/@@panel_context_menu" /> -->

    </section>

</template>

<script>
export default {
  name: 'PanelImagesAndContact',
  props: {
    msg: String,
    params: Object
  }
}
</script>