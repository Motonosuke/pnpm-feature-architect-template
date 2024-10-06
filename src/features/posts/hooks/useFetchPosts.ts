import { CACHE_KEYS } from "@/constants/cache-keys";
import type { QueryReturnType } from "@/types/type";

import { useQuery } from "@/hooks/useQuery";
import type { ApiError } from "@/utils/api-error";

import {
  type Posts,
  getPostsService,
} from "@/features/posts/services/get-posts";

type UseFetchPosts = () => QueryReturnType<Posts>;

export const useFetchPosts: UseFetchPosts = () => {
  const { data, error, mutate } = useQuery<Posts, ApiError>(
    CACHE_KEYS.POSTS.GET_POSTS,
    getPostsService,
  );

  return {
    data,
    error,
    mutate,
  };
};
