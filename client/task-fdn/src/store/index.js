import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../plugin/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    customers: []
  },
  mutations: {
    setLogin (state, payload) {
      state.isLogin = payload
    },
    setCustomers (state, payload) {
      state.customers = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: 'login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(res => {
          localStorage.access_token = res.data.access_token
          context.commit('setLogin', true)
          router.push('/')
        })
        .catch(err => {
          if (err.response.status !== 400) {
            Vue.swal({
              icon: 'error',
              title: 'Oops error',
              text: err.response.status.message
            })
          } else {
            const message = err.response.data.message.join('<br>')
            Vue.swal({
              icon: 'error',
              title: 'Oops error',
              html: message
            })
          }
        })
    },
    showCustomer (context) {
      const token = localStorage.access_token
      axios({
        method: 'GET',
        url: 'customers',
        headers: {
          access_token: token
        }
      })
        .then(res => {
          context.commit('setCustomers', res.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }

  },
  modules: {
  }
})
