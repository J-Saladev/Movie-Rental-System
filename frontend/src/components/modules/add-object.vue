
<template>
    <div>
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="form-container">
                    <form section="form" class="form" >
                        <div v-for="item in table" :key="item">
                        <div v-if="item == 'createdAt' || item == 'updatedAt'"></div>
                        <div class="form-group" v-else>
                            <label for="item" style="text-transform: capitalize;">{{item}}</label>
                            <input type="text" class="form-control" v-model="inputobject[item]" required>
                        </div>
                        </div>
                        <button type="submit" class="btn btn-primary" @click="HandleSubmit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>

</template>

<script setup>
import axios from 'axios'
import { ref, onMounted, watch} from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const name = ref(route.params.section) 
const table = ref([])
onMounted(async () => {
    loadData(name.value).then((data) => {
        table.value = data
    })
    
})

watch(route.params, async (newSection, oldSection) => {
    console.log('page change')
    name.value = route.params.section
    loadData(newSection).then((data) => {
        table.value = data
    }).catch((error) => {
        console.log(error)
    })

})


















let inputobject = ref({})

async function loadData(section) {
  try {
    const response = await axios.get(`http://localhost:3000/${section}`)
    const oneRow = response.data[0]
    const tableData = Object.keys(oneRow)
    
    return tableData
  } catch (error) {
    console.log(error)
    return []
  }
}

const HandleSubmit = (event) => {
    event.preventDefault()
    let form = document.getElementById('form')
    
    if (!form.checkValsectionity()) {
        form.classList.add('was-valsectionated')
        form.reportValsectionity()
        return
    }
    console.log(inputobject.value);
    axios.post(`http://localhost:3000/${name.value}`, inputobject.value).then(() => {
        alert('Added successfully')
    }).catch((error) => {
        console.log(error)
    })
}








</script>

<style>
.form-container {
            background-color: #1e1f21;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px #000000; 
            color: white;
            margin-top: 2rem;
            
        }

        .form-group {
            margin-bottom: 1rem;
        }
        </style>