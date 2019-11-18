<template>
  <div>
    <!--タスク登録-->
    <div class="registerBox">
      <input class="registerBox__input" type="text" v-model="newTodo" placeholder="ToDo" />
      <i class="fa fa-plus-square registerBox__todo--add" aria-hidden="true" @click="addTodo()"></i>
    </div>

    <!--タスク検索-->
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
          @click="removeTodo(todo)"
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
        { text: 'sample_task', done: false },
        { text: 'sample_done_task', done: true },
      ],
      newTodo: "",
      keyword: "",
    }
  },
  methods: {
    //タスク追加
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
    //タスク削除
    removeTodo: function(todo){
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
  },
  computed: {
    //タスク検索
    searchTodos: function () {
      var todos = [];
      for (var i in this.todos) {
        var todo = this.todos[i];
        if (todo.text.indexOf(this.keyword) !== -1) {
          todos.push(todo);
        }
      }
      return todos;
    }
  }
}
</script>

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
  font-size: 16px;
  margin: 0 auto;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  margin-bottom: 15px;
  padding: 5px 10px;
  background: #fff;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  &__input {
    width: 280px;
    height: 90%;
    border: none;
    font-size: 14px;
    color: #444444;
  }
  &__todo--add {
    float: right;
    top: 10px;
    color: #977c77;
    backface-visibility: hidden;
  }
  &__todo--add:hover {
    cursor: pointer;
    color: #00923d;
    transform: scale(1.3);
    transition: 0.4s transform;
    backface-visibility: hidden;
  }
}
.searchBox {
  @include flex-vender;
  align-items: center;
  width: 300px;
  height: 40px;
  font-size: 10px;
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
    margin-right: 5px;
    color: #444444;
    font-size:14px;
  }
  &__input {
    width: calc(100% - 30px);
    height: 100%;
    border: none;
    box-sizing: border-box;
    padding: 5px 10px;
    font-size: 14px;
  }
}
.todos-wrap {
  @include flex-vender;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  &__todo:hover {
    transform: scale(1.05);
  }
  &__todo {
    border-radius: 3px;
    transition: 0.4s transform;
    width: 280px;
    height: 40px;
    padding: 0 10px;
    border-top: solid 1px #e8e8e8;
    border-bottom: solid 1px #e8e8e8;
    line-height: 40px;
    text-align: left;
    background: white;
    $element: #{&};
    &--done {
      @extend #{$element};
      color: #35495e;
      text-decoration: line-through;
    }
    &--label {
      font-size: 14px;
      margin-left: 10px;
    }
    &--delete {
      float: right;
      top: 10px;
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