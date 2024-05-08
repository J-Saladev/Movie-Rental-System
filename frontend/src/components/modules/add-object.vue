
<template>
    <div>
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="form-container">
                    <form id="form" class="form" >
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
import { ref} from 'vue'
const props = defineProps({
    section: String
})
console.log(props.section);



const example = ref({ name: 'Example', address: '123 Main St', telephone: '123-456-7890', email: 'XJ4X7@example.com', zipcode: '12345', createdAt: new Date(), updatedAt: new Date()})

const table = Object.keys(example.value)
table.slice(0, -1)

let inputobject = ref({})


const HandleSubmit = (event) => {
    event.preventDefault()
    let form = document.getElementById('form')
    
    if (!form.checkValidity()) {
        form.classList.add('was-validated')
        form.reportValidity()
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