import { BACKEND_ENDPOINTS } from "@/constants/backend-endpoints";

import { serverApiClient } from "@/utils/server-api-client";

type Response = {
  body: string;
  id: number;
  title: string;
  userId: number;
}[];

export const getPosts = async (): Promise<Response> => {
  return await serverApiClient.get<Response>(
    BACKEND_ENDPOINTS.JSON_PLACEHOLDER.POSTS,
  );
};
