<template>
<footer class="footer">
<div class="wrapper">
    <div class="l-half">
        <div class="footer__search l-space-4">
            <form role="search" method="" action="https://www.blindeforbundet.no/@@custom_search">
            <label for="search" class="form__label"><h2 class="h4">Søk på blindeforbundet.no</h2></label>
            <div class="form__search-wrapper">
                <input id="search" name="SearchableText" placeholder="" type="search" class="form__input form__input--search">
                <input type="submit" value="Søk" class="button button--search"></div></form>
                
                </div></div>
                
                <div class="l-half">
                    <h2 class="h4">Følg oss</h2>
                    <ul class="iconlinks">
                        <li class="iconlinks__item"><a class="iconlinks__link iconlinks__link--newsletter" href="https://www.blindeforbundet.no/nyhetsbrev"><span class="iconlinks__text">Nyhetsbrev</span></a></li>
                        <li class="iconlinks__item"><a href="https://www.facebook.com/blindeforbundet" class="iconlinks__link iconlinks__link--facebook"><span class="iconlinks__text">Facebook</span></a></li>
                        <li class="iconlinks__item"><a href="https://twitter.com/Blindeforbundet" class="iconlinks__link iconlinks__link--twitter"><span class="iconlinks__text">Twitter</span></a></li>
                        <li class="iconlinks__item"><a href="https://www.youtube.com/user/NorgesBlindeforbund" class="iconlinks__link iconlinks__link--youtube"><span class="iconlinks__text">YouTube</span></a></li>
                    </ul>
                </div>
            </div>
            <div class="wrapper">
                


                <div class="l-full-disable l-space-4">
                    <hr>
                    <div role="contentinfo" class="footer__addressfield"><div class="grid-disabled"><div class="l-half"><dl><dt class="footer__term">E-post: </dt><dd class="footer__description"><a href="mailto:info@blindeforbundet.no">info@blindeforbundet.no</a></dd></dl><dl><dt class="footer__term">Besøksadresse: </dt><dd class="footer__description">Sporveisgata 10</dd></dl></div><div class="l-half"><dl><dt class="footer__term">Telefon: </dt><dd class="footer__description"><a href="tel:+4723215000">23 21 50 00</a></dd></dl><dl><dt class="footer__term">Post: </dt><dd class="footer__description">Boks 5900 Majorstuen, 0308 Oslo </dd></dl></div></div></div><div class="l-half l-space-2 l-space-top-2"><a href="/personvernerklaering">Personvernerklæring</a></div></div></div><div class="wrapper">

                    <div v-for="folder in logos" v-bind:key="folder.title" class="l-full">
                
                        <h2 class="h4">{{folder.title}}</h2>
                        <div class="logogrid__container l-space-4 l-no-margin">
                            <div class="logogrid__item" v-for="l in folder.items" v-bind:key="l" >
                                <a class="img-link " :href="l.href || '#'">
                                    <img :src="l.src" class="logogrid__image" :alt="l.alt || ''" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
</footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String,
    logos: [],
  }
}
</script>

<style scoped>
.logogrid__image {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
.logogrid__image:hover {
  -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  filter: grayscale(0%);
}
</style>