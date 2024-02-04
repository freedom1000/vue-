import Vue from 'vue';
import VueRouter from 'vue-router';
import Movie from '@/views/movie/MovieView.vue';
import Music from '@/views/music/MusicView.vue';
import Book from '@/views/book/BookView.vue';
import Photo from '@/views/photo/PhotoView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/movie',
  },
  {
    path: '/movie',
    name: 'movie',
    component: Movie,
  },
  {
    path: '/music',
    name: 'music',
    component: Music,
  },
  {
    path: '/book',
    name: 'book',
    component: Book,
  },
  {
    path: '/photo',
    name: 'photo',
    component: Photo,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
