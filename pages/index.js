import PageBase from "../components/PageBase";
import Hero from "../components/home/Hero";
import Work from "../components/home/Work";
import Resume from "../components/home/Resume";
import About from "../components/home/About";

export default function Home() {
  return (
    <PageBase>
        <Hero />
        <Work />
        <Resume />
        <About />
    </PageBase>
  );
}
