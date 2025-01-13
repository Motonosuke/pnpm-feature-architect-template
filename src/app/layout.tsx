import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import "@/styles/globals.css";
import { MainFooter } from "@/components/Footer";
import { MainHeader } from "@/components/Header";
import { ENV } from "@/constants/env";

const siteName = "Next.js App Router Training";
const description =
  "Introducing various basic patterns using Next.js' app router with simplified code.";

export const metadata: Metadata = {
  title: siteName,
  description,
  metadataBase: new URL(ENV.SITE_URL),
  openGraph: {
    title: siteName,
    description,
    url: ENV.SITE_URL,
    siteName,
    type: "website",
  },
};

type Props = PropsWithChildren<{
  modal: React.ReactNode;
}>;

export default function Layout({ modal, children }: Props) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen">
        <MainHeader />
        <main className="p-6 flex-1 h-full">{children}</main>
        <MainFooter />
        {modal}
        {/* MEMO: insert script */}
      </body>
    </html>
  );
}
