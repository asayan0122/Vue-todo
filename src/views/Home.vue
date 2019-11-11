<template>
  <div>
    <form>
      <input type="text" v-model="newTodo" placeholder="todo" />
      <br />
      <button @click="addTodo()">ADD TODO</button>
    </form>
    <input type="text" v-model="keyword" placeholder="searchbox" />
    <div class="todos-container">
      <label
        class="todos-container__todo"
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

.todos-container {
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
</style>