import {createApp} from 'vue'
import App from './App.vue'

import HeaderTwo from "./components/HeaderTwo";

import './main.scss'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App);

app.component("HeaderTwo", HeaderTwo)

app.mount('#app');

import NavbarBottom from './NavbarBottom.vue'
createApp(NavbarBottom).mount('#navbarBottomHook')
