<template>
  <span
    @click="$emit('toggle')"
    :style="{
      textDecoration: task.done ? 'line-through' : 'none',
      cursor: 'pointer',
    }"
  >
    <slot />
  </span>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["toggle"]);
</script>
