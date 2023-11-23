import { getAlbums } from '@/backend/albums/get-albums';
import { convertGetAlbums } from '@/services/albums/get-albums/converter';
import { Albums } from '@/services/albums/get-albums/model';

export const getAlbumsService = async (): Promise<Albums> => {
  const data = await getAlbums();
  return convertGetAlbums(data);
};
