import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});

export default Axios;
