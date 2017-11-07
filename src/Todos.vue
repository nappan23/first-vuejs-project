<template>
  <div id="test">
    <img src="./assets/logo.png">
    <h1>やるべきことリスト</h1>
    <div>
      <input v-model="text" type="textarea" id="textarea" ref="profile" v-on:keyup.13="addTodos" placeholder="追加したい内容を入力してください" maxlength='50'>
    </div>
    <div v-for="(todo, index) in todos">
      <input type="checkbox" id="todo[index]" v-on:click="removeTodos(index)">
      <label for="todo[index]">{{todo.value}}</label>
      <span for="todo.value">{{todo.date}}</span>
    </div>
    <h3>完了済み</h3>
    <div v-for="(doneTodo, index) in doneTodos">
      <input type="checkbox" id="doneTodo[index]" v-on:click="sulvageTodos(index)" checked>
      <label for="doneTodo[index]">{{doneTodo.value}}</label>
      <span for="doneTodo.value">{{doneTodo.date}}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'app',
  state: {
    text: ''
  },
  methods: {
    sulvageTodos: function (index) {
      this.todos.push({value: this.doneTodos[index].value, date: this.doneTodos[index].date})
      this.doneTodos.splice(index, 1)
    },
    removeTodos: function (index) {
      this.doneTodos.push({value: this.todos[index].value, date: this.todos[index].date})
      this.todos.splice(index, 1)
    },
    addTodos: function (event) {
      this.todos.push({value: this.text, date: moment(new Date()).format('YYYY/MM/DD HH:mm')})
    }
  },
  data () {
    return {
      todos: [
        {
          value: 'Vueの勉強をする',
          date: moment('2017/10/10').format('YYYY/MM/DD HH:mm')
        },
        {
          value: 'Railsの勉強をする',
          date: moment('2017/10/10').format('YYYY/MM/DD HH:mm')
        }
      ],
      doneTodos: [
        {
          value: 'JavaScriptの勉強をする',
          date: moment('2017/10/09').format('YYYY/MM/DD HH:mm')
        },
        {
          value: 'CSSの勉強をする',
          date: moment('2017/10/09').format('YYYY/MM/DD HH:mm')
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
