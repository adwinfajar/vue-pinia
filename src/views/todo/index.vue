<script setup>
import { useTodoStore } from "../../stores/todo";
import { onMounted, computed } from "vue";

const todoStore = useTodoStore();

const todos = computed(() => {
  return todoStore.todolist;
});

onMounted(() => {
  todoStore.fetchTodolist();
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
  },
};
</script>

<template>
  <div id="todo" class="flex h-screen w-screen items-center justify-center">
    <div class="w-10/12 rounded-md border border-gray-200 p-10">
      <div class="text-center" style="align-items: center; justify-content: center">
        <input type="text" v-model="title" placeholder="New Task" />
        <button @click="addTodo" class="rounded-md bg-green-600 px-2 py-1 font-thin text-white hover:bg-green-700">Tambahkan</button>
      </div>
      <div class="flex justify-center">
        <table>
          <thead class="border-b-2">
            <th class="px-10 py-2">Todo List Today</th>
            <th class="px-10 py-2">Action</th>
          </thead>
          <tbody class="">
            <tr v-for="todo in todos.data" :key="todo.id">
              <td class="px-10 py-2">{{ todo.title }}</td>
              <td class="px-10 py-2">
                <button @click="deleteTodo(todo.id)" class="rounded-md bg-red-600 px-2 py-1 font-thin text-white hover:bg-red-700">delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style></style>
