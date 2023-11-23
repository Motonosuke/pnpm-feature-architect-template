import { getPosts } from '@/backend/posts/get-posts';
import { convertGetPosts } from '@/services/posts/get-posts/converter';
import { Posts } from '@/services/posts/get-posts/model';

export const getPostsService = async (): Promise<Posts> => {
  const data = await getPosts();
  return convertGetPosts(data);
};
