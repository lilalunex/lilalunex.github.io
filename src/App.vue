<template>
  <component :is="currentView" />
</template>

<script>
import HomePage from "@/pages/HomePage";
import PartnerPage from "@/pages/PartnerPage";
import ToolsPage from "@/pages/ToolsPage";
import NotFoundPage from "@/pages/NotFoundPage";
import ShopPage from "@/pages/ShopPage";
// import ImprintPage from "@/pages/ImprintPage";
// import PrivacyPage from "@/pages/PrivacyPage";
import NavbarBottom from "./NavbarBottom.vue";
import AnimationSlides from "./components/AnimationSlides.vue";

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/partner': PartnerPage,
  '/tools': ToolsPage,
  '/shop': ShopPage,
  // '/imprint': ImprintPage,
  // '/privacy': PrivacyPage,
}

export default {
  name: 'App',
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  components: {
    NavbarBottom,
    AnimationSlides
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFoundPage
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  },
}
</script>

<style>
:root {
  --teal: #00A1D7;
  --mainColor: white;
  --goldColor: #5C5B09;
  --navbarBottomHeight: 260px
}

#app {
  max-height: clamp(calc(667px - var(--navbarBottomHeight)), calc(100vh - var(--navbarBottomHeight)), calc(100vh - var(--navbarBottomHeight)));
  /* overflow-y: auto; */
  text-align: center;
  overflow-x: hidden;
}

#app::-webkit-scrollbar {
  display: none;
}

#app {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

html {
  background-color: black;
}

#navbarBottomHook,
#navbarBottom {
  overflow: hidden;
}

body {
  background: black;
  /* background: linear-gradient(180deg,
      rgba(66, 0, 66, 1) 0%,
      rgba(44, 0, 44, 1) 20%,
      rgba(22, 0, 22, 1) 60%,
      rgba(0, 0, 0, 1) 100%); */
  /* background-color: #2a002a !important; */
  display: grid;
  grid-template-rows: clamp(calc(667px - var(--navbarBottomHeight)), calc(100vh - var(--navbarBottomHeight)), calc(100vh - var(--navbarBottomHeight))) var(--navbarBottomHeight);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--mainColor) !important;
  text-shadow: 2px 2px 0px black;
}

section {
  position: relative;
}

a {
  text-decoration: none !important;
  color: white !important;
}

p {
  color: var(--mainColor) !important;
}

.button {
  text-transform: uppercase;
  background-color: var(--teal);
  border-color: var(--teal);
  border-radius: .5rem;
  border: 2px solid var(--teal);
  transition: .3s;
  padding: .75rem 2rem;
}

.button:hover,
.button:active {
  background-color: #210021;
  border-color: var(--teal);
  color: var(--teal) !important;
}

.button-outline {
  border-color: var(--teal);
  border-radius: .5rem;
  border: 2px solid var(--teal);
  transition: .3s;
  padding: .75rem 2rem;

}

.button-outline:hover,
.button-outline:active {
  background-color: var(--teal);
  /* border-color: var(--teal); */
  /* color: var(--teal) !important; */
}

.cubeHolder {
  background: linear-gradient(180deg,
      rgba(66, 0, 66, 1) 0%,
      rgba(44, 0, 44, 1) 20%,
      rgba(22, 0, 22, 1) 60%,
      rgba(0, 0, 0, 1) 100%);
  position: absolute;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.cubeYo {
  position: absolute;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  border: solid 1px #420042;
  border-color: #420042;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: cube 12s ease-in forwards infinite;
}

.cubeYo:nth-child(2n) {
  border-color: lighten(#0040C1, 10%);
}

.cubeYo:nth-child(1) {
  animation-delay: 5s;
}

.cubeYo:nth-child(2) {
  animation-delay: 4s;
  left: 25vw;
  top: 40vh;
}

.cubeYo:nth-child(3) {
  animation-delay: 1s;
  left: 75vw;
  top: 50vh;
}

.cubeYo:nth-child(4) {
  animation-delay: 3s;
  left: 90vw;
  top: 10vh;
}

.cubeYo:nth-child(5) {
  animation-delay: 2s;
  left: 10vw;
  top: 85vh;
}

.cubeYo:nth-child(6) {
  left: 50vw;
  top: 10vh;
}

/* @media only screen and (max-width: 600px) {
  .cubeYo:nth-child(1) {
    display: none;
  }

  .cubeYo:nth-child(2) {
    display: none;
  }

  .cubeYo:nth-child(4) {
    display: none;
  }
} */

@keyframes cube {
  0% {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 0;
  }

  10% {
    transform: scale(5) rotate(240deg) translate(-50%, -50%);
    opacity: 1;
  }

  90% {
    transform: scale(15) rotate(720deg) translate(-50%, -50%);
    opacity: 1;
  }

  100% {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
}
</style>
