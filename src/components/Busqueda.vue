<template>
  <div id="busqueda">
    <form>
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-5 col-form-label">Email</label>
        <div class="col-sm-5">
          <input type="email" @keyup="addBusqueda" v-model="stringBuscar" class="form-control" id="inputEmail3" placeholder="Email" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import EventBus from "../bus";
export default {
  name: "busqueda",
  data() {
    return {
      stringBuscar: ""
    };
  },
  methods: {
    addBusqueda: function() {
      EventBus.$emit("add-busqueda", this.stringBuscar);
    }
  }
};
</script>

<style>
form {
  align-content: center;
}
</style>