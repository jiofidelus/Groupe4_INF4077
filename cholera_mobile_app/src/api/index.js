/** @format */
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://172.16.40.13:8000/api',
  headers: {'Content-Type': 'application/json'},
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    console.log(token, 'THE TOKEN');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default instance;
