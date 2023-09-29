<template>
  <div>
    <p v-for="todo in todoList" :key="todo">{{ todo }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoList: ["todo item", "todo item2"],
    };
  },
};
</script>

<style scoped></style>
