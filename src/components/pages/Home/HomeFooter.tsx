import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const size = 25;
const year = new Date().getFullYear();

export default function HomeFooter() {
  return (
    <footer className="my-2 flex flex-col items-center border-t-2 border-border">
      <div className="flex justify-center gap-10 py-4">
        <a href={"https://github.com/IcTxDiogo/"} target={"_blank"}>
          <GitHubLogoIcon width={size} height={size} />
        </a>
        <a
          href={"https://linkedin.com/in/diogofrancasantos/"}
          target={"_blank"}
        >
          <LinkedInLogoIcon width={size} height={size} />
        </a>
      </div>
      <p className="text-base-content text-center text-lg">
        © {year} Diogo Santos. All rights reserved.
      </p>
    </footer>
  );
}
