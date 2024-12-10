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

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  emits: ["toggle"],
};
</script>
