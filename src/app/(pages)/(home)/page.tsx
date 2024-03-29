import HomeNavBar from "@/components/pages/Home/HomeNavBar";
import HomeCards from "@/components/pages/Home/HomeCards";
import Hero from "@/components/pages/Home/Hero";
import HomeTimeLine from "@/components/pages/Home/HomeTimeLine";
import HomeFooter from "@/components/pages/Home/HomeFooter";

export default function Home() {
  return (
    <section className={"max-w-[1400px] "}>
      <HomeNavBar />
      <main>
        <Hero />
        <HomeCards />
        <HomeTimeLine />
      </main>
      <HomeFooter />
    </section>
  );
}
