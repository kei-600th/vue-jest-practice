<template>
  <div>
    <input
      type="checkbox"
      :checked="modelValue"
      @change="this.updateStatus(todo, $event)"
    />
    <router-link :to="{ name: 'Todo', params: { id: todo.id } }">
      <span>{{ todo.name }}</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "TodoListItem",
  props: {
    todo: {},
    modelValue: {},
  },
  methods: {
    updateStatus(todo, event) {
      this.$emit("update:modelValue", event.target.checked);
      this.$emit("updateStatus", todo);
    },
  },
};
</script>
