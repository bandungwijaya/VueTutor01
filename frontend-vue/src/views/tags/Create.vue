<template>
    <div class="container mt-custom">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH TAG</h4>
                        <hr>
                        <div v-if="validation.errors" class="mt-2 alert alert-danger">
                            <ul class="mt-0 mb-0">
                                <li v-for="(error, index) in validation.errors" :key="index">{{ `${error.param} : ${error.msg}` }}</li>
                            </ul>
                        </div>
                        <form @submit.prevent="store">
                            <div class="form-group">
                                <label for="tag" class="font-weight-bold mb-2">TAG</label>
                                <input type="text" class="form-control" v-model="tagdt.tag" placeholder="Masukkan Tag">
                            </div>
                            <div class="form-group mt-3">
                                <label for="ket" class="font-weight-bold mb-2">KETERANGAN</label>
                                <textarea class="form-control" rows="4" v-model="tagdt.ket" placeholder="Masukkan Keterangan Tag"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary mt-3">SIMPAN</button>
                        </form>                        

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
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

        //method store
        function store() {

            let tag = tagdt.tag
            let ket = tagdt.ket

            axios.post('http://localhost:3000/api/tags/store', {
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
            store
        }

    }

}
</script>