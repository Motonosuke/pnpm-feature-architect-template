import type { CustomLayout } from 'next';
import { RecoilRoot } from 'recoil';

import { MainHeader } from '@/components/Header';

export const MainLayout: CustomLayout = (page) => {
  return (
    <RecoilRoot>
      <MainHeader />
      <main>
        <div className="mx-auto mt-10 w-4/5">{page}</div>
      </main>
    </RecoilRoot>
  );
};
