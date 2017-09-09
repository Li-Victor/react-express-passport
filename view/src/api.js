import axios from 'axios';

export default function login(credentials) {
  return axios.post('/auth/login', { credentials }).then(res => res.data.user);
}
