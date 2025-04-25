<template>
    <div class="container mt-custom">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>EDIT TAG</h4>
                        <hr>
                        <div v-if="validation.errors" class="mt-2 alert alert-danger">
                            <ul class="mt-0 mb-0">
                                <li v-for="(error, index) in validation.errors" :key="index">{{ `${error.param} : ${error.msg}` }}</li>
                            </ul>
                        </div>
                        <form @submit.prevent="update">
                            <div class="form-group">
                                <label for="tag" class="font-weight-bold mb-2">TAG</label>
                                <input type="text" class="form-control" v-model="tagdt.tag" placeholder="Masukkan Tag">
                            </div>
                            <div class="form-group mt-3">
                                <label for="ket" class="font-weight-bold mb-2">KETERANGAN</label>
                                <textarea class="form-control" rows="4" v-model="tagdt.ket" placeholder="Masukkan Keterangan Tag"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary mt-3">UPDATE</button>
                        </form>                        

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

export default {

    setup() {

        //state tags
        const tagdt = reactive({
            tag: '',
            ket: ''
        })

        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //vue router
        const route = useRoute()

        //mounted
        onMounted(() => {

            //get API from Backend
            axios.get(`http://localhost:3000/api/tags/${route.params.id}`)
            .then(response => {
              
              //assign state tags with response data
              tagdt.tag  = response.data.data.tag  
              tagdt.ket  = response.data.data.ket  

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        //method update
        function update() {

            let tag = tagdt.tag
            let ket = tagdt.ket

            axios.patch(`http://localhost:3000/api/tags/update/${route.params.id}`, {
                tag: tag,
                ket: ket
            }).then(() => {

                //redirect ke tag index
                router.push({
                    name: 'tags.index'
                })

            }).catch(error => {
                //assign state validation with error 
                validation.value = error.response.data
            })

        }

        //return
        return {
            tagdt,
            validation,
            router,
            update
        }

    }

}
</script>