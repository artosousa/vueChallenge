import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HackerNews from '@/components/HackerNews'
import Article from '@/components/Article'
import RandomCat from '@/components/RandomCat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hacker-news',
      name: 'HackerNews',
      component: HackerNews
    },
    {
      path: '/hacker-news/:articleId',
      name: 'Article',
      component: Article,
      props: true
    },
    {
      path: '/random-cat',
      name: 'RandomCat',
      component: RandomCat
    }
  ]
})
