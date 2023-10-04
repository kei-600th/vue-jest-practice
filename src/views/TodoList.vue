<template>
  <div>
    <div>
      <input name="searchWord" v-model="searchWord" />
      <div v-for="todo in searchedTodoList" :key="todo.id">
        <input type="checkbox" />
        <router-link :to="{ name: 'Todo', params: { id: todo.id } }">
          <p>{{ todo.name }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getTodoList } from "@/apis/TodoApi";
export default {
  data() {
    return {
      todoList: [],
      searchWord: "",
    };
  },
  async created() {
    this.todoList = await getTodoList();
  },
  computed: {
    searchedTodoList() {
      return this.todoList.filter((todo) =>
        todo.name.includes(this.searchWord)
      );
    },
  },
};
</script>
<style scoped></style>
