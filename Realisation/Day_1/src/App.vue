<template>
  <div>
    <h1>To-Do List</h1>
    <input v-model="newTask" placeholder="Add a task" />
    <button @click="addTask">Add</button>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <div v-if="!task.isEditing">
          <span
            @click="toggleTask(index)"
            :style="{
              textDecoration: task.done ? 'line-through' : 'none',
              cursor: 'pointer',
            }"
          >
            {{ task.text }}
          </span>
          <button @click="editTask(index)">Edit</button>
          <button @click="deleteTask(index)">Delete</button>
        </div>
        <div v-else>
          <input v-model="task.text" />
          <button @click="saveTask(index)">Save</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const newTask = ref("");
    const tasks = ref([]);

    const addTask = () => {
      if (newTask.value.trim()) {
        tasks.value.push({
          text: newTask.value,
          done: false,
          isEditing: false,
        });
        newTask.value = "";
      }
    };

    const toggleTask = (index) => {
      tasks.value[index].done = !tasks.value[index].done;
    };

    const deleteTask = (index) => {
      tasks.value.splice(index, 1);
    };

    const editTask = (index) => {
      tasks.value[index].isEditing = true;
    };

    const saveTask = (index) => {
      tasks.value[index].isEditing = false;
    };

    return {
      newTask,
      tasks,
      addTask,
      toggleTask,
      deleteTask,
      editTask,
      saveTask,
    };
  },
};
</script>
