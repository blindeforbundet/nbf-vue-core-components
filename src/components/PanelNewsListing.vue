<template>
<div>
<div class="wrapper">
    <div class="l-half section__content-padding section__content-padding--first">
        <h2>{{params.panel_left_header}}</h2>

        <nav role="navigation">
            <ul class="entries">
                <li class="entries__item" v-for="i in params.news_items" v-bind:key="i">
                    <a :href="i.absolute_url" class="entries__link">
                    <h3 class="entries__title">{{i.title}}</h3>
                    <div class="entries__meta">
                        <span class="entries__category">Nyhetssak fra </span>
                        <span class="entries__date">{{i.date | formatted_date }}</span>
                    </div>
                    </a>
                </li>
            </ul>
        </nav>
        <p>
            <a :href="params.panel_left_link_title" class="submenu__link"><span class="submenu__linktext">{{params.panel_left_link_title}}</span></a>
        </p>
    </div>
    <div class="l-half section__content-padding">
        <h2>{{params.panel_right_header}}</h2>
        <nav role="navigation">
            
            <ul class="entries">
                <li class="entries__item" v-for="i in params.aktivitets_items" v-bind:key="i">
                    
                    <a :href="i.absolute_url" class="entries__link">
                    <h3 class="entries__title">{{i.title}}</h3>
                    <div class="entries__meta">
                        <span class="entries__category">aktivitet</span>&nbsp;
                        <span class="entries__date">{{i.datestring}}</span>
                    </div>
                    </a>
                </li>
            </ul>

        </nav>
        <p>
            
            <a :href="params.panel_right_link_title" class="submenu__link"><span class="submenu__linktext">{{params.panel_right_link_title}}</span></a>    
        </p>
    </div>
</div>

<div v-if="params.panel_footer_left_title || params.panel_footer_right_title">

    <div class="wrapper section__border-top"><div class="l-main-collum"></div></div>

    <section class="section section--frontpage">
        <div class="wrapper">
            <div class="l-half section__content-padding" v-if="params.panel_footer_left_title">
                <a :href="params.panel_footer_left_url" class="submenu__link smallmargin"><span class="submenu__linktext">{{params.panel_footer_left_title}}</span></a>
                 <span>{{params.panel_footer_left_description}}</span>
            </div>

             <div class="l-half section__content-padding" v-if="params.panel_footer_right_title">
                <a :href="params.panel_footer_right_url" class="submenu__link smallmargin"><span class="submenu__linktext">{{params.panel_footer_right_title}}</span></a>
                <span>{{params.panel_footer_right_description}}</span>
            </div>
        </div>
    </section>
</div>

    </div>
</template>

<script>
export default {
  name: 'PanelNewsListing',
  props: {
    msg: String,
    params: Object
  },
  filters: {
      formatted_date: function(date_string) {
        var date = new Date(date_string)
        var options = {month: 'long', day: 'numeric'};

        return date.toLocaleString('nb-NO', options) 
      }
  }
}
</script>