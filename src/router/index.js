import { createRouter, createWebHashHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import VehiclesPage from '../views/VehiclesPage.vue'
import HowItWorksPage from '../views/HowItWorksPage.vue'
import HelpPage from '../views/HelpPage.vue'
import BookingPage from '../views/BookingPage.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: LandingPage },
        { path: '/soidukid', component: VehiclesPage },
        { path: '/kuidas-tootab', component: HowItWorksPage },
        { path: '/abi', component: HelpPage },
        { path: '/broneeri', component: BookingPage }
    ]
})