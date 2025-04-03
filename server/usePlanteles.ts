import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

export default function usePlanteles() {
  const regiones = ref([]);
  const planteles = ref([]);
  const selectedRegion = ref('');
  const selectedPlantel = ref('');
  const filteredPlanteles = ref([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('URL_API');
      regiones.value = response.data.regiones;
      planteles.value = response.data.planteles;
      filteredPlanteles.value = planteles.value;
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const filterPlanteles = (filters) => {
    filteredPlanteles.value = planteles.value.filter(p => {
      return (
        (!selectedRegion.value || p.region === selectedRegion.value) &&
        (!selectedPlantel.value || p.nombre === selectedPlantel.value) &&
        (!filters.region || p.region.toLowerCase().includes(filters.region.toLowerCase())) &&
        (!filters.plantel || p.nombre.toLowerCase().includes(filters.plantel.toLowerCase())) &&
        (!filters.compania || p.compania_internet.toLowerCase().includes(filters.compania.toLowerCase())) &&
        (!filters.internet || (p.acceso_internet.toString() === filters.internet))
      );
    });
  };

  onMounted(fetchData);

  return { regiones, planteles, selectedRegion, selectedPlantel, filteredPlanteles, filterPlanteles };
}
