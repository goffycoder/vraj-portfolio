import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header />
      
      <main className="flex flex-col">
        {/* HERO: Default Background */}
        <section id="hero" className="w-full">
          <Hero />
        </section>

        {/* SKILLS: Default Background (Must be default for gradient to work!) */}
        <section id="skills" className="w-full py-12">
          <Skills />
        </section>

        {/* PROJECTS: Alternating Color (Secondary/20) */}
        <section id="projects" className="w-full bg-secondary/20 py-12 border-y border-border/50">
          <Projects />
        </section>

        {/* EXPERIENCE: Default Background */}
        <section id="experience" className="w-full py-12">
          <Experience />
        </section>

        {/* EDUCATION: Alternating Color */}
        <section id="education" className="w-full bg-secondary/20 py-12 border-y border-border/50">
          <Education />
        </section>

        {/* CERTIFICATIONS: Default Background */}
        <section id="certifications" className="w-full py-12">
          <Certifications />
        </section>

        {/* CONTACT: Alternating Color */}
        <section id="contact" className="w-full bg-secondary/20 py-12 border-t border-border/50">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}