<template>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <div v-if="!task.isEditing">
        <TaskItem :task="task" @toggle="() => toggleTask(index)">
          <span>Task: {{ task.text }};</span>
          <span>Category: {{ task.category }}</span>
        </TaskItem>
        <button @click="editTask(index)">Edit</button>
        <button @click="deleteTask(index)">Delete</button>
      </div>
      <div v-else>
        <input v-model="task.text" />
        <select v-model="task.category">
          <option hidden>Category</option>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
        </select>
        <button @click="saveTask(index)">Save</button>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import TaskItem from "./TaskItem.vue";

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["toggle", "delete", "edit", "save"]);

const toggleTask = (index) => emit("toggle", index);
const deleteTask = (index) => emit("delete", index);
const editTask = (index) => emit("edit", index);
const saveTask = (index) => emit("save", index);
</script>
