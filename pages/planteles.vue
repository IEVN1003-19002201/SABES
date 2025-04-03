<template>
  <div class="container mt-4">
    <h1 class="text-center">Información de Planteles</h1>

    <!-- Filtros superiores -->
    <div class="row mb-3">
      <div class="col-md-6">
        <label class="form-label">Selecciona una Región:</label>
        <select v-model="selectedRegion" @change="applyFilters" class="form-select">
          <option value="">Todas</option>
          <option v-for="region in regiones" :key="region">{{ region }}</option>
        </select>
      </div>
      <div class="col-md-6">
        <label class="form-label">Selecciona un Plantel:</label>
        <select v-model="selectedPlantel" @change="applyFilters" class="form-select">
          <option value="">Todos</option>
          <option v-for="plantel in plantelesDisponibles" :key="plantel">{{ plantel }}</option>
        </select>
      </div>
    </div>

    <!-- Filtros en la tabla -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>
            Región
            <input v-model="filters.region" @input="applyFilters" class="form-control form-control-sm" placeholder="Filtrar..." />
          </th>
          <th>
            Plantel
            <input v-model="filters.plantel" @input="applyFilters" class="form-control form-control-sm" placeholder="Filtrar..." />
          </th>
          <th>
            Compañía de Internet
            <input v-model="filters.compania" @input="applyFilters" class="form-control form-control-sm" placeholder="Filtrar..." />
          </th>
          <th>
            Acceso a Internet
            <select v-model="filters.internet" @change="applyFilters" class="form-select form-select-sm">
              <option value="">Todos</option>
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </th>
          <th>
            Equipos de Escritorio
          </th>
          <th>
            Laptops
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(plantel, index) in filteredPlanteles" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ plantel.region }}</td>
          <td>{{ plantel.nombre }}</td>
          <td>{{ plantel.compania_internet }}</td>
          <td>{{ plantel.acceso_internet ? 'Sí' : 'No' }}</td>
          <td>{{ plantel.equipos_escritorio }}</td>
          <td>{{ plantel.laptops }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import usePlanteles from '@/server/usePlanteles';

const { regiones, planteles, selectedRegion, selectedPlantel, filteredPlanteles, filterPlanteles } = usePlanteles();

// Filtros individuales
const filters = ref({
  region: '',
  plantel: '',
  compania: '',
  internet: '',
  equipos: '',
  laptops: ''
});

// Filtrar planteles por región
const plantelesDisponibles = computed(() => {
  return planteles.value
    .filter(p => !selectedRegion.value || p.region === selectedRegion.value)
    .map(p => p.nombre);
});

// Aplicar todos los filtros
const applyFilters = () => {
  filterPlanteles(filters.value);
};
</script>
