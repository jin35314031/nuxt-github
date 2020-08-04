<template>
  <div class="container">
    <p>{{ $store.state.employees.employees }}</p>
    <!-- <button v-on:click="$store.dispatch('')">Delete</button> -->

  </div>
</template>

<script>

export default {

mounted: function () {
  this.$store.dispatch('employees/updateEmployeesAction')
 }
}


</script>





