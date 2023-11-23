import { LoadingSpinner } from '@/components/Loading';
import { useFetchAlbums } from '@/features/albums/hooks/useFetchAlbums';

export const Albums = () => {
  const { data: albumsData } = useFetchAlbums();

  if (!albumsData) return <LoadingSpinner />;

  return (
    <ul>
      {albumsData.map((album) => (
        <li key={album.id}>{album.title}</li>
      ))}
    </ul>
  );
};
