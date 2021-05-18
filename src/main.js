// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'

import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCpp1ohPNbyf4GacIwCnDeKQZVoaPQPJ6g",
  authDomain: "heojungwon-46880.firebaseapp.com",
  databaseURL: "https://heojungwon-46880-default-rtdb.firebaseio.com",
  projectId: "heojungwon-46880",
  storageBucket: "heojungwon-46880.appspot.com",
  messagingSenderId: "267690011518",
  appId: "1:267690011518:web:d64b1d48522fbfc4e0e12f",
  measurementId: "G-KHRQXELC84"
 };

firebase.initializeApp(config);
// require styles
import 'swiper/swiper-bundle.css'

//reset 초기
require('@/assets/scss/_reset.scss')


Vue.use(firebase) 
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false;






/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  firebase: firebase,
  components: { App },
  template: '<App/>'
})
