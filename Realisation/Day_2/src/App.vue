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

<script>
import { ref, computed } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import TaskList from "./components/TaskList.vue";

export default {
  components: { Header, Footer, TaskList },
  setup() {
    const newTask = ref("");
    const category = ref("");
    const tasks = ref([]);
    const filterCategory = ref("");

    const filteredTasks = computed(() => {
      if (filterCategory.value) {
        return tasks.value.filter(
          (task) => task.category === filterCategory.value
        );
      }
      return tasks.value;
    });

    const addTask = () => {
      if (newTask.value.trim()) {
        tasks.value.push({
          text: newTask.value,
          category: category.value || "Uncategorized",
          done: false,
          isEditing: false,
        });
        newTask.value = "";
        category.value = "";
      }
    };

    const toggleTask = (index) => {
      filteredTasks.value[index].done = !filteredTasks.value[index].done;
    };

    const deleteTask = (index) => {
      const task = filteredTasks.value[index];
      const taskIndex = tasks.value.indexOf(task);
      tasks.value.splice(taskIndex, 1);
    };

    const editTask = (index) => {
      filteredTasks.value[index].isEditing = true;
    };

    const saveTask = (index) => {
      filteredTasks.value[index].isEditing = false;
    };

    return {
      newTask,
      category,
      tasks,
      filterCategory,
      filteredTasks,
      addTask,
      toggleTask,
      deleteTask,
      editTask,
      saveTask,
    };
  },
};
</script>
