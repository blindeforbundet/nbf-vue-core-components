<template>
    <section>
        <h2 class="description">{{title}} <small><label><input type="checkbox" v-model="show_description"> beskrivelse </label> <label><input type="checkbox" v-model="show_code"> kode</label></small></h2>
        
        <div v-if="show_description">
            <slot name="description"></slot>
        </div>

        <div class="code_block" v-if="show_code">
            <code >
                <slot name="code"></slot>
            </code>
        </div>
    </section>
</template>

<script>
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

import 'highlight.js/styles/vs2015.css';

export default {
    name: 'ComponentDocumentation',
    props: {
        title: String
    },

    data () {
        return {
            show_code: false,
            show_description: false
        }
    },

}
</script>


<style scoped>
.description {
    border-bottom: 2px solid #777;
    color: #777;
    font-size: 24px;
    font-weight: normal;
    font-family: "TheSansRegular";
    margin-bottom: 30px;
    padding-top: 30px;
}
.code_block {
    background: black;
    color: white;
    padding: 10px;
}
label:hover {
    cursor: pointer;
}
</style>