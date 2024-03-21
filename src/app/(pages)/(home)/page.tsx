import HomeNavBar from "@/components/pages/Home/HomeNavBar";
import HomeCards from "@/components/pages/Home/HomeCards";
import Hero from "@/components/pages/Home/Hero";
import HomeTimeLine from "@/components/pages/Home/HomeTimeLine";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <HomeCards />
        <HomeTimeLine />
        <h1>Hello world</h1>
      </main>
      <div className={"h-screen"}></div>
    </>
  );
}
