import { Header } from "@/components/layout/header";
import { ProfileSection } from "@/components/sections/profile";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { AdditionalSection } from "@/components/sections/additional";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/layout/scroll-to-top";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProfileSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <AdditionalSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}