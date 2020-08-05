<template>
  <div class="container">
    <p>{{ $store.state.employees.employees }}</p>
    <br>
    <ul v-for="employee in employees">
       <li>
          {{employee}}
          <button v-on:click="$store.dispatch('employees/deleteEmployeesAction',employee.id)">Delete</button>
       </li>
    </ul>
    <br>
    <label>name</label>
    <input type="text" v-model="createEmployee.name"></input>
    <label>role</label>
    <input type="text" v-model="createEmployee.role"></input>
    <button v-on:click="$store.dispatch('employees/createEmployeesAction',createEmployee)">Create</button>
  </div>
</template>

<script>

export default {
  data:function(){
    return {
      createEmployee:{
        name:'',
        role:''
      }
    }
  },
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





