<template>
<div>
    <div style="opacity: 0%;">why</div>
    <div class="container">
    <table class="table table-dark table-striped">
        <thead>
            <tr>
                <th v-for="item in keyvalues" :key="item" style="text-transform: capitalize;">{{item}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in table" :key="item">
                <td v-for="key in keyvalues" :key="key">{{item[key]}}</td>
            </tr>
        </tbody>
    </table>
    </div >
</div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted, watch, computed} from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const name = computed(() =>{  return route.params.section})
const table = ref([])
const keyvalues = ref([])

onMounted(async () => {
    loadData(name.value).then((data) => {
        table.value = data
        keyvalues.value = Object.keys(data[0])
    
        
    
    })
    
})


watch(name,  async (newSection, oldSection) => {
    console.log('page change')
    name.value = route.params.section
    loadData(newSection).then((data) => {
        table.value = data
        keyvalues.value = Object.keys(data[0])
        
        
    }).catch((error) => {
        console.log(error)
    })

})



async function loadData(section) {
  try {
    const response = await axios.get(`http://localhost:3000/${section}`)
    console.log(response.data)
   
    
    return response.data
  } catch (error) {
    console.log(error)
   
  }
}
</script>

<style scoped>
table {
    width: 100%;
    
}

.container {
    margin-top: 2rem;
    box-shadow: black;
    
}
</style>