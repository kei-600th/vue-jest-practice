<template>
  <router-link to="/">
    <p v-for="todo in todoList" :key="todo.id">{{ todo.name }}</p>
  </router-link>
</template>

<script>
import { getTodoList } from "@/apis/TodoApi";
export default {
  data() {
    return {
      todoList: [],
    };
  },
  async created() {
    this.todoList = await getTodoList();
  },
};
</script>
<style scoped></style>
