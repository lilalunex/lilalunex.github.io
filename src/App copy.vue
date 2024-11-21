<template>
  <component :is="currentView" />
</template>

<script>
import HomePage from "@/pages/HomePage";
import PartnerPage from "@/pages/PartnerPage";
import ToolsPage from "@/pages/ToolsPage";
import ShopPage from "@/pages/ShopPage";
import NotFoundPage from "@/pages/NotFoundPage";
import ImprintPage from "@/pages/ImprintPage";
import PrivacyPage from "@/pages/PrivacyPage";
import NavbarBottom from "./NavbarBottom.vue";
import AnimationSlides from "./components/AnimationSlides.vue";

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/partner': PartnerPage,
  '/tools': ToolsPage,
  '/shop': ShopPage,
  '/imprint': ImprintPage,
  '/privacy': PrivacyPage,
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
  background: rgb(42, 0, 42);
  background: linear-gradient(180deg,
      rgba(66, 0, 66, 1) 0%,
      rgba(44, 0, 44, 1) 20%,
      rgba(22, 0, 22, 1) 60%,
      rgba(0, 0, 0, 1) 100%);
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
</style>
