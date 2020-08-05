<template>
  <div class="container">
    <p>{{ $store.state.employees.employees }}</p>
    <ul v-for="employee in employees">
       <li>
          {{employee}}
          <button v-on:click="$store.dispatch('employees/deleteEmployeesAction',employee.id)">Delete</button>
       </li>
    </ul>

  </div>
</template>

<script>

export default {
mounted: function () {
   this.$store.dispatch('employees/updateEmployeesAction');
 },

computed: {
    employees() {
      return this.$store.state.employees.employees;
    }
  }
}

</script>





