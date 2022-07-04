import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

import Home from './views/Home.vue'
import Ausbildung from './views/Ausbildung.vue'
import Erfahrung from './views/Erfahrung.vue'
import Skills from './views/Skills.vue'
import Sonstiges from './views/Sonstiges.vue'



const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', redirect: '/' },
    { path: '/ausbildung', component: Ausbildung },
    { path: '/erfahrung', component: Erfahrung },
    { path: '/skills', component: Skills },
    { path: '/sonstiges', component: Sonstiges },
]

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

app.use(router)
app.mount('#app')