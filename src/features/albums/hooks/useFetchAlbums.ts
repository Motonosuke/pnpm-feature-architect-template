import { useGetAlbums } from '@/features/albums/api/get-albums';

export const useFetchAlbums = () => {
  const { data: albumsData } = useGetAlbums();

  return { albumsData };
};
