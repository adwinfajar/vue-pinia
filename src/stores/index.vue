<script setup>
import { useTodoStore } from "@/stores/todo.js";
import { onMounted, computed } from "vue";

const todoStore = useTodoStore();

const todos = computed(() => {
  return todoStore.todos;
});

onMounted(() => {
  todoStore.fetchTodos();
});
</script>
<script>
export default {
  data() {
    return {
      todoStore: useTodoStore(),
    };
  },

  methods: {
    addTodo() {
      this.todoStore.addTodo(this.title);
    },
    deleteTodo(todoId) {
      this.todoStore.deleteTodo(todoId);
    },
    checkTodo(todoId) {
      this.todoStore.checkTodo(todoId);
    },
  },
};
</script>

<template>
  <div class="text-center" style="align-items: center; justify-content: center">
    <input type="text" v-model="title" placeholder="New Task" />
    <button @click="addTodo">Add Todo</button>
  </div>
  <div class="text-center" style="display: flex; align-items: center; justify-content: center; margin-top: 10px">
    <table class="table-auto">
      <thead>
        <tr>
          <th>Title</th>
          <th>Check</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos.data" :key="todo.id">
          <td>{{ todo.title }}</td>
          <td>{{ todo.checked }}</td>
          <td>
            <button @click="checkTodo(todo.id)" style="margin-left: 10px">Check</button>
            <button @click="deleteTodo(todo.id)" style="margin-left: 5px">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
