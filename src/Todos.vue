<template>
  <div id="test">
    <img src="./assets/logo.png">
    <h1>やるべきことリスト</h1>
    <div>
      <input v-model="text" type="textarea" id="textarea" ref="profile" v-on:keyup.13="enter" placeholder="追加したい内容を入力してください" maxlength='50'>
    </div>
    <div v-for="todo in todos">
      <input type="checkbox" id="todo.id" value="todo.value">
      <label for="todo.id">{{todo.value}}</label>
    </div>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
export default {
  name: 'app',
  state: {
    text: ''
  },
  methods: {
    enter: function (event) {
      // alert(this.text)
      this.todos.push({id: 3, value: this.text})
    }
  },
  data () {
    return {
      todos: [
        {
          id: '1',
          value: 'Vueの勉強をする'
        },
        {
          id: '2',
          value: 'Railsの勉強をする'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
