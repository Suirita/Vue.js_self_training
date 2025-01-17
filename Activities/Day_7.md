### **Day 7: Recipe Manager**

### **Objective**

Create a fully functional **"Recipe Manager"** app that incorporates everything you've learned in the week: Vue Router, state management, Composition API, reusable components, form validation, and animations.

---

### **Activities**

#### **1. Project Setup**

- **Initialize the Project**:

  - Use Vue CLI or Vite to scaffold the app.
  - Install necessary dependencies:

    - **Vue Router** for navigation.
    - **Pinia** for state management.
    - **VeeValidate** for form validation.
    - **Tailwind CSS** or **Vuetify** for styling.

    ```bash
    npm install vue-router pinia vee-validate tailwindcss
    ```

- **Create Project Structure**:
  - Organize folders:
    - `components/` (reusable components)
    - `views/` (page components)
    - `store/` (state management)
    - `assets/` (images, styles, etc.).

---

#### **2. Implement Core Features**

##### **2.1 Routing with Vue Router**

- Define routes for key pages:

  - `/` – Home (list all recipes).
  - `/recipe/:id` – View detailed recipe.
  - `/add` – Add a new recipe.

  ```javascript
  import { createRouter, createWebHistory } from "vue-router";
  import Home from "./views/Home.vue";
  import RecipeDetails from "./views/RecipeDetails.vue";
  import AddRecipe from "./views/AddRecipe.vue";

  const routes = [
    { path: "/", component: Home },
    { path: "/recipe/:id", component: RecipeDetails },
    { path: "/add", component: AddRecipe },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;
  ```

##### **2.2 State Management with Pinia**

- Set up a global store for managing recipes and favorites.

  ```javascript
  import { defineStore } from "pinia";

  export const useRecipeStore = defineStore("recipeStore", {
    state: () => ({
      recipes: [],
      favorites: [],
    }),
    actions: {
      addRecipe(recipe) {
        this.recipes.push(recipe);
      },
      toggleFavorite(id) {
        const recipe = this.recipes.find((r) => r.id === id);
        if (recipe) recipe.isFavorite = !recipe.isFavorite;
      },
    },
  });
  ```

##### **2.3 Composition API for Logic**

- Use `ref` and `reactive` for managing local state in components.

  ```javascript
  import { ref } from "vue";

  const title = ref("");
  const ingredients = ref([]);
  const steps = ref("");
  ```

##### **2.4 Dynamic Recipe Details**

- Fetch recipe details using the ID from the URL.

  ```javascript
  import { computed } from "vue";
  import { useRoute } from "vue-router";
  import { useRecipeStore } from "../store/recipeStore";

  const route = useRoute();
  const store = useRecipeStore();
  const recipeId = route.params.id;
  const recipe = computed(() => store.recipes.find((r) => r.id === recipeId));
  ```

---

#### **3. Add Advanced Features**

##### **3.1 Form Validation (VeeValidate)**

- Ensure all fields in the recipe form are validated.

  ```html
  <form @submit.prevent="submitForm">
    <div>
      <label for="title">Title:</label>
      <input v-model="title" id="title" required />
      <span v-if="errors.title">Title is required</span>
    </div>
    <button type="submit">Add Recipe</button>
  </form>
  ```

##### **3.2 Animations and Transitions**

- Add transitions for smooth page navigation or modals.

  ```html
  <transition name="fade">
    <div v-if="showModal">Modal Content</div>
  </transition>
  ```

  ```css
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  ```

##### **3.3 Responsive Design**

- Use Tailwind CSS for styling a responsive and polished UI.

  ```html
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <!-- Recipe cards -->
  </div>
  ```

---

#### **4. Final Touches**

- **Testing**:

  - Test routes and features for any bugs.
  - Handle edge cases (e.g., invalid or missing recipe IDs).

- **Deployment**:
  - Deploy the app to platforms like Netlify, Vercel, or GitHub Pages.

---

### **Outcome**

By the end of the day, you'll have a fully functional **Recipe Manager** app that showcases your mastery of Vue.js, combining all the core concepts and features learned throughout the week.
