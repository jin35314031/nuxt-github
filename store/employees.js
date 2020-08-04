import axios from 'axios'
import Vuex from 'vuex'

export const state = () => ({
  employees: 'hello'
})

export const mutations = {
  updateEmployees:function(state,payload){
    state.employees = payload
  }
}

export const actions = {
  async updateEmployeesAction (context) {
     const payload = await this.$axios.get('/employees')
     console.log(payload)
     context.commit('updateEmployees', payload)
   }
}


