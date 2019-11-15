<template>
<section class="section section--frontpage" v-bind:class="{'black': black}">
    <div class="gakk">
        <div class="">
            <div class="image_container">

                    <img class="image" src="https://source.unsplash.com/featured/1080x720" >
            </div>
            <div class="">
                <div class="l-main-collum">
                </div>
            </div>
        </div>
        <div class="">
            <div tal:content="structure context/text/output">
            <slot name="text">
                <p>
                    Blindeforbundet driver egne <a href="#">førerhundskoler</a> og arbeider med <a href="#">bistandsprosjekter</a> i Afrika og Asia. Vi tilbyr også mange <a href="#">kurs og aktiviteter</a> som kan være relevante for din bedrift.
                </p>
                <p>
                    Vi kan også hjelpe med <a href="#">råd og støtte</a> for å <a href="#">tilrettelegge</a> arbeidsplassen for blinde og synshemmede. Vi støtter <a href="#">forskning</a> på øyehelse og syn.
                </p>
                </slot>
            </div>
        </div>
    </div>
</section>
</template>


<script>

export default {

    props: {
        black: Boolean,
    },

    data () {
        return {
            
        }
    },

}
</script>

<style lang="scss" scoped>
.black {
    background: black;
    color: white;
    a {
        color: white;
        border-color: white;
    }

}

p {
    font-size: 3rem;
    line-height: 1.4;
}

.image_container {
    padding-right: 40px;
}
.image {
    width: 320px;
    height: 320px;
    border: none;
    border-radius: 100%;
}

.gakk {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
