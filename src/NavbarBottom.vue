<template>
  <section id="navbarBottom" class="container position-sticky bottom-0 w-100 mx-auto d-block px-1 px-sm-0" v-bind:class="[animationClass]">
    <div class="row mx-auto g-0 justify-content-center">
      <div v-for="(item) in items" :key="item" class="col-3 text-center">
        <a :href="'#/'+item.link" class="ctrl">
          <img :src="getImgUrl(item.link)" :alt="item.link">
        </a>
      </div>
      <!-- <div class="col-12 py-3 py-sm-5 row text-center text-uppercase justify-content-center mx-auto">
        <div class="col-5">
          <a href="#/imprint">
            Impressum
          </a>
        </div>
        <div class="col-5">
          <a href="#/privacy">
            Datenschutz
          </a>
        </div>
      </div> -->
    </div>
    <div class="text-center text-white">
      <p class="pt-3">Current: VueJS 3.2.13</p>
      <a href="/remix">Remix</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NavbarBottom',
  props: {
    msg: String
  },
  data() {
    return {
      animationClass: "",
      currentPath: window.location.hash,
      items: [
        {link: 'home'},
        {link: 'partner'},
        {link: 'tools'},
        {link: 'shop'}
      ]
    }
  },
  methods: {
    getImgUrl(pet) {
      var images = require.context('./assets/icons/menu/', false, /\.png$/)
      return images('./' + pet + ".png")
    }
  },
  mounted() {
    if (this.currentPath === "" || this.currentPath === "#/home" || this.currentPath === "#/tools" || this.currentPath === "#/imprint") {
      this.animationClass = "slideFromRight12ms"
    } else {
      this.animationClass = "slideFromLeft9ms"
    }
    this.animationClass = "slideFromBottom3ms"
  }
}
</script>

<style scoped>

#navbarBottomHook, #app {
  overflow: hidden;
}

#navbarBottom {
  width: 100%;
  /* max-width: 600px; */
}

/* #NavbarBottom div.row:first-of-type > div:not(:last-of-type) { */
  /*border-right: 1px solid #6C757D;*/
  /*border-bottom: 3px solid #6C757D;*/
  /*border-bottom-right-radius: 50px;*/
/* } */

#navbarBottom img {
  width: 100%;
  max-width: 140px;
}

.row {
  max-width: clamp(375px, 75%, 750px);
}

a.ctrl {
  text-transform: uppercase;
  font-weight: bold;
}
</style>
