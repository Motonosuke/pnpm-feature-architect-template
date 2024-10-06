import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement } from "react";

import "tailwindcss/tailwind.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const NextApp: NextPage<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default NextApp;
