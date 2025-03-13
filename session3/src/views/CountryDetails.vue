<script setup>
import { useRouter } from 'vue-router'
import { onMounted, ref} from 'vue'
import apiClient from '@/utils/apiClient.js';
const router = useRouter()
const country = ref({})


const ccn3 = router.currentRoute.value.params.ccn3
const fetchCountries = async () => {
  const response = await apiClient.get('alpha/' + ccn3)
  console.log(response.data);
  country.value = response.data[0]
  console.log(country.value)
}

onMounted( () => {
  fetchCountries()
})
</script>
<template>
  <div>
    <h1>Country Details</h1>
    <p>{{country.name.common}}</p>
    <img :src="country.flags.png" :alt="country.flags.alt" />
    <p>Native Name: {{country.name.nativeName.eng.common}}</p>
    <p>Population: {{country.population}}</p>
    <p>Region: {{country.region}}</p>
    <p>Capital: {{Array.isArray(country.capital) ? country.capital.join('') : country.capital}}</p>


  </div>
</template>