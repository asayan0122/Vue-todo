import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../components/Todo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo
  }
]

const router = new VueRouter({
  routes
})

export default router
