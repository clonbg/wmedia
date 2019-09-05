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
                <img :src="user.foto" :alt="user.nombre" />>
              </p>
              <div class="card-footer">
                <small>{{ user.email }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ul>
    <div></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "usuarios",
  data() {
    return {
      users: []
    };
  },
  computed: {
    usersFiltrado() {
      return this.users.filter(user => {
        return user.nombre.toLowerCase().includes(this.$store.state.busqueda.toLowerCase());
      });
    }
  },
  mounted() {
    axios
      .get("https://randomuser.me/api/?results=500")
      .then(res => {
        //console.log(res.data.results);
        var usuarios = res.data.results.map(usuario => {
          return {
            title: usuario.name.title,
            nombre:
              usuario.name.first.charAt(0).toUpperCase() +
              usuario.name.first.slice(1) +
              " " +
              usuario.name.last.charAt(0).toUpperCase() +
              usuario.name.last.slice(1),
            email: usuario.email,
            foto: usuario.picture.medium
          };
        });
        this.users = usuarios;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>

<style>
.tamano-tarjetas {
  width: 500px;
  max-width: 18rem;
  height: 350px;
}
</style>