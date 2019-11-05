<template>
  <div class="hello">
      
      <label>Antall mottakere av SMS</label><br>
      <input v-model="recievers"><br>
      <label>Melding</label><br>
      <textarea v-model="msg" cols=50 rows=20></textarea> 
      <p>
      Antall tegn: {{msg.length}} <strong v-if="message_count>1"> meldingen er over 160 tegn og vil derfor sendes som {{message_count}}  SMSer pr mottaker</strong><br>
      totalt {{message_count*recievers}} meldinger vil blir sendt<br>
      Pris totalt: {{message_count*recievers*price_pr}} kr<br>
      </p>

      <div class="mobile_container"><div class="message__buble">{{msg}}</div></div>
  </div>
</template>

<script>
export default {
  name: 'MobilePreview',

    data() {
    return {
      show_menu: false,
      price_pr: 2,
      recievers: 1,
      msg: "sfsd fa sd f Kalenderen med Blindeforbundets førerhundvalper er Norges mest populære kalender, og kanskje også den viktigste. Men HELT klart den søteste ;-)"
    };
  },
  computed: {
      message_count: function () {
          return Math.ceil(this.msg.length/160)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mobile_container {
    width: 350px;
    height: 750px;
    border: 1px solid gray;
}

.message__buble {
    background: blue;
    border-radius: 25px;
    padding: 20px;
    color: white;
}
p {
    max-width: 100%;
}
</style>
