<template>
  <div id="test">
    <img src="./assets/logo.png">
    <div>
      <input v-model="text" type="textarea" id="textarea" ref="profile" v-on:keyup.13="addTodos" placeholder="追加したい内容を入力してください" maxlength='50'>
    </div>
    <h3>やるべきことリスト</h3>
    <ul id="todoList" v-for="(todo, index) in todos">
      <li id="todo[index]" v-on:click="removeTodos(index)">{{todo.value}}<span>{{todo.date}}</span></li>
    </ul>
    <h3>完了済み</h3>
    <ul id="doneList" v-for="(doneTodo, index) in doneTodos">
      <li id="doneTodo[index]" v-on:click="sulvageTodos(index)">{{doneTodo.value}}<span>{{doneTodo.date}}</span></li>
    </ul>
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

ul#doneList li {
  list-style: none;
  position: relative;
}
ul#doneList li::after {
  display: block;
  content: '';
  position: absolute;
  top: .5em;
  left: -1em;
  width: 8px;
  height: 3px;
  border-left: 2px solid #3498db;
  border-bottom: 2px solid #3498db;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

ul#todoList li {
  list-style: none;
  position: relative;
}
ul#todoList li::after {
  display: block;
  content: '';
  position: absolute;
  top: .5em;
  left: -1em;
  width: 5px;
  height: 5px;
  background-color: #fff;
  border: 1px solid #3498db;
  border-radius: 100%;
}

</style>
