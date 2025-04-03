<template>
    <div class="p-4 bg-light border rounded shadow-sm">
      <h2 class="h5 text-secondary">{{ msg }}</h2>
    </div>
  </template>
  
  <script setup>
  defineProps({
    msg: {
      type: String,
      required: true,
    },
  });
  </script>
  