import axios from 'axios';
import {TIMEOUT_DURATION} from './data.js';

export const createAPI = () => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/wtw`,
    timeout: TIMEOUT_DURATION,
    withCredentials: true
  });

  return api;
};
