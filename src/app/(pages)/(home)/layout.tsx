import { ReactNode } from "react";

import HomeNavBar from "@/components/pages/Home/HomeNavBar";
import HomeFooter from "@/components/pages/Home/HomeFooter";

type LayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function Layout({ children }: LayoutProps) {
  return (
    <section className={"flex justify-center"}>
      <section className={"w-full max-w-[1400px] "}>
        <HomeNavBar />
        {children}
        <HomeFooter />
      </section>
    </section>
  );
}
