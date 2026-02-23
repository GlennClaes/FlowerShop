import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/Home/HomeView.vue'
import ContactView from '@/pages/Contact/ContactView.vue'
import FlowersView from '@/pages/Flowers/FlowersView.vue'
// import BouquetsView from '@/pages/Bouquets/BouquetsView.vue'
import TypeView from '@/pages/Flowers/Types/TypeView.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: HomeView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/bloemen', name: 'Bloemen', component: FlowersView },
  {
    path: '/bloemen/:category',
    name: 'Type',
    component: TypeView,
    props: true,
  },
  // { path: '/boeketten', name: 'Boeketten', component: BouquetsView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
