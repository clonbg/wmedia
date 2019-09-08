<template>
    <div id="busqueda">
        <form>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-5 col-form-label">Nombre</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" id="inputEmail3" placeholder="Nombre" v-model="busqueda" />
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    computed: {
        busqueda: {
            get() {
                return this.$store.state.busqueda
            },
            set(value) {
                this.$store.commit('updateBusqueda', value)
            }
        }
    },

};
</script>

<style>
form {
    align-content: center;
}
</style>