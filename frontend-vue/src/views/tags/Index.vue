<template>
    <div class="container mt-custom">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>DATA TAGS</h4>
                        <hr>
                        <router-link :to="{name: 'tags.create'}" class="btn btn-md btn-success">TAMBAH TAG</router-link>

                        <table class="table table-striped table-bordered mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">TAG</th>
                                    <th scope="col">KETERANGAN</th>
                                    <th scope="col">OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(tag, index) in tags" :key="index">
                                    <td>{{ tag.tag }}</td>
                                    <td>{{ tag.ket }}</td>
                                    <td class="text-center"></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default {

    setup() {

        //reactive state
        let tags = ref([])

        //mounted
        onMounted(() => {

           //panggil function "getDataTags" 
           getDataTags()

        })

        //function "getDataTags"
        function getDataTags() {

            //get API from Express Backend
            axios.get('http://localhost:3000/api/tags')
            .then(response => {
              
              //assign state tags with response data
              tags.value = response.data.data

            }).catch(error => {
                console.log(error.response.data)
            })
        }

        //return
        return {
            tags,
            getDataTags,
        }

    }

}
</script>