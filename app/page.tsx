import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import ProjectApproach from "./components/ProjectApproach";
import ProjectsGallery from "./components/ProjectsGallery";
import WhyMekark from "./components/WhyMekark";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectApproach />
      <WhyMekark />
      <ProjectsGallery />
      <Faq />
      <Cta />
    </main>
  );
}
