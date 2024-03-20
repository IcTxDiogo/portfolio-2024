import HomeTimeLineItem from "@/components/pages/Home/HomeTimeLineItem";

type timeLineItem = {
  title: string;
  subtitle: string;
  description: string;
  date: string;
};

const timeLine: timeLineItem[] = [
  {
    title: "Fullstack developer",
    subtitle: "Developer using laravel with vue.js",
    description:
      "This is my actual full-time job, I am working with laravel and vue.js, " +
      "learning a lot about the technologies and the best practices." +
      "I am working with a team of developers and we are maintaining a big project " +
      "with a lot of features. I work with the backend and the frontend, " +
      " with legacy code and new features using the inertia.js and vue.js.",
    date: "2023/07",
  },
  {
    title: "Freelancer software developer",
    subtitle: "Developer little projects while I was studying",
    description:
      "I was working with small and side projects, " +
      "I was learning about the technologies and I was using them to make " +
      "some projects, I was working with react and node.js, " +
      "I was learning about the best practices and the best way to make a project " +
      "with a good architecture and a good user experience.",
    date: "2022/08",
  },
  {
    title: "Student from high school to university",
    subtitle: "Various learning from different areas of knowledge",
    description:
      "From high school to university I was learning a lot of things, " +
      "this knowledge make me grow and make me a better developer.",
    date: "2016/06",
  },
];

export default function HomeTimeLine() {
  return (
    <>
      <div className={"flex flex-col items-center"}>
        <section className={"w-full max-w-[800px] px-5"}>
          <h2 className={"text-3xl font-bold"}>The growth of my knowledge</h2>
          <div className={"flex flex-col gap-2 py-6"}>
            {timeLine.map((item, index) => (
              <HomeTimeLineItem key={index} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
