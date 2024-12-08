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
export default {
  data() {
    return {
      newTask: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ text: this.newTask, done: false, isEditing: false });
        this.newTask = "";
      }
    },
    toggleTask(index) {
      this.tasks[index].done = !this.tasks[index].done;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      this.tasks[index].isEditing = true;
    },
    saveTask(index) {
      this.tasks[index].isEditing = false;
    },
  },
};
</script>
