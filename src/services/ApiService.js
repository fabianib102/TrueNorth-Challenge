const axios = require('axios').default;

export default class ApiService {

  constructor(headers) {
    this.client = axios.create({headers});
  }

  get = (endpoint)=>{
    console.log(`the endpoint ${endpoint}`);
    const test = this.client.get(endpoint);
    return test;
  }
}