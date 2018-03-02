import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton);

Vue.component('first-component', {
  props: ['test'],
  template: '<p>TEST FIRST COMPONENT {{test}}</p>'
});


new Vue({
  el: '#app',
  render: h => h(App)
});
