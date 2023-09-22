import { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

import { AlbumType } from '@/features/albums';

type AlbumsState = {
  albums: AlbumType | null;
};

const albumsRecoilState = atom<AlbumsState>({
  default: { albums: null },
  key: 'albumsState',
});

/**
 * アルバム一覧を取得
 * @returns Albums | null
 */
export const useAlbumsState = () => {
  return useRecoilValue(albumsRecoilState);
};

/**
 * アルバム一覧を更新
 */
export const useAlbumsMutators = () => {
  const setState = useSetRecoilState(albumsRecoilState);
  const setAlbumsState = useCallback((albums: AlbumType | null) => setState({ albums }), [setState]);
  return { setAlbumsState };
};
