import { CACHE_KEYS } from '@/constants/cache-keys';
import { QueryReturnType } from '@/types/type';

import { ApiError } from '@/utils/api-error';
import { useQuery } from '@/hooks/useQuery';

import { getPostsService, Posts } from '@/services/posts/get-posts';

type UseFetchPosts = () => QueryReturnType<Posts>;

export const useFetchPosts: UseFetchPosts = () => {
  const { data, error, mutate } = useQuery<Posts, ApiError>(CACHE_KEYS.POSTS.GET_POSTS, getPostsService);

  return {
    data,
    error,
    mutate,
  };
};
