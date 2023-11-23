import { z } from 'zod';

import { BACKEND_ENDPOINTS } from '@/constants/backend-endpoints';

import { axios } from '@/libs/axios';

const zAlbumsResponseScheme = z.array(
  z.object({
    id: z.number(),
    title: z.string(),
    userId: z.number(),
  }),
);

type AlbumsResponse = z.infer<typeof zAlbumsResponseScheme>;

class AlbumsEntity {
  static new(res: AlbumsResponse) {
    try {
      zAlbumsResponseScheme.parse(res);
    } catch (error) {
      console.error(error, 'AlbumsEntity');
    }
    return res;
  }
}

export const getAlbums = async (): Promise<AlbumsResponse> => {
  const { data } = await axios.get<AlbumsResponse>(BACKEND_ENDPOINTS.JSON_PLACEHOLDER.ALBUMS);
  return AlbumsEntity.new(data);
};
