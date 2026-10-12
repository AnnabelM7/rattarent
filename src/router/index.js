import { createRouter, createWebHashHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import VehiclesPage from '../views/VehiclesPage.vue'
import HowItWorksPage from '../views/HowItWorksPage.vue'
import HelpPage from '../views/HelpPage.vue'
import BookingPage from '../views/BookingPage.vue'
import ElectricBikeView from '../views/ElectricBikeView.vue'
import CityBikeView from '../views/CityBikeView.vue'
import ElectricScooterView from '../views/ElectricScooterView.vue'
import ConfirmationPage from '../views/ConfirmationPage.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: LandingPage },
        { path: '/soidukid', component: VehiclesPage },
        { path: '/kuidas-tootab', component: HowItWorksPage },
        { path: '/abi', component: HelpPage },
        { path: '/broneeri', component: BookingPage },
        { path: '/elektriratas', component: ElectricBikeView },
        { path: '/linnaratas', component: CityBikeView},
        { path: '/elektritouks', component: ElectricScooterView},
        { path: '/kinnitus', component: ConfirmationPage }
    ]
})