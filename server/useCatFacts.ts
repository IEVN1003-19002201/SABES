import { ref, onMounted } from 'vue';
import axios from 'axios';

export default function useCatFacts() {
  const catFacts = ref([]);

  const fetchCatFacts = async () => {
    try {
      const response = await axios.get('https://catfact.ninja/facts');
      catFacts.value = response.data.data;
      console.log('Datos obtenidos:', catFacts.value); // Agrega esta línea para ver si llegan datos
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  onMounted(fetchCatFacts);

  return { catFacts };
}
