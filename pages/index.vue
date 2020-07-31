<template>
  <div class="container">
    {{users}}
    <button v-on:click=""></button>
  </div>
</template>

<script>
//const axios = require('axios')
//let url = 'https://api.github.com/users/jin35314031'
//let url = 'http://localhost:8080/employees'

//export default {
//  asyncData({ params }) {
//    return axios.get(url)
//      .then ((res) => {
//        return { users: res.data }
//      })
//  }
//}

import axios from 'axios'

export default {
async asyncData ({ params }) {
  const { data: users } = await axios.get(`http://localhost:8080/employees`)
  return {
    users
  }
 }
}



</script>

