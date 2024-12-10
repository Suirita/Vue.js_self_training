<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import TaskList from "./components/TaskList.vue";

export default {
  components: {
    Header,
    Footer,
    TaskList,
  },
  data() {
    return {
      newTask: "",
      category: "",
      tasks: [],
      filterCategory: "",
    };
  },
  computed: {
    filteredTasks() {
      if (this.filterCategory) {
        return this.tasks.filter(
          (task) => task.category === this.filterCategory
        );
      }
      return this.tasks;
    },
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({
          text: this.newTask,
          category: this.category || "Uncategorized",
          done: false,
          isEditing: false,
        });
        this.newTask = "";
        this.category = "";
      }
    },
    toggleTask(index) {
      this.filteredTasks[index].done = !this.filteredTasks[index].done;
    },
    deleteTask(index) {
      const task = this.filteredTasks[index];
      const taskIndex = this.tasks.indexOf(task);
      this.tasks.splice(taskIndex, 1);
    },
    editTask(index) {
      this.filteredTasks[index].isEditing = true;
    },
    saveTask(index) {
      this.filteredTasks[index].isEditing = false;
    },
  },
};
</script>

<template>
  <div>
    <Header />
    <div>
      <input v-model="newTask" placeholder="Add a task" />
      <select v-model="category">
        <option hidden>Category</option>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
      </select>
      <button @click="addTask">Add</button>

      <div>
        <span>Filter:</span>
        <select v-model="filterCategory">
          <option value="">All</option>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
        </select>
      </div>

      <TaskList
        :tasks="filteredTasks"
        @toggle="toggleTask"
        @delete="deleteTask"
        @edit="editTask"
        @save="saveTask"
      />
    </div>
    <Footer />
  </div>
</template>
