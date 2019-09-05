<template>
  <div id="busqueda">
    <form>
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-5 col-form-label">Nombre</label>
        <div class="col-sm-5">
          <input
            type="text"
            class="form-control"
            id="inputEmail3"
            placeholder="Nombre"
            v-model="buscar"
            @input="update"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buscar: ""
    };
  },
  methods: {
    update() {
      this.$store.state.busqueda = this.buscar;
    }
  }
};
</script>

<style>
form {
  align-content: center;
}
</style>