<template>
  <div id="app">
    <AddTodo />
    <FilterTodos />
    <Todos />
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import AddTodo from "./components/AddTodo.vue";
import FilterTodos from "./components/FilterTodos.vue";

export default {
  name: "App",
  components: { Todos, AddTodo, FilterTodos },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
