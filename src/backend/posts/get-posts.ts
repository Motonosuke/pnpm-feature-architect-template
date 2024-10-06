import { z } from "zod";

import { BACKEND_ENDPOINTS } from "@/constants/backend-endpoints";

import { axios } from "@/libs/axios";
import type { AxiosResponse } from "axios";

type Response = {
  body: string;
  id: number;
  title: string;
  userId: number;
}[];

export const getPosts = async (): Promise<Response> => {
  const { data } = await axios.get(BACKEND_ENDPOINTS.JSON_PLACEHOLDER.POSTS);
  return data;
};
