import HomeCards from "@/components/pages/Home/HomeCards";
import Hero from "@/components/pages/Home/Hero";
import HomeTimeLine from "@/components/pages/Home/HomeTimeLine";

export default function Home() {
  return (
    <section className={"max-w-[1400px] "}>
      <main>
        <Hero />
        <HomeCards />
        <HomeTimeLine />
      </main>
    </section>
  );
}
