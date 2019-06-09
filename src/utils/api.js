import axios from 'axios';
// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'http://localhost:5050/api',
});

// Alter defaults after instance has been created
instance.defaults.headers.common[
  'Authorization'
] = `Bearer ${localStorage.getItem('token')}`;

export default instance;
