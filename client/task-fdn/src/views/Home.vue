<template>
  <div class="home">
    <div>
      <Navbar />
    </div>
    <div>
      <Table v-for="customer in customers" :key="customer.id" :customer="customer" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'
import Table from '../components/Table'

export default {
  name: 'Home',
  components: {
    Navbar,
    Table
  },
  methods: {
    showCustomers () {
      this.$store.dispatch('showCustomer')
    }
  },
  created () {
    this.showCustomers()
  },
  computed: {
    customers () {
      return this.$store.state.customers
    }
  }
}
</script>
