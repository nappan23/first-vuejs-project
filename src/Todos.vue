<template>
  <div id="test">
    <img src="./assets/logo.png">
    <div>
      <input v-model="text" type="textarea" id="textarea" ref="profile" v-on:keyup.13="addTodos" placeholder="追加したい内容を入力してください" maxlength='50'>
    </div>
    <h3>やるべきことリスト</h3>
    <template v-if="todoList.length > 0">
      <table id="todoList">
        <thead><td></td><td>id</td><td>項目名</td><td>日付</td></thead>
        <template v-for="(todo, index) in todoList">
          <tr v-on:click="changeTodosStatus(todo.id, 1)">
            <td>○</td>
            <td>{{todo.id}}</td>
            <td id="todo[index]">{{todo.value}}</td>
            <td>{{todo.date}}</td>
          </tr>
        </template>
      </table>
    </template>
    <h3>完了済み</h3>
    <template v-if="doneList.length > 0">
      <table id="doneList">
        <thead><td></td><td>id</td><td>項目名</td><td>日付</td></thead>
        <template v-for="(todo, index) in doneList">
          <tr v-on:click="changeTodosStatus(todo.id, 0)">
            <td>✔</td>
            <td>{{todo.id}}</td>
            <td id="todo[index]">{{todo.value}}</td>
            <td>{{todo.date}}</td>
          </tr>
        </template>
      </table>
    </template>
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
    changeTodosStatus: function (index, status) {
      this.todos[index - 1].status = status
    },
    addTodos: function (event) {
      this.todos.push({
        id: this.nextTodoId++,
        value: this.text,
        date: moment(new Date()).format('YYYY/MM/DD HH:mm'),
        status: 0
      })
    }
  },
  computed: {
    todoList: function (todos) {
      return this.todos.filter(function (todos) {
        return todos.status === 0
      })
    },
    doneList: function (todos) {
      return this.todos.filter(function (todos) {
        return todos.status === 1
      })
    }
  },
  data () {
    return {
      todos: [
        {
          id: 1,
          value: 'Vueの勉強をする',
          date: moment('2017/10/10').format('YYYY/MM/DD HH:mm'),
          status: 0
        },
        {
          id: 2,
          value: 'Railsの勉強をする',
          date: moment('2017/10/10').format('YYYY/MM/DD HH:mm'),
          status: 0
        },
        {
          id: 3,
          value: 'JavaScriptの勉強をする',
          date: moment('2017/10/09').format('YYYY/MM/DD HH:mm'),
          status: 1
        },
        {
          id: 4,
          value: 'CSSの勉強をする',
          date: moment('2017/10/09').format('YYYY/MM/DD HH:mm'),
          status: 1
        }
      ],
      nextTodoId: 5
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
