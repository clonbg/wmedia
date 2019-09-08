import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
Vue.use(Vuex, axios)

export const store = new Vuex.Store({
  state: {
    users: [],
    busqueda: ''
  },
  mutations: {
    SET_USERS(state, usuarios) {
      state.users = usuarios
      //console.log(state.users)
    },
    updateBusqueda(state, busqueda) {
      state.busqueda = busqueda
    }
  },
  getters: {
    usersFiltrado(state) {
      return state.users.filter(user => {
        return user.nombre.toLowerCase().includes(state.busqueda.toLocaleLowerCase());
      });
    }
  },
  actions: {
    loadUsers({ commit }) {//para definir el commit
      //console.log('Works')
      axios
        .get("https://randomuser.me/api/?results=500")
        .then(resp => {
          var usuarios = resp.data.results.map(usuario => {
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
          //El commit lo manda a la funcion SET_USERS de mutation
          commit('SET_USERS', usuarios)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },


});
