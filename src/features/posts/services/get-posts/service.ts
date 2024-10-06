import { getPosts } from "@/backend/posts/get-posts";

import { convertGetPosts } from "@/features/posts/services/get-posts/converter";
import type { Posts } from "@/features/posts/services/get-posts/model";

export const getPostsService = async (): Promise<Posts> => {
  const data = await getPosts();
  return convertGetPosts(data);
};
