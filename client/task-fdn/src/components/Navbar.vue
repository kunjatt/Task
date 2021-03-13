<template>
  <div class="mb-5">
    <nav class="navbar fixed-top px-5 bg-dark shadow-sm py-3">
    <div class="nav-bg container-fluid">
      <div class="d-flex justify-content-start">
        <router-link to="/" class="text-decoration-none">
          <a class="navbar-brand" href="#">
            <span class="fs-4 text-white">Welcome to FDN Shop</span>
          </a>
        </router-link>
      </div>
      <!-- If Not Login -->
      <div v-if="!isLogin">
        <router-link to="/login">
          <button class="btn btn-light btn-login mx-2 rounded-0">Login</button>
        </router-link>
      </div>
      <!-- IF Login -->
      <div v-if="isLogin">
        <button @click="logout" class="btn btn-outline-danger rounded-0">logout</button>
      </div>
    </div>
  </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$swal({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Logout'
      })
        .then(res => {
          if (res.isConfirmed) {
            localStorage.clear()
            this.$store.commit('setLogin', false)
            this.$router.push('/')
          }
        })
    }
  },
  computed: {
    ...mapState([
      'isLogin'
    ])
  }
}
</script>

<style>

</style>
