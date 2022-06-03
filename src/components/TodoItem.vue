<template>
  <div class="todoItem">
    <AddTodo @addTodo="addTodo"/>
    <div class="todo">
      <Todo :todoData="todoData" @deleteTask="deleteTask" @toggleTaskComplete="toggleTaskComplete"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import data from '../service/todoData';
import {ref} from 'vue';

let todoData = ref(data);

function deleteTask(id: string): void {
  todoData.value = todoData.value.filter((td: { id: string; }) => td.id !== id)
}

function toggleTaskComplete(taskId: string): void {
  todoData.value =
      todoData.value.map(({id, title, completed}) => ({
        id,
        title,
        completed: taskId === id ? !completed : completed,
      }));
}

function addTodo(newTodo: any): void {
  if (newTodo) {
    todoData.value.push({
      ...newTodo
    });
  }
}
</script>

<style scoped>
.todoItem {
  width: 50%;
  height: 60vh;
  margin: 20px auto;
  padding: 10px;
}
</style>
