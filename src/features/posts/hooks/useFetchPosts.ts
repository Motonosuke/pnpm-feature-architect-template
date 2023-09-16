import { useGetPosts } from '@/features/posts/apis/get-post';

export const useFetchPosts = () => {
  const { data: postsData } = useGetPosts();

  return {
    postsData,
  };
};
