<template>
  <div v-for="item in todoData" :key="item.id">
    <div class="todo-item">
      <p><span class="completed" :class="{ done: item.completed }" @click="toggleTaskCompleteState(item.id)">
        {{ item.title }}
      </span>

        <button class="del" @click="emitDeleteTask(item.id)">x</button>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  todoData: any[]
}>();

const emit = defineEmits(['deleteTask', 'toggleTaskComplete']);

function toggleTaskCompleteState(id: string): void {
  emit('toggleTaskComplete', id);
}

function emitDeleteTask(id: string): void {
  emit('deleteTask', id);
}
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
  margin: 10px 0px;
}

.completed {
  cursor: pointer;
}

.done {
  text-decoration: line-through;
}

.del {
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>
