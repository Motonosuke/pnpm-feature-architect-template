import { CACHE_KEYS } from '@/constants/cache-keys';
import { QueryReturnType } from '@/types/type';

import { ApiError } from '@/utils/api-error';
import { useQuery } from '@/hooks/useQuery';

import { Albums, getAlbumsService } from '@/services/albums/get-albums';

type UseFetchAlbums = () => QueryReturnType<Albums>;

export const useFetchAlbums: UseFetchAlbums = () => {
  const { data, error, mutate } = useQuery<Albums, ApiError>(CACHE_KEYS.ALBUMS.GET_ALBUMS, getAlbumsService);

  return {
    data,
    error,
    mutate,
  };
};
