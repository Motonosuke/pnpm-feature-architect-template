import { axios } from "@/libs/axios";

const BASE_URL = "https://localhost:3000/api/v2";

export const initial = (): void => {
  axios.interceptors.request.use((config) => {
    config.url = BASE_URL + config.url;
    return config;
  });
};
