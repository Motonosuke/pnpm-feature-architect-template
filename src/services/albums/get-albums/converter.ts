import { getAlbums } from '@/backend/albums/get-albums';
import { Albums } from '@/services/albums/get-albums/model';

export const convertGetAlbums = (data: Awaited<ReturnType<typeof getAlbums>>): Albums => {
  return data.map((post) => ({
    id: post.id,
    title: post.title,
    userId: post.userId,
  }));
};
