import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import ChatbotPage from '../views/ChatbotPage.vue'
import CVPage from '../views/CVPage.vue'
import ContactPage from '../views/ContactPage.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/about', name: 'AboutPage', component: AboutPage },
  { path: '/projects', name: 'ProjectsPage', component: ProjectsPage },
  { path: '/chatbot', name: 'ChatbotPage', component: ChatbotPage },
  { path: '/cv', name: 'CVPage', component: CVPage },
  { path: '/contact', name: 'ContactPage', component: ContactPage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
