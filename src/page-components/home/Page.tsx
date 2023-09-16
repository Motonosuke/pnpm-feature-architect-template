import { FC } from 'react';

import { Posts } from '@/features/posts/components/Posts';

export const HomePage: FC = () => {
  return (
    <div>
      <p className="text-center text-2xl">Post</p>
      <div className="mt-20">
        <Posts />
      </div>
    </div>
  );
};
