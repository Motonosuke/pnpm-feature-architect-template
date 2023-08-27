import useSWR from 'swr';

import { axios } from '@/libs/axios';

import { Albums, AlbumsEntity } from '@/features/albums/types';

/**
 * Postsを取得
 * @returns
 * @package
 */

export const useGetAlbums = () => {
  return useSWR(`https://jsonplaceholder.typicode.com/albums`, (url: string) => getAlbums(url), {
    suspense: false,
  });
};

const getAlbums = async (url: string): Promise<Albums> => {
  const { data } = await axios.get<Albums>(url);
  return AlbumsEntity.new(data);
};
