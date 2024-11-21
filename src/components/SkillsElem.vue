<template>
  <section class="py-4 skills position-relative">
    <h4 class="text-center pb-3">{{ title }}</h4>
    <!--		 <p v-for="item in arr" :key="item" alt="">{{ item }}</p>-->
    <img v-for="item in arrImages" :key="item" :src="getImgSkills(item)" alt="{{ item }}">
    <div v-if="arrLinks" class="pt-4">
      <a v-for="item in arrLinks" :key="item" :href="item.link" class="px-3 mx-3 button-outline pb-ctrl"
         target="_blank">{{
          item.name
        }}</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "SkillsElem",
  props: {
    title: String,
    arrImages: Array,
    arrLinks: Array
  },
  methods: {
    getImgSkills(pet) {
      var images = require.context('../assets/icons/skills/', false, /\.png$/)
      return images('./' + pet + ".png")
    },
  }
}
</script>


<style scoped>
.leftspacer {
  /* padding-left: clamp(5rem, 100%, 5rem); */
  padding-left: 25%;
}

.skills img {
  max-width: clamp(65px, 10%, 120px);
  padding-left: .25rem;
  padding-right: .25rem;
  width: 100%;
  padding-bottom: .5rem;
}

.pb-ctrl:nth-of-type(2) {
  margin-bottom: 3rem;
}
</style>