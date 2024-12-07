### **Day 1: Introduction to Vue.js**

**Objective**: Understand the basics of Vue.js and set up your development environment.

#### **Activities**

1. **Learn About Vue.js Features and Ecosystem**

   - Read the [Vue.js Introduction](https://vuejs.org/guide/introduction.html).
   - Understand what makes Vue.js different from other frameworks:
     - Reactive data binding.
     - Component-based architecture.
     - Progressive adoption (can be used for small or large projects).
     - Integration with tools like Vue Router and Pinia.

2. **Set Up Your Development Environment**

   - Install **Node.js** if it's not already installed ([Download Node.js](https://nodejs.org/)).
   - Choose a project setup method:
     - **Vue CLI**:
       ```bash
       npm install -g @vue/cli
       vue create my-first-vue-app
       cd my-first-vue-app
       npm run serve
       ```
     - **Vite (recommended for speed)**:
       ```bash
       npm create vite@latest my-first-vue-app --template vue
       cd my-first-vue-app
       npm install
       npm run dev
       ```

3. **Learn Vue.js Basics**

   - Explore Vue templates:
     - Syntax for HTML, directives, and data binding.
     - Read the [Essentials Guide](https://vuejs.org/guide/essentials/template-syntax.html).
   - Practice directives:
     - **`v-bind`**: Dynamically bind attributes.
     - **`v-model`**: Two-way data binding.
     - **`v-for`**: Render lists.
     - **`v-if/v-else`**: Conditional rendering.
   - Understand event handling with **`v-on`**:
     ```html
     <button @click="handleClick">Click Me</button>
     ```

4. **Build a Simple "To-Do List" App**

   - Features:
     - Add new tasks.
     - Mark tasks as complete/incomplete.
     - Delete tasks.
   - Example structure:

     ```html
     <template>
       <div>
         <h1>To-Do List</h1>
         <input v-model="newTask" placeholder="Add a task" />
         <button @click="addTask">Add</button>
         <ul>
           <li v-for="(task, index) in tasks" :key="index">
             <span
               :style="{ textDecoration: task.done ? 'line-through' : 'none' }"
             >
               {{ task.text }}
             </span>
             <button @click="toggleTask(index)">Toggle</button>
             <button @click="deleteTask(index)">Delete</button>
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
               this.tasks.push({ text: this.newTask, done: false });
               this.newTask = "";
             }
           },
           toggleTask(index) {
             this.tasks[index].done = !this.tasks[index].done;
           },
           deleteTask(index) {
             this.tasks.splice(index, 1);
           },
         },
       };
     </script>
     ```

5. **Optional Challenge** 
   - Add a feature to edit tasks in the list.

#### **Estimated Time**: 3–4 hours
