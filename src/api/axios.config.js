import axios from 'axios'


// Configura axios para receber url base automaticamente, evitando repetição nas requisições.
const api = axios.create({
  baseURL: 'https://testapi.io/api/Jonas-buriti'
})

export default api

