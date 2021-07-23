import PageBase from "../components/PageBase";
import Hero from "../components/home/Hero";
import Work from "../components/home/Work";
import Resume from "../components/home/Resume";
import About from "../components/home/About";
import Head from "next/head";

export default function Home() {
  return (
    <PageBase>
      <Head>
        <title>Saman Manesh</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta
          property="og:title"
          content="Saman Manesh's personal website/portfolio"
          key="title"
        />
        <meta property="og:image" content="//www.samanmanesh.com/hero.png" />
        <meta
          property="og:description"
          content="I’m Saman Manesh a Full-Stack Developer located in Toronto...I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences..."
        />
        
      </Head>
        <Hero />
        <Work />
        <Resume />
        <About />
    </PageBase>
  );
}
