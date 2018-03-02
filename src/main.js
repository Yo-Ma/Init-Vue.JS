import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton);


Vue.component('first-component', {
  props: ['test'],
  template: '<p>TEST FIRST COMPONENT {{test}}</p>'
});

Vue.component('add-machine', {
  props: ['number', 'isActive'],
  template: '<li>'+
  '<h3>Coffee Machine {{ number }}</h3>' +
  '<toggle-button :value="isActive " :labels="{checked: \'Active\', unchecked: \'inactive\'}" width="80" height="30"/>'+
  '</li>'
});

Vue.component('list-from-data', {
  props: ['list'],
  template: '<li>'+
  '<h3> Coffee Machine {{ list.name }}</h3>' +
  '<toggle-button :value="list.status" :labels="{checked: \'Active\', unchecked: \'inactive\'}" width="80" height="30"/>'+
  '</li>'
});

new Vue({
  el: '#app',
  render: h => h(App)
});
