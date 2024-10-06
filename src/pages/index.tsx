import type { CustomNextPage } from "next";

import { MainLayout } from "@/components/Layouts";
import { HomePage } from "@/page-components/home";

const Home: CustomNextPage = (page) => {
  return <HomePage {...page} />;
};

Home.getLayout = MainLayout;
export default Home;
