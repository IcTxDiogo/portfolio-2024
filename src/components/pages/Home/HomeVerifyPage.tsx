"use client";

import { usePathname } from "next/navigation";

type HomeVerifyPageProps = {
  itemLink: string;
};
export default function HomeVerifyPage({ itemLink }: HomeVerifyPageProps) {
  const path = usePathname();
  if (!(path === itemLink)) {
    return null;
  }
  return <div className={"mx-4 border-b-2 border-primary"}></div>;
}
