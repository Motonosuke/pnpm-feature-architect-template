import { convertGetPosts } from "@/features/posts/services/get-posts/converter";
import { getPosts } from "@/features/posts/services/get-posts/get-posts";
import type { Posts } from "@/features/posts/services/get-posts/model";

export const getPostsService = async (): Promise<Posts> => {
  const data = await getPosts();
  return convertGetPosts(data);
};
