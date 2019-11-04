<template>
<header>
      <div class="nbf-l-header-campaign">
        
        <div class="nbf-l-header-campaign__inner">
          <a class="nbf-campaign-header__logo" href="#">
            <img alt="Norges Blindeforbund" class="nbf-campaign-header__logo-image" src="https://www.blindeforbundet.no/++resource++nbf.campaignrig/graphics/svg/logo_simple.svg">
          </a>
        
        </div>
        
        <a href="#" v-on:click="toggleMenu()" class="campaign-menu__menu" aria-controls="campaign-menu" data-focus="campaign-menu" role="button" aria-expanded="false">Meny</a>

        <nav role="navigation" id="campaign-menu" tabindex="-1" class="nbf-campaign-menu__wrapper" v-bind:class="{ 'nbf-campaign-menu__wrapper--open': show_menu }" >
          <ul class="nbf-campaign-menu" >
          
            <li v-for="item in items" class="nbf-campaign-menu__item" :key="item.url">
              <a :href="item.url" class="nbf-campaign-menu__link">{{item.title}}</a>
            </li>
          </ul>
          

        </nav>
        
      </div>
</header>

</template>

<script>



export default {

  props: ["items"],
  data() {
    return {
      show_menu: false
    };
  },

  methods: {
    toggleMenu() {
      console.log("gakk");
      if (this.show_menu) {
        this.show_menu = false;
      } else {
        this.show_menu = true;
      }
    }
  }
};
</script>

<style scoped lang="scss">
 @import "../assets/scss/blindeforbundet.scss";

.menu__wrapper {
}

.nbf-campaign-header__logo {
  border: 0;
  display: block;
  margin: 15px 0;
  img {
    display: block;
    min-width: 100px;
    max-width: 220px;
  }
  @include max-break(medium) {
    margin: 15px;
  }
}

.nbf-l-header-campaign {
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1360px;
  margin: 0 auto;
}

.nbf-campaign-menu {

  list-style: none;
  li {
    margin: 0;
  }
  li::before {
    content: none;
  }

  @include break(medium) {
    li {
      float: left;
      margin: 0;
      a {
        margin-right: 30px;
      }
    }
    li:last-of-type {
      a {
        margin-right: 0 !important;
      }
    }
  }
}

@include max-break(medium) {
  .nbf-campaign-menu__wrapper {
    padding: 25px;
    display: none;
    background: #ffdc00;
    width: 100%;
    &--open {
      display: block;
    }
  }
}

.nbf-campaign-menu__link {
  display: inline-block;
  &:hover {
    outline: 0;
        border-bottom: 3px solid #c60c30;
  }
  display: inline-block;

  margin-right: 30px;
  float: left;
  color: #c60c30;
  border-bottom: 1px dotted #c60c30;
  padding: 0;
  @include max-break(medium) {
    width: 100%;
    color: #000;
    display: block;
    border-bottom: 3px dotted #f29400;
    padding: 7.5px 0;
  }
}

.campaign-menu__menu {
  text-align: center;
  @include max-break(medium) {
    margin: 15px;
    font-family: $font-header;
    background: $yellow;
    float: right;
    /*position: absolute;
    right: $baseline;
    top: $baseline;
    */
    padding: $baseline * 0.6 $baseline $baseline * 0.6 $baseline;
    min-height: ($baseline * 3) + $border-width--focus;
    vertical-align: top;
    color: $color-text;
    border-bottom: $border-width--focus solid transparent;
    background-clip: padding-box;
    @include transition();
    &:before {
    }
    &--open {
    }
    &:hover,
    &:focus {
      border-bottom: 4px solid $color-link;
      transform: translateY(-4px);
    }
    &:active {
      background-color: $red;
      transform: translateY(0px);
      border-bottom: 4px solid transparent;
    }
  }
  @include break(medium) {
    display: none;
    &:focus {
      display: none;
    }
  }
}
</style>
