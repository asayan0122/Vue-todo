<template>
  <div>
    <div class="registerBox">
      <input class="registerBox__input" type="text" v-model="newTodo" placeholder="todo" />
      <br />
      <button class="registerBox__btn" @click="addTodo()">ADD TODO</button>
    </div>
    <div class="searchBox">
      <i class="fa fa-search searchBox__icon" aria-hidden="true"></i>
      <input class="searchBox__input" type="text" v-model="keyword" placeholder="searchbox" />
    </div>
    <div class="todos-wrap">
      <label
        class="todos-wrap__todo"
        v-for="(todo) in searchTodos"
        :key="todo"
        v-bind:class="{ 'todos-container__todo--checked': todo.done }"
      >
        <input type="checkbox" v-model="todo.done" />
        <label>{{ todo.text }}</label>
        <button @click="removeTodo()">削除</button>
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
        if (todo.text.indexOf(this.keyword) !== -1) {
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
@mixin flex-vender() {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
}
.registerBox {
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

.todos-wrap {
  @include flex-vender;
  flex-direction: column;
  align-items: center;

  &__todo {
    width: 270px;
    text-align: left;
    $element: #{&};
    &--checked {
      @extend #{$element};
      color: #85a6c6;
    }
  }
}
input[type="text"]:focus {
  outline: 0;
}
.searchBox {
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
</style>