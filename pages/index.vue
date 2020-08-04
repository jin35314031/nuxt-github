<template>
  <div class="container">
    <p>{{ $store.state.employees.employees }}</p>
    //<button v-on:click="$store.dispatch('employees/updateEmployeesAction')">Delete</button>
  </div>
</template>

<script>

export default {

//computed: {
//  load:function () {
//    return this.$store.state.employees.employees
//  }
   //$store.dispatch('employees/updateEmployeesAction')
// }

mounted: function () {
  this.$store.dispatch('employees/updateEmployeesAction')
 }
}




</script>





