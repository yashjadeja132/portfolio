import { ModalProvider } from "@/context/ModalContext";
import SEO from "@/components/SEO";
import Hero from "@/components/Hero/Hero";
import Snapshot from "@/components/Snapshot/Snapshot";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Awards from "@/components/Awards/Awards";
import EducationLanguages from "@/components/EducationLanguages/EducationLanguages";
import Contact from "@/components/Contact/Contact";
import Interactions from "@/components/Interactions/Interactions";
import CaseStudyModal from "@/components/Modal/CaseStudyModal";
import AwardModal from "@/components/Modal/AwardModal";
import { personJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { siteConfig, absoluteUrl } from "@/lib/site";

export default function Home() {
  return (
    <ModalProvider>
      <SEO
        title={siteConfig.title}
        description={siteConfig.description}
        canonical={absoluteUrl("/")}
        image={absoluteUrl(siteConfig.ogImage)}
        jsonLd={[personJsonLd(), websiteJsonLd()]}
      />

      <main id="main">
        <Hero />
        <Snapshot />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
        <EducationLanguages />
        <Contact />
      </main>

      <Interactions />
      <CaseStudyModal />
      <AwardModal />
    </ModalProvider>
  );
}
