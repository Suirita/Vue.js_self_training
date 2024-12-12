<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="(item, index) in cartStore.items" :key="index">
        {{ item.name }} - ${{ item.price }}
        <button @click="cartStore.removeItem(index)">Remove</button>
      </li>
    </ul>
    <button @click="addToCart">Add Random Item</button>
    <p>Total: ${{ cartStore.totalPrice.toFixed(2) }}</p>
  </div>
</template>

<script>
import { useCartStore } from "./stores/cart";

export default {
  setup() {
    const cartStore = useCartStore();

    const addToCart = () => {
      const randomItem = {
        name: "Item " + Math.floor(Math.random() * 100),
        price: (Math.random() * 100).toFixed(2),
      };
      cartStore.addItem(randomItem);
    };

    return {
      cartStore,
      addToCart,
    };
  },
};
</script>
