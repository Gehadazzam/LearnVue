<script setup>
import axios from 'axios'
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const countries = ref([])
const search = ref('')
const filter = ref('')
const router = useRouter()

const fetchCountries = async () => {
  const response =await axios.get(import.meta.env.VITE_API_BASE_URL + 'all')
  console.log(response.data);
  countries.value = response.data
}
onMounted(() => {
  fetchCountries()
})

watch(search, async (newVal) => {
  console.log(newVal)
  const res = await axios.get(import.meta.env.VITE_API_BASE_URL + 'name/' + newVal)
  countries.value = res.data
})

watch(filter, async (newVal) => {
  console.log(newVal)
  const res = await axios.get(import.meta.env.VITE_API_BASE_URL + 'region/' + newVal)
  countries.value = res.data
})

const navigatetocountry = (ccn3) => {
  console.log(ccn3)
  router.push('/CountryDetails/' + ccn3)
}
</script>
<template>
  <input v-model="search" placeholder="Search" type="text" />
  <select v-model="filter">
    <option value="">Filter by Region</option>
    <option value="Africa">Africa</option>
    <option value="Americas">Americas</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
  </select>
  <div @click="navigatetocountry(country.ccn3)" v-for="country of countries" :key="country">
    <img :src="country.flags.png" :alt="country.flags.alt" />
    <h1>{{ country.name.common }}</h1>
    <p>Population: {{ country.population }}</p>
    <p>Region: {{country.region}}</p>
    <p>Capital: {{Array.isArray(country.capital) ? country.capital.join('') : country.capital}}</p>
  </div>
</template>
<style scoped></style>