<template>
  <div>
    <p v-for="todo in todoList" :key="todo.id">{{ todo.name }}</p>
  </div>
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
