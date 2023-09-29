<template>
  <div>
    <p v-for="todo in todoList" :key="todo.id">{{ todo.name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoList: [
        { id: 1, name: "todo item" },
        { id: 2, name: "todo item2" },
      ],
    };
  },
};
</script>
<style scoped></style>
