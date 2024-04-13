import Image from "next/image";

import { Card } from "@/components/ui/card";

export type HomeCardProps = {
  href: string;
  src: string;
  description: string;
};

export default function HomeCard({ href, src, description }: HomeCardProps) {
  return (
    <a href={href} target={"_blank"}>
      <Card className={"aspect-square w-[150px]"}>
        <div
          className={
            "flex h-full flex-col items-center justify-around bg-primary/40"
          }
        >
          <Image src={src} alt={description + "-logo"} width={60} height={60} />
          <h3>{description}</h3>
        </div>
      </Card>
    </a>
  );
}
