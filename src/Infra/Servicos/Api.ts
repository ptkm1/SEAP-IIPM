import axios from "axios";

const Api = axios.create({
  // baseURL: 'http://194.31.52.245:3333/'
  baseURL: 'http://localhost:3333'
})

export default Api