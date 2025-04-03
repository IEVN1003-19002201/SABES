<script setup>
import { ref } from 'vue';

const form = ref({
  date: '',
  connectionType: '',
  bandwidth: '',
  equipment: '',
  financedBy: '',
  provider: '',
  status: '',
  observation: ''
});

const save = () => {
  if (
    form.value.date &&
    form.value.connectionType &&
    form.value.bandwidth &&
    form.value.equipment &&
    form.value.financedBy &&
    form.value.provider &&
    form.value.status
  ) {
    alert('Datos guardados correctamente');
    console.log('Formulario:', form.value);
  } else {
    alert('Por favor, completa todos los campos obligatorios');
  }
};
</script>

<template>
  <div class="card shadow-lg">
    <div class="card-header bg-primary text-white text-center">
      <h2>REGISTRO DE SERVICIOS DE INTERNET</h2>
    </div>
    <div class="card-body">
      <form @submit.prevent="save">
        <div class="row g-3">
          <div class="col-md-6">
            <label class="form-label">Fecha Contratación</label>
            <input type="date" v-model="form.date" class="form-control" />
          </div>

          <div class="col-md-6">
            <label class="form-label">Tipo de Conexión</label>
            <select v-model="form.connectionType" class="form-select">
              <option value="SATELITAL">SATELITAL</option>
              <option value="FIBRA ÓPTICA">FIBRA ÓPTICA</option>
              <option value="DSL">DSL</option>
            </select>
          </div>

          <div class="col-md-6">
            <label class="form-label">Ancho de Banda Contratado</label>
            <select v-model="form.bandwidth" class="form-select">
              <option value="10 a 50 MB">10 a 50 MB</option>
              <option value="100 a 200 MB">100 a 200 MB</option>
            </select>
          </div>

          <div class="col-md-6">
            <label class="form-label">Equipos con Internet</label>
            <input type="number" v-model="form.equipment" class="form-control" />
          </div>

          <div class="col-md-6">
            <label class="form-label">Financiado por</label>
            <select v-model="form.financedBy" class="form-select">
              <option value="SABES">SABES</option>
              <option value="GOBIERNO">GOBIERNO</option>
            </select>
          </div>

          <div class="col-md-6">
            <label class="form-label">Proveedor</label>
            <select v-model="form.provider" class="form-select">
              <option value="TOTAL PLAY">TOTAL PLAY</option>
              <option value="TELMEX">TELMEX</option>
            </select>
          </div>

          <div class="col-md-6">
            <label class="form-label">Estatus Servicio</label>
            <select v-model="form.status" class="form-select">
              <option value="Funcionando">Funcionando</option>
              <option value="Sin Servicio">Sin Servicio</option>
            </select>
          </div>

          <div class="col-md-12">
            <label class="form-label">Observación</label>
            <textarea v-model="form.observation" class="form-control" placeholder="Escribe alguna observación..."></textarea>
          </div>

          <div class="text-end">
            <button type="submit" class="btn btn-success">
              GUARDAR
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
