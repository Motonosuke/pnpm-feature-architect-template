import { Inter } from 'next/font/google';

import { Sample } from '@/components/Sample';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <Sample />
    </main>
  );
};

export default Home;
