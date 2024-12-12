import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => {
    const storedItems = localStorage.getItem("cartItems");
    return {
      items: storedItems ? JSON.parse(storedItems) : [],
    };
  },
  getters: {
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + parseFloat(item.price), 0),
  },
  actions: {
    addItem(item) {
      this.items.push(item);
      this.saveToLocalStorage();
    },
    removeItem(index) {
      this.items.splice(index, 1);
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem("cartItems", JSON.stringify(this.items));
    },
  },
});
