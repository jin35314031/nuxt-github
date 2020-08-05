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
   async updateEmployeesAction (context) {
     const payload = await this.$axios.get('/api/employees')
     context.commit('updateEmployees', payload.data)
   },
  　async deleteEmployeesAction(context,employeeId){
     console.log(employeeId)
     const url = '/employees/'+employeeId
     console.log(url)
     await this.$axios.delete('/api/employees/'+employeeId)
     const payload = await this.$axios.get('/api/employees')
     context.commit('updateEmployees',payload.data)
   }
}


