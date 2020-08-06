import axios from '@nuxtjs/axios'
import proxy from '@nuxtjs/proxy'
import Vuex from 'vuex'

export const state = () => ({
  employees: []

})

export const mutations = {
  updateEmployees:function(state,payload){
    state.employees = payload
  }
}

export const actions = {
   async getEmployeesAction (context) {
     const payload = await this.$axios.get('/api/employees')
     context.commit('updateEmployees', payload.data)
   },
  　async deleteEmployeesAction({ commit, dispatch },employeeId){
     await this.$axios.delete('/api/employees/'+employeeId)
     //const payload = await this.$axios.get('/api/employees')
     //context.commit('updateEmployees',payload.data)
     dispatch('getEmployeesAction')
   },
   async createEmployeesAction({ commit, dispatch },createEmployee){
     await this.$axios.post('/api/employees',createEmployee)
     dispatch('getEmployeesAction')
   },
   async updateEmployeesAction({ commit, dispatch },updateEmployee){
     console.log('update!')
     const updateEmployeeBody = {name:updateEmployee.name,role:updateEmployee.role}
     await this.$axios.put('/api/employees/'+updateEmployee.id,updateEmployeeBody)
     dispatch('getEmployeesAction')
    }
}


