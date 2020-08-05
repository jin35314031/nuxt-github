<template>
  <div class="container">
   <p>{{ $store.state.employees.employees }}</p>
    <br>
    <ul v-for="employee in employees">
       <li>
          <label>name</label>
          <input type="text" v-model="employee.name">
          <label>role</label>
          <input type="text" v-model="employee.role">
          <button v-on:click="$store.dispatch('employees/updateEmployeesAction',employee)">Edit</button>
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
      },
      updateEmployee:{
        id:'',
        name:'',
        role:''
      }
    }
  },
  mounted: function () {
    console.log('mounted')
    this.$store.dispatch('employees/getEmployeesAction');
  },

  computed: {
    employees: {
  			  get () {
  			  	return this.$store.state.employees.employees
  		  	},
  			  set (value) {
  			  	this.$store.commit('updateEmployeesAction', value)
  			  }
  		  }
    //employees() {
    //  console.log('computed')
    //  return this.$store.state.employees.employees;
    // }

    //employees(){
    //  console.log('computed')
    //  return this.$store.getters.employees
    //}
  }
}

</script>





