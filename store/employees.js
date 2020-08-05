import axios from '@nuxtjs/axios'
import proxy from '@nuxtjs/proxy'
import Vuex from 'vuex'

export const state = () => ({
  employees: [{id:1,name:'defaultName1',role:'defaultRole'},{id:2,name:'defaultName2',role:'defaultRole'},]

})

export const getters ={
  getState:function(state){
    return state.employees
  }
}

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
  　async deleteEmployeesAction(context,employeeId){
     const url = '/employees/'+employeeId
     await this.$axios.delete('/api/employees/'+employeeId)
     const payload = await this.$axios.get('/api/employees')
     context.commit('updateEmployees',payload.data)
   },
   async createEmployeesAction(context,createEmployee){
     await this.$axios.post('/api/employees',createEmployee)
     const payload = await this.$axios.get('/api/employees')
     context.commit('updateEmployees',payload.data)
   },
   async updateEmployeesAction(context,updateEmployee){
     console.log(updateEmployee)
    }
}


