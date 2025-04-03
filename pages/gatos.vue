<template>
    <div class="container mt-4">
      <h2 class="text-center">Datos Curiosos sobre Gatos</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Dato Curioso</th>
            <th>Longitud</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(fact, index) in catFacts" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ fact.fact }}</td>
            <td>{{ fact.length }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import useCatFacts from '~/server/useCatFacts';
  
  const { catFacts } = useCatFacts();
  
  onMounted(() => {
    console.log('Datos cargados en el componente:', catFacts.value);
  });
  </script>
  