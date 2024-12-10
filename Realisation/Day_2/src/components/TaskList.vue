<script>
import TaskItem from "./TaskItem.vue";

export default {
  components: {
    TaskItem,
  },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleTask(index) {
      this.$emit("toggle", index);
    },
    deleteTask(index) {
      this.$emit("delete", index);
    },
    editTask(index) {
      this.$emit("edit", index);
    },
    saveTask(index) {
      this.$emit("save", index);
    },
  },
};
</script>

<template>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <div v-if="!task.isEditing">
        <TaskItem :task="task" @toggle="toggleTask(index)">
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
