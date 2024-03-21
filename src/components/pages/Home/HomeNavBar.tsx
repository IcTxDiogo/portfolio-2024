import { randomUUID, UUID } from "node:crypto";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ThemeModeToggle } from "@/components/ThemeModeToggle";

type HomeItem = {
  id: UUID;
  name: string;
  link: string;
};

const homeItens: HomeItem[] = [
  { id: randomUUID(), name: "About", link: "/" },
  { id: randomUUID(), name: "Projects", link: "/projects" },
  { id: randomUUID(), name: "Contact", link: "/contact" },
];

export default function HomeNavBar() {
  return (
    <>
      <nav className={"flex items-center justify-between p-5 shadow-md"}>
        <section>Logo</section>
        <ul className={"flex"}>
          {homeItens.map((item) => (
            <li key={item.id}>
              <Link href={item.link}>
                <Button variant={"link"}>{item.name}</Button>
              </Link>
            </li>
          ))}
        </ul>
        <section>
          <ThemeModeToggle />
        </section>
      </nav>
    </>
  );
}
