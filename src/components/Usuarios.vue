<template>
    <div id="usuarios">
        <ul>
            <div v-for="user in usersFiltrado" :key="user.nombre">
                <div class="float-left card text-white bg-success mb-3 tamano-tarjetas">
                    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
                        <div class="card-header">{{ user.title }}</div>
                        <div class="card-body">
                            <h5 class="card-title">{{ user.nombre }}</h5>
                            <p class="card-text">
                                <img :src="user.foto" :alt="user.nombre" />
                            </p>
                            <div class="card-footer">
                                <small>{{ user.email }}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

    name: "usuarios",
    computed: {
        ...mapGetters(['usersFiltrado'])
    },
    mounted() {
        //Hay que llamarlo directamente porque está en mounted
        this.$store.dispatch('loadUsers')
    },

};
</script>

<style>
.tamano-tarjetas {
    width: 500px;
    max-width: 18rem;
    height: 350px;
}
</style>