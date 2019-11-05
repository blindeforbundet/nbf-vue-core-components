<template>
    <section class="l-related-disabled">
       <div class="bullet__wrapper">
            <a :href="url" class="bullet bullet--link" v-if="url">
                <div class="bullet__body">

                    <slot></slot>
                </div>
            </a>
            <div class="bullet" v-else>
                <div class="bullet__body">

                    <slot></slot>
                </div>
            </div>
       </div>
        <div class="bullet__line"></div>



  
  </section>
</template>

<script>
export default {
    props: ['url']
}
</script>

