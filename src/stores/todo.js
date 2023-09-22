import { defineStore } from "pinia";
import axios from "axios";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todolist: [],
  }),
  actions: {
    async fetchTodolist() {
      try {
        const response = await axios.get("http://localhost:8080/todo");
        this.todolist = response.data;
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
    async deleteTodo(todoId) {
      try {
        await axios.delete(`http://localhost:8080/todo/${todoId}`);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
