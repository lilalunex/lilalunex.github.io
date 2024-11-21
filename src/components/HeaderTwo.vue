<template>
  <section id="titleOfPage" class="pt-4 pb-1 pb-sm-3 headerTwo">
    <h2 class="bottom-0 pb-3 position-sticky">{{ msg }}</h2>
  </section>
</template>

<script>
export default {
  name: "HeaderTwo",
  data() {
    return {
      currentPath: window.location.hash,
      hrClass: ""
    }
  },
  props: {
    msg: String
  },
  mounted() {
    if (this.currentPath === "" || this.currentPath === "#/home") {
      this.hrClass = "homepage"
    } else {
      this.hrClass = "notHomepage"
    }
  }
}
</script>

<style scoped>
hr {
  display: block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 400px;
  border-top: 3px solid var(--mainColor) !important;
  opacity: 1 !important;
  margin-top: 0;
  /* border-radius: 10%; */
}

h2 {
  margin-bottom: 0;
  /* text-decoration: underline; */
  text-decoration-color: white;
  text-decoration-thickness: 3px;
}

hr.homepage {
  width: clamp(200px, 80%, 370px);
}

hr.notHomepage {
  width: clamp(80px, 10%, 110px);
}
</style>