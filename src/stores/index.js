import { defineStore } from "pinia";
import axios from "axios";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [],
  }),
  actions: {
    async fetchTodos() {
      try {
        const response = await axios.get("http://localhost:8080/todo");
        this.todos = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async addTodo(title) {
      try {
        const response = await axios.post("http://localhost:8080/todo", {
          title: title,
        });
      } catch (error) {
        console.error(error);
      }
    },
    async checkTodo(todoId) {
      try {
        await axios.put(`http://localhost:8080/todo/${todoId}`);
        this.todos = this.todos.filter((todo) => todo.id !== todoId);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTodo(todoId) {
      try {
        await axios.delete(`http://localhost:8080/todo/${todoId}`);
        this.todos = this.todos.filter((todo) => todo.id !== todoId);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
