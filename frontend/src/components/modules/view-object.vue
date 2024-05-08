<template>
<div>
    <table class="table ">
        <thead>
            <tr>
                <th scope="col" v-for="item in Object.keys(table[0])" :key="item">#</th>
            </tr>
        </thead>
        <tbody>
            <!-- <tr v-for="row in table" :key="row">
                <td v-for="item in Object.keys(row)" :key="item">{{row[item]}}</td>
            </tr> -->
        </tbody>
    </table>
</div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted, watch, computed} from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const name = computed(() =>{  return route.params.section})
const table = ref([])
onMounted(async () => {
    loadData(name.value).then((data) => {
        table.value = data
        console.log(table.value)
    })
    
})


watch(name,  async (newSection, oldSection) => {
    console.log('page change')
    name.value = route.params.section
    loadData(newSection).then((data) => {
        table.value = data
    }).catch((error) => {
        console.log(error)
    })

})



async function loadData(section) {
  try {
    const response = await axios.get(`http://localhost:3000/${section}`)
   
    
    return response
  } catch (error) {
    console.log(error)
    return []
  }
}
</script>

<style scoped>
table {
    width: 100%;
}
</style>