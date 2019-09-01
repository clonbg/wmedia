<template>
    <div id="usuarios">
        <ul>
            <div v-for='user in users' :key='user.name'>
                <div class="float-left card text-white bg-success mb-3 tamano-tarjetas">
                    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
                        <div class="card-header">{{ user.name.title }}</div>
                        <div class="card-body">
                            <h5 class="card-title">{{ user.name.first }} {{ user.name.last }}</h5>
                            <p class="card-text">
                                <img :src="user.picture.large" :alt="user.name-first"/>>
                                <div class="card-footer"><small>{{ user.email }}</small></div>
                            
                        </div>
                    </div>
                </div>
            </div>
            {{ buscar }}
        </ul>
        <div>
        </div>
        
        </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'usuarios',
        data() {
            return {
                users: [],
                buscar:''
            }
        },
        computed: {
            filtrados: function() {
                return this.users.filter((user) => {
                    return user.name.first.includes("a")
                })
            }
        },
        mounted() {
            axios.get('https://randomuser.me/api/?results=50')
                .then(res => {
                    //console.log(res.data.results);
                    this.users = res.data.results;
                })
                .catch(err => {
                    console.error(err);
                })
        },
    }
</script>

<style>
    .tamano-tarjetas {
        width: 500px;
        max-width: 18rem;
        height: 350px;
    }
</style>