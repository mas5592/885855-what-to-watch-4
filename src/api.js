import axios from 'axios';
import {ENTRY_POINT, TIMEOUT_DURATION} from './const';

const ErrorCodes = {
  SUCCESS: 200,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: ENTRY_POINT,
    timeout: TIMEOUT_DURATION,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onError = (err) => {
    const {response} = err;

    if (response.status === ErrorCodes.UNAUTHORIZED || response.status === ErrorCodes.BAD_REQUEST) {
      onUnauthorized();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onError);
  return api;
};
