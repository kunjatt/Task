<template>
  <div>
    <table class="table table-sm mx-3">
      <thead class="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Item</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total Price</th>
        </tr>
      </thead>
    <tbody>
      <tr>
        <td>{{customer.id}}</td>
        <td>{{customer.firstname}}</td>
        <td>{{customer.lastname}}</td>
        <td>{{customer.email}}</td>
        <td>{{customer.item}}</td>
        <td>{{customer.quantity}}</td>
        <td>{{customer.totalPrice}}</td>
      </tr>
    </tbody>
</table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: ['customer']
}
</script>

<style>
.table {
  margin-top: 100px;
}
</style>
