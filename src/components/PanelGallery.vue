<template>
    <section class="section l-space-4">
        <div class="l-space-top-2">

            <div class="section__body section__body--no-padding">

            <div class="gallery">
                <figure>
                <div class="gallery__image-wrapper">
                    <img src="https://www.blindeforbundet.no/kalender/ta-en-titt-pa-noen-av-bildene-i-kalenderen/februar/@@images/image/large" alt="To lysegule valper står på et fjell. Bak dem er et snødekt fjell." class="section__image gallery__image" height="400">
                    <a class="button gallery__button gallery__button--prev" href="javascript:;" role="button" aria-controls="gallery-caption">Forrige</a>
                    <a class="button gallery__button gallery__button--next" href="javascript:;" role="button" aria-controls="gallery-caption">Neste</a>
                </div>
                <figcaption id="gallery-caption" aria-live="assertive">
                    <div class="gallery__image-caption">To lysegule valper står på et fjell. Bak dem er et snødekt fjell.</div>
                </figcaption>
                </figure>
            </div>
            </div>
        </div>
        


    </section>
</template>

<script>
export default {
  name: 'PanelGallery',
  props: {
    msg: String,
    params: Object
  }
}
</script>

<style scoped>
.section__image {
    max-width: 100%;
}
</style>