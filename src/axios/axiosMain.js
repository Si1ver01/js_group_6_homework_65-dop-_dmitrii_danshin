import axios from 'axios';

export const axiosMain = axios.create({
  baseURL: 'https://ddanshin-af25f.firebaseio.com/'
});