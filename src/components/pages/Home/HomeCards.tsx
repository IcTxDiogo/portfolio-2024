import HomeCard, { HomeCardProps } from "@/components/pages/Home/HomeCard";

const baseImagePath = "/images/home/skillsIcons/";

const skillsItems: HomeCardProps[] = [
  {
    href: "https://nextjs.org/",
    src: baseImagePath + "nextjs.svg",
    description: "Next",
  },
  {
    href: "https://supabase.com/",
    src: baseImagePath + "supabase.svg",
    description: "Supabase",
  },
  {
    href: "https://react.dev/",
    src: baseImagePath + "react.svg",
    description: "React",
  },
  {
    href: "https://git-scm.com/",
    src: baseImagePath + "git.svg",
    description: "Git",
  },
  {
    href: "https://github.com/",
    src: baseImagePath + "github.svg",
    description: "Github",
  },
  {
    href: "https://www.typescriptlang.org/",
    src: baseImagePath + "typescript.svg",
    description: "Typescript",
  },
  {
    href: "https://tailwindcss.com/",
    src: baseImagePath + "tailwindcss.svg",
    description: "Tailwind-css",
  },
  {
    href: "https://vitest.dev/",
    src: baseImagePath + "vitest.svg",
    description: "Vitest",
  },
];
export default function HomeCards() {
  return (
    <section className={"my-10 flex justify-center"}>
      <section
        className={
          "grid max-w-[800px] grid-cols-2 justify-items-center gap-5 sm:grid-cols-3 md:grid-cols-4"
        }
      >
        <div className={"col-span-2 px-5 sm:col-span-3 md:col-span-4"}>
          <h2 className={"text-3xl font-bold"}>Skills</h2>
          <p>
            These are the technologies that I have been learning and i use to
            build my projects. with them I can make a fast, responsive and
            modern web application. I am always learning new technologies and
            improving my skills.
          </p>
        </div>
        {skillsItems.map((item, index) => (
          <HomeCard key={index} {...item} />
        ))}
      </section>
    </section>
  );
}
