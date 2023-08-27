import Axios from 'axios';

import { ENV } from '@/constants/env';

export const axios = Axios.create({
  baseURL: ENV.API_URL,
  timeout: 5000,
});

// axios.interceptors.request.use(authRequestInterceptor);

// function authRequestInterceptor(config: AxiosRequestConfig) {
//   const token = storage.getToken();
//   if (token) {
//     config.headers = {
//       Accept: 'application/json',
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     };
//   }
//   return config;
// }

// axios.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (error) => {
//     const message = error.response?.data?.message || error.message;
//     useNotificationStore.getState().addNotification({
//       message,
//       title: 'Error',
//       type: 'error',
//     });

//     return Promise.reject(error);
//   },
// );
