<template>
  <div>
    <form @submit.prevent="addTodo()">
      <input type="text" name="title" v-model="title" placeholder="Add Todo...."/>
      <input :disabled="!canAddNewTask" type="submit" value="submit" class="btn"/>
    </form>
  </div>
</template>

<script setup lang="ts">
import {genTodoId} from '../../service/todoData';
import {ref, computed} from 'vue';

let title = ref('');

const emit = defineEmits(['addTodo']);
const canAddNewTask = computed(() => title.value.trim().length > 0);

function addTodo() {
  const newTodo = {
    id: genTodoId(),
    title: title.value,
    completed: false,
  };
  emit('addTodo', newTodo);
  title.value = '';
}
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  outline: none;
}

input[type="submit"] {
  flex: 2;
  background: green;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
</style>
