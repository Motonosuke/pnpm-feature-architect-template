import { z } from 'zod';

import { BACKEND_ENDPOINTS } from '@/constants/backend-endpoints';

import { axios } from '@/libs/axios';

const zPostsResponseScheme = z.array(
  z.object({
    body: z.string(),
    id: z.number(),
    title: z.string(),
    userId: z.number(),
  }),
);

type PostsResponse = z.infer<typeof zPostsResponseScheme>;

class PostsEntity {
  static new(res: PostsResponse) {
    try {
      zPostsResponseScheme.parse(res);
    } catch (error) {
      console.error(error, 'PostsEntity');
    }
    return res;
  }
}

export const getPosts = async (): Promise<PostsResponse> => {
  const { data } = await axios.get<PostsResponse>(BACKEND_ENDPOINTS.JSON_PLACEHOLDER.POSTS);
  return PostsEntity.new(data);
};
