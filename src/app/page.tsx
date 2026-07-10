import { SiteShell } from "@/components/layout/site-shell";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { AboutSection } from "@/components/sections/about/about-section";
import { ContactSection } from "@/components/sections/contact/contact-section";
import { ExperienceSection } from "@/components/sections/experience/experience-section";
import { FooterSection } from "@/components/sections/footer/footer-section";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { ProjectsSection } from "@/components/sections/projects/projects-section";

export default function HomePage() {
  return (
    <SiteShell>
      <SiteNavigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <FooterSection />
      </main>
    </SiteShell>
  );
}
