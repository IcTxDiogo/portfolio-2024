import { randomUUID } from "crypto";
import HomeShowProject, {
  Project,
} from "@/components/pages/Home/HomeShowProject";

const projects: Project[] = [
  {
    id: randomUUID(),
    name: "PokeBro - Map",
    description: "This is the map of ot server called PokeBro",
    url: "/project/pokebro-map",
  },
];

export default function ProjectsPage() {
  return (
    <div className=" flex flex-col items-center">
      <div className="flex w-full max-w-3xl flex-col space-y-4 p-4">
        <h1 className="m-8 text-xl font-bold">
          {"Here's some of my projects, I hope you can see what i can do!"}
        </h1>
        <HomeShowProject projects={projects} />
      </div>
    </div>
  );
}
