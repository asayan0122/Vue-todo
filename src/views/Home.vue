<template>
  <div>
    <!--ToDo登録-->
    <div class="registerBox">
      <input class="registerBox__input" type="text" v-model="newTodo" placeholder="todo" />
      <br />
      <button class="registerBox__btn" @click="addTodo()">ADD TODO</button>
    </div>

    <!--ToDo検索-->
    <div class="searchBox">
      <i class="fa fa-search searchBox__icon" aria-hidden="true"></i>
      <input class="searchBox__input" type="text" v-model="keyword" placeholder="search" />
    </div>

    <!--タスク一覧-->
    <div class="todos-wrap">
      <label
        class="todos-wrap__todo"
        v-for="(todo) in searchTodos"
        :key="todo"
        v-bind:class="{ 'todos-wrap__todo--done': todo.done }"
      >
        <input class="todos-wrap__todo--input" type="checkbox" v-model="todo.done" />
        <label class="todos-wrap__todo--label">{{ todo.text }}</label>
        <i
          class="fa fa-trash icon-trash todos-wrap__todo--delete"
          aria-hidden="true"
          @click="removeTodo()"
        ></i>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      todos: [
        { text: 'task', done: false },
        { text: 'done_task', done: true },
      ],
      newTodo: "",
      keyword: "",
    }
  },
  methods: {
    addTodo: function () {
      var text = this.newTodo && this.newTodo.trim()
      if (!text) {
        return
      }
      this.todos.push({
        text: text,
        done: false,
      })
      this.newTodo = ''
    },
    removeTodo: function () {
      this.todos.splice(this.todos.indexOf(), 1)
    }
  },
  computed: {
    searchTodos: function () {
      var todos = [];
      for (var i in this.todos) {
        var todo = this.todos[i];
        if (todo.text.indexOf(this.keyword,1) !== -1) {
          todos.push(todo);
        }
      }
      return todos;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
input[type="text"]:focus {
  outline: 0;
}
@mixin flex-vender() {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
}
.registerBox {
  @include flex-vender;
  align-items: center;
  width: 300px;
  height: 40px;
  margin: 0 auto;
  border: 1px solid #e8e8e8;
  border-radius: 20px;
  margin-bottom: 15px;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
}
.searchBox {
  @include flex-vender;
  align-items: center;
  width: 300px;
  height: 40px;
  margin: 0 auto;
  border: 1px solid #e8e8e8;
  border-radius: 20px;
  margin-bottom: 15px;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  &__icon {
    width: 16px;
    font-size: 18px;
    margin-right: 5px;
  }
  &__input {
    width: calc(100% - 30px);
    height: 100%;
    border: none;
    box-sizing: border-box;
    padding: 5px 10px;
    font-size: 16px;
  }
}
.todos-wrap {
  @include flex-vender;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  &__todo {
    width: 300px;
    height: 40px;
    line-height: 40px;
    text-align: left;
    background: white;
    $element: #{&};
    &--done {
      @extend #{$element};
      color: #140f5c;
      text-decoration: line-through;
    }
    &--label {
      font-size: 16px;
      margin-left: 10px;
    }
    &--delete {
      float: right;
      top: 10px;
      right: 15px;
      position: relative;
      color: #977c77;
      backface-visibility: hidden;
    }
    &--delete:hover {
      cursor: pointer;
      color: #da2404;
      transform: scale(1.3);
      transition: 0.4s transform;
      backface-visibility: hidden;
    }
  }
}
</style>