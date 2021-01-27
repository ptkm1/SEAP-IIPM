import axios from "axios";

const Api = axios.create({
  baseURL: 'http://31.220.48.33:3333/'
})

export default Api
