<template>
  <div>
    <div>
      <router-link
        :to="{ name: 'Todo', params: { id: todo.id } }"
        v-for="todo in todoList"
        :key="todo.id"
      >
        <p>{{ todo.name }}</p>
      </router-link>
    </div>
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
