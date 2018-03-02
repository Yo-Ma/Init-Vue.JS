
<template>
  <div id="app">

    <img src="./assets/coffee-bean.jpg">
    <h1>{{ msg }}</h1>

    <h2> Coffee Machine One </h2>
    <toggle-button :value="true" :labels="{checked: 'Active', unchecked: 'inactive'}" width="80" height="30"/>

    <h2> Coffee Machine Two </h2>
    <toggle-button :value="false" :labels="{checked: 'Active', unchecked: 'inactive'}" width="80" height="30"/>
    <first-component :test="msg"/>
  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Coffee Machine App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
