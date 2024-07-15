import { getPosts } from '@/backend/posts/get-posts';

import { Posts } from '@/features/posts/services/get-posts/model';

export const convertGetPosts = (data: Awaited<ReturnType<typeof getPosts>>): Posts => {
  return data.map((post) => ({
    body: post.body,
    id: post.id,
    title: post.title,
    userId: post.userId,
  }));
};
