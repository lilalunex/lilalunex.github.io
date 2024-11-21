import {createApp} from 'vue'
import App from './App.vue'

import HeaderTwo from "./components/HeaderTwo";
import HeaderThree from "./components/HeaderThree.vue";

import './main.scss'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App);

app.component("HeaderTwo", HeaderTwo)
app.component("HeaderThree", HeaderThree)

app.mount('#app');

import NavbarBottom from './NavbarBottom.vue'
createApp(NavbarBottom).mount('#navbarBottomHook')
