const axios = require('axios').default;

export default class ApiService {

  constructor(headers) {
    this.client = axios.create({headers});
  }

  get = (endpoint)=>{
    return this.client.get(endpoint);
  }

  update = (endpoint) => {
    return this.client.put(endpoint);
  };
}