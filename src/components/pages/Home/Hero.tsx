import { ChevronRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className={"flex flex-col-reverse gap-10 p-20 shadow-md md:flex-row"}
    >
      <div
        className={
          "prose flex items-center justify-center text-xl dark:prose-invert md:w-1/2"
        }
      >
        <div>
          <h1>
            <span className={"text-xl"}>{"This is me,"}</span>{" "}
            <span className={"text-primary"}>{"Diogo"}</span>
          </h1>
          <p>
            {
              "This is the place where your ideas take flight and become reality through the power of my expertise"
            }
          </p>
          <Button>
            {"let's make the dream come true"} <ChevronRight size={16} />
          </Button>
        </div>
      </div>
      <div className={"flex justify-center md:w-1/2"}>
        <Image
          src="https://i.imgur.com/iF3vs2l.jpg"
          className="max-w-sm rounded-full shadow-2xl"
          width={300}
          height={300}
          alt="profile picture"
        />
      </div>
    </section>
  );
}
