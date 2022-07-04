import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

import Home from './views/Home.vue'
import Ausbildung from './views/Ausbildung.vue'
import Erfahrung from './views/Erfahrung.vue'
import Skills from './views/Skills.vue'
import Sonstiges from './views/Sonstiges.vue'



const routes = [
    { path: '/', redirect: '/portfolio' },
    { path: '/portfolio', component: Home },
    { path: '/portfolio/ausbildung', component: Ausbildung },
    { path: '/portfolio/erfahrung', component: Erfahrung },
    { path: '/portfolio/skills', component: Skills },
    { path: '/portfolio/sonstiges', component: Sonstiges },
]

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

app.use(router)
app.mount('#app')
