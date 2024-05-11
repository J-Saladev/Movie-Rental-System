<template>
    <div>
        <div style="opacity: 0%;">why</div>
        <div class="container">
            <form class="form-container" @submit="HandleSubmit">
                <div class="form-group" v-for="item in Object.keys(inputobject)" :key="item">
                    <label for="item" style="text-transform: capitalize;">{{item}}</label>
                    <input type="text" class="form-control" v-model="inputobject[item]" required>
                    </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted, watch, computed} from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const name = computed(() =>{  return route.params.section})
const objectid = computed(() =>{  return route.params.id})
const inputindex = ref(objectid.value)
const table = ref([])
onMounted(async () => {
    loadData(name.value).then((data) => {
        table.value = data
        inputindex.value = table.value.findIndex(item => item.id == inputindex.value)
        inputobject.value = table.value[inputindex.value]
       console.log(inputobject.value)

    })
    
})






let inputobject = ref({})

async function loadData(section) {
  try {
    const response = await axios.get(`http://localhost:3000/${section}`)
    const table = response.data
   
    
    return table
  } catch (error) {
    console.log(error)
    return []
  }
}

const HandleSubmit = (event) => {
    event.preventDefault()
    let form = event.target
    
    if (!form.checkValidity()) {
        form.classList.add('was-validated')
        form.reportValidity()
        return
    }
    console.log(inputobject.value);
    axios.put(`http://localhost:3000/${name.value}/edit/${inputobject.value.id}`, inputobject.value).then(() => {
        alert('Added successfully')
        window.location.reload()
    }).catch((error) => {
        console.log(error)
    })
}







</script>