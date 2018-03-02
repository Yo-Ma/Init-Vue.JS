<template>
  <div id="app">
    <img src="./assets/coffee-bean.jpg">
    <h1>{{ msg }}</h1>
    <div>
      <h2>List as is</h2>
      <ul class="">
        <add-machine :isActive="true"  :number="1"/>
        <add-machine :isActive="false" :number="2"/>
        <add-machine :isActive="false" :number="3"/>
        <add-machine :isActive="false" :number="4"/>
        <add-machine :isActive="false" :number="5"/>
      </ul>
    </div>
    <br />
    <div>
      <h2>List from data</h2>
      <ul>
        <list-from-data v-for="machine in machines"
                        v-bind:list="machine"
                        v-bind:key="machine.id"/>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        machines: [
          {
            id: 0,
            name: "1",
            status: true
          },
          {
            id: 1,
            name: "2",
            status: false
          },
          {
            id: 2,
            name: "3",
            status: false
          },
          {
            id: 3,
            name: "4",
            status: false
          },
          {
            id: 4,
            name: "5",
            status: false
          }
        ]
      };
    }
  };

</script>

<style lang="scss">
  #app {
    font-family             : 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing  : antialiased;
    -moz-osx-font-smoothing : grayscale;
    text-align              : center;
    color                   : #2c3e50;
    margin-top              : 60px;
  }

  h1, h2 {
    font-weight : normal;
  }

  ul {
    list-style-type : none;
    padding         : 0;
  }

  li {
    display : inline-block;
    margin  : 0 10px;
  }

  a {
    color : #42b983;
  }
</style>
