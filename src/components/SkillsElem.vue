<template>
	<div class="py-4 skills">
		<h4 class="text-start leftspacer">{{ title }}</h4>
		<!-- <p v-for="item in arr" :key="item" alt="">{{ item }}</p> -->
		<img v-for="item in arrImages" :key="item" :src="getImgSkills(item)" alt="{{ item }}">
		<div v-if="arrLinks" class="pt-4">
		<a v-for="item in arrLinks" :key="item" :href="item.link" class="px-3 mx-3 button-outline" target="_blank">{{
			item.name }}</a>
			</div>
	</div>
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
</style>